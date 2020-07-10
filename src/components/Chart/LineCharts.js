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

export default function LineCharts() {
  let data = [];
  const newDates = [];
  const [mockData, setMockData] = useState();
  const [maxData, setMaxData] = useState(0);

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

        for (let i in dates) {
          data.push({ date: dates[i] });
          for (let j in records) {
            if (records[j]["Country/Region"] === "Italy") {
              data[i].Italy = records[j][dates[i]];
            }
            if (records[j]["Country/Region"] === "Brazil") {
              data[i].Brazil = records[j][dates[i]];
            }
            if (records[j]["Country/Region"] === "Japan") {
              data[i].Japan = records[j][dates[i]];
            }
          }
        }

        data = data.filter((item) => {
          let cnt = 0;
          for (const index in item) {
            if (parseInt(item[index]) > 15000 && index !== 0) {
              cnt += 1;
            }
            if (maxData < parseInt(item[index])) {
              setMaxData(parseInt(item[index]));
            }
          }
          return cnt === Object.keys(item).length - 1;
        });

        setMockData(data);
        console.log(mockData);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    // <div></div>
    <div style={{ height: "1000px" }}>
      <LineChart
        width={1000}
        height={300}
        data={mockData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis type="number" domain={[1, maxData]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Brazil" stroke="#8884d8" />
        <Line type="monotone" dataKey="Italy" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Japan" stroke="#CE4A94" />
      </LineChart>
    </div>
  );
}
