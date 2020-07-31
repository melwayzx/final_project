import react, { useState, useEffect } from "react";
import axios from "axios";
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

export default function GlobalSumLineChart() {
  const [data, setData] = useState();

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

        const newObj = { ...records };
        let dates = [];
        for (const key in newObj[0]) {
          if (
            key !== "Province/State" &&
            key !== "Country/Region" &&
            key !== "Lat" &&
            key !== "Long"
          ) {
            dates.push({ date: key, ผู้ติดเชื้อสะสมทั่วโลก: 0 });
          }
        }

        for (const i in dates) {
          for (const j in records) {
            for (const k in records[j]) {
              // console.log(k);
              if (k == dates[i].date) {
                dates[i].ผู้ติดเชื้อสะสมทั่วโลก =
                  parseInt(dates[i].ผู้ติดเชื้อสะสมทั่วโลก) +
                  parseInt(records[j][[k]]);
              }
            }
          }
        }
        setData(dates);

        // console.log(dates);
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: "0 40px" }}>
      {" "}
      <div style={{ fontWeight: 700, fontSize: "1.4vw", marginBottom: "20px" }}>
        จำนวนผู้ติดเชื้อสะสมรวมทั่วโลก
      </div>
      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
        <YAxis type="number" />
        <CartesianGrid stroke="#DDDDDD" vertical={false} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="ผู้ติดเชื้อสะสมทั่วโลก"
          stroke={"#F3BE43"}
          dot={false}
          strokeWidth={3}
        ></Line>
      </LineChart>
    </div>
  );
}
