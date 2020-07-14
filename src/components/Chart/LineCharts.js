import axios from "axios";
import { useState, useEffect } from "react";
import parse from "csv-parse/lib/sync";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import MultiSelect from "react-multi-select-component";
import styled from "styled-components";

export default function LineCharts() {
  let data = [];
  const initialData = ["Italy", "Brazil", "Iran"];
  const [mockData, setMockData] = useState();
  const [maxData, setMaxData] = useState(0);
  const [countryList, setCountryList] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    })
      .then((response) => {
        const records = parse(response.data, {
          columns: true,
          skip_empty_lines: true,
        });
        // console.log(records);

        let tempList = [];
        for (const i in records) {
          tempList.push({
            label: records[i][["Country/Region"]],
            value: records[i][["Country/Region"]],
          });
        }

        const unique = [];
        tempList.map((x) =>
          unique.filter((a) => a.label == x.label && a.value == x.value)
            .length > 0
            ? null
            : unique.push(x)
        );
        setCountryList(unique);

        const newObj = { ...records };
        let dates = [];
        for (const key in newObj[0]) {
          if (
            key !== "Province/State" &&
            key !== "Country/Region" &&
            key !== "Lat" &&
            key !== "Long"
          ) {
            dates.push(key);
          }
        }

        if (selected.length == 0) {
          for (let i in dates) {
            data.push({ date: dates[i] });
            for (let j in records) {
              for (let k in initialData) {
                if (records[j]["Country/Region"] === initialData[k]) {
                  const name = initialData[k];
                  data[i][name] = records[j][dates[i]];
                }
              }
            }
          }
        } else {
          for (let i in dates) {
            data.push({ date: dates[i] });
            for (let j in records) {
              for (let k in selected) {
                if (records[j]["Country/Region"] === selected[k].label) {
                  const name = selected[k].label;
                  data[i][name] = records[j][dates[i]];
                }
              }
            }
          }
        }

        // const newData = [...data].filter((item) => {
        //   let cnt = 0;
        //   for (const index in item) {
        //     if (parseInt(item[index]) > 100 && index !== 0) {
        //       cnt += 1;
        //     }
        //     if (maxData < parseInt(item[index])) {
        //       setMaxData(parseInt(item[index]));
        //     }
        //   }
        //   return cnt === Object.keys(item).length - 1;
        // });

        setMockData(data);
        console.log(mockData);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [selected]);

  function updateSelectCountry(e) {
    // temp.push(e);
    // console.log(temp);
    setSelected(e);
    console.log(selected);
  }

  return (
    <div>
      <StyledWrapper>
        <StyledButton>ผู้ติดเชื้อ</StyledButton>
        <StyledButton>หายแล้ว</StyledButton>
        <StyledButton>เสียชีวิต</StyledButton>
        <div style={{ width: "250px", margin: "0px 5px " }}>
          {/* <h1>เลือกประเทศ</h1> */}
          <MultiSelect
            options={countryList}
            value={selected}
            onChange={function (e) {
              updateSelectCountry(e);
            }}
            labelledBy={"Select"}
            primary={"เลือกประเทศ"}
          />
        </div>
      </StyledWrapper>

      <div style={{ padding: "40px 0" }}>
        <LineChart
          width={1000}
          height={300}
          data={mockData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis type="number" domain={["auto", maxData]} />
          <CartesianGrid stroke="#DDDDDD" vertical={false} />
          <Tooltip />
          <Legend />
          {selected.length == 0
            ? initialData.map((item) => (
                <Line type="monotone" dataKey={item} stroke="#8884d8"></Line>
              ))
            : selected.map((item) => (
                <Line
                  type="monotone"
                  dataKey={item.label}
                  stroke="#8884d8"
                ></Line>
              ))}
        </LineChart>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.2s ease;
  font-family: Sukhumvit Set;
  margin: 0px 5px;
`;
