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
import Reset from "../../images/Convert.svg";
import TableSum from "../Chart/TableSum";

export default function LineCharts() {
  let data = [];
  const initialData = ["India", "Brazil", "US", "Russia", "South Africa"];
  const colours = [
    "#F3BE43",
    "#4FB2AC",
    "#CE4A94",
    "#BBCB48",
    "#9541C1",
    "#59B655",
    "#E37737",
    "#5C3DC2",
  ];
  const [urlData, setUrlData] = useState(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
  );
  const [mockData, setMockData] = useState();
  const [maxData, setMaxData] = useState(0);
  const [countryList, setCountryList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isSelectedButton, setIsSelectedButton] = useState("ผู้ติดเชื้อ");
  const [date, setDate] = useState("");

  const dates = new Date();
  const day = dates.getDate();
  let month = dates.getMonth();
  month = month + 1;
  const year = dates.getFullYear();
  const updateDate = day + "/" + month + "/" + year;

  useEffect(() => {
    axios({
      method: "get",
      url: urlData,
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

        // console.log(urlData);

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
                  if (data[i][name] == undefined) {
                    data[i][name] = records[j][dates[i]];
                  } else {
                    data[i][name] =
                      parseInt(records[j][dates[i]]) + parseInt(data[i][name]);
                  }
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
                  if (data[i][name] == undefined) {
                    data[i][name] = records[j][dates[i]];
                  } else {
                    data[i][name] =
                      parseInt(records[j][dates[i]]) + parseInt(data[i][name]);
                  }
                }
              }
            }
          }
        }

        let temp = 0;
        for (let i in data) {
          for (let j in data[i]) {
            if (temp < parseInt(data[i][j])) {
              temp = parseInt(data[i][j]);
            }
          }
        }
        setMaxData(temp);
        setMockData(data);
      })

      .catch((err) => {
        console.error(err);
      });
  }, [selected, urlData]);

  function updateSelectCountry(e) {
    setSelected(e);
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "1200px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "60px",
          }}
        >
          <div style={{ fontWeight: 700, fontSize: "1.4vw" }}>
            เปรียบเทียบแนวโน้มผู้ติดเชื้อตามประเทศ
          </div>
          <div style={{ display: "flex", fontSize: "14px" }}>
            <div
              style={{
                color: "#C0392B",
                marginRight: "10px",
                fontWeight: 600,
              }}
            >
              อัปเดตล่าสุด
            </div>
            <div>{updateDate}</div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Button
            buttonName="ผู้ติดเชื้อ"
            isSelectedButton={isSelectedButton}
            onClick={() => {
              setIsSelectedButton("ผู้ติดเชื้อ");
              setUrlData(
                "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
              );
            }}
          >
            ผู้ติดเชื้อ
          </Button>
          <Button
            buttonName="หายแล้ว"
            isSelectedButton={isSelectedButton}
            onClick={() => {
              setIsSelectedButton("หายแล้ว");
              setUrlData(
                "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv"
              );
            }}
          >
            หายแล้ว
          </Button>
          <Button
            buttonName="เสียชีวิต"
            isSelectedButton={isSelectedButton}
            onClick={() => {
              setIsSelectedButton("เสียชีวิต");
              setUrlData(
                "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"
              );
            }}
          >
            เสียชีวิต
          </Button>
          <div style={{ width: "250px", margin: "0px 5px " }}>
            {/* <h1>เลือกประเทศ</h1> */}
            <MultiSelect
              options={countryList}
              hasSelectAll={false}
              value={selected}
              onChange={function (e) {
                updateSelectCountry(e);
              }}
              labelledBy={"Select"}
              primary={"เลือกประเทศ"}
            />
          </div>

          <button
            style={{ ...ResetButton, padding: "0px" }}
            onClick={() => {
              setSelected([]);
              setIsSelectedButton("ผู้ติดเชื้อ");
            }}
          >
            <Reset />
          </button>
        </div>
      </div>

      <div style={{ padding: "40px 0" }}>
        <LineChart
          width={1200}
          height={350}
          data={mockData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis
            type="number"
            domain={[0, maxData]}
            // ticks={[0, ]}
          />
          <CartesianGrid stroke="#DDDDDD" vertical={false} />
          <Tooltip />
          <Legend />
          {selected.length == 0
            ? initialData.map((item, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={item}
                  stroke={colours[index]}
                  dot={false}
                  strokeWidth={3}
                ></Line>
              ))
            : selected.map((item, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={item.label}
                  stroke={colours[index]}
                  dot={false}
                  strokeWidth={3}
                ></Line>
              ))}
        </LineChart>
      </div>
    </div>
  );
}

const Button = styled.button`
  width: 100px;
  height: 40px;
  background: ${(props) =>
    props.buttonName == props.isSelectedButton &&
    props.buttonName == "ผู้ติดเชื้อ"
      ? "#767676"
      : props.buttonName == props.isSelectedButton &&
        props.buttonName == "หายแล้ว"
      ? "#4FB2AC"
      : props.buttonName == props.isSelectedButton &&
        props.buttonName == "เสียชีวิต"
      ? "#CA3B33"
      : "#fff"};
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.2s ease;
  font-family: Sukhumvit Set;
  margin: 0px 5px;
  color: ${(props) =>
    props.buttonName == props.isSelectedButton &&
    props.buttonName == "ผู้ติดเชื้อ"
      ? "#fff"
      : props.buttonName == props.isSelectedButton &&
        props.buttonName == "หายแล้ว"
      ? "#fff"
      : props.buttonName == props.isSelectedButton &&
        props.buttonName == "เสียชีวิต"
      ? "#fff"
      : "#000"};
  /* padding: 8px;
  box-sizing: border-box;
  text-align: center; */
`;

const ResetButton = {
  width: "40px",
  height: "40px",
  background: " #fff",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
  transition: "all 0.2s ease",
  margin: "0px 5px",
  color: " #fff",
};
