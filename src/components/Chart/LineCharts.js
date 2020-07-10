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
  // const [confirmedCase, setConfirmedCase] = useState([]);
  const data = [{}];
  const [mockData, setMockData] = useState();

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
        // console.log(records[0]);

        // setConfirmedCase(records);
        const newObj = { ...records };
        const dates = [];
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

        // console.log(records);
        for (const date in dates) {
          for (const index in records) {
            if (records[index]["Country/Region"] === "Thailand") {
              data.push({
                Thailand: records[index][dates[date]],
              });
            }
            if (records[index]["Country/Region"] === "Japan") {
              data[date].Japan = records[index][dates[date]];
            }
          }
          data[0].date = dates;
        }
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
      <LineChart width={800} height={300} data={mockData}>
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis type="number" domain={[0, 5000]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Japan" stroke="#8884d8" />
        <Line type="monotone" dataKey="Thailand" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
