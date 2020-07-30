import axios from "axios";
import { useState, useEffect } from "react";
import parse from "csv-parse/lib/sync";
import View from "../Chart/LineChartView";

export default function LineCharts() {
  let data = [];
  const initialData = ["India", "Brazil", "US", "Russia", "South Africa"];
  const [urlData, setUrlData] = useState(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
  );
  const [mockData, setMockData] = useState();
  const [maxData, setMaxData] = useState(0);
  const [countryList, setCountryList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isSelectedButton, setIsSelectedButton] = useState("ผู้ติดเชื้อ");

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
    <View
      setIsSelectedButton={setIsSelectedButton}
      setUrlData={setUrlData}
      updateSelectCountry={updateSelectCountry}
      isSelectedButton={isSelectedButton}
      countryList={countryList}
      selected={selected}
      mockData={mockData}
      maxData={maxData}
      initialData={initialData}
    />
  );
}
