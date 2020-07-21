import { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function LineCharts({ domesticTimeline }) {
  // console.log(domesticTimeline);
  // const [dailyConfirmed, setDailyConfirmed] = useState({date:"",})

  // useEffect(() => {

  let dailyConfirmed = [];
  //   console.log(data);

  for (const i in domesticTimeline) {
    dailyConfirmed.push({
      date: domesticTimeline[i].Date,
      ผู้ติดเชื้อรายวัน: domesticTimeline[i].NewConfirmed,
    });
  }

  let sumConfirmed = [];
  //   console.log(data);

  for (const i in domesticTimeline) {
    sumConfirmed.push({
      date: domesticTimeline[i].Date,
      ผู้ติดเชื้อสะสม: domesticTimeline[i].Confirmed,
      จำนวนผู้ติดเชื้อที่รักษาหาย: domesticTimeline[i].Recovered,
      จำนวนผู้เสียชีวิต: domesticTimeline[i].Deaths,
    });
  }
  // console.log(dailyConfirmed);
  // }, []);

  return (
    <div style={{ padding: "40px 0", display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px" }}
        >
          จำนวนผู้ติดเชื้อรายวัน
        </div>
        <LineChart
          width={725}
          height={300}
          data={dailyConfirmed}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis
            type="number"
            // domain={[0, maxData]}
            // ticks={[0, ]}
          />
          <CartesianGrid stroke="#DDDDDD" vertical={false} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ผู้ติดเชื้อรายวัน"
            stroke={"#F08080"}
            dot={false}
          ></Line>
        </LineChart>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px" }}
        >
          จำนวนผู้ติดเชื้อสะสมรายวัน
        </div>
        <LineChart
          width={650}
          height={300}
          data={sumConfirmed}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis
            type="number"
            // domain={[0, maxData]}
            // ticks={[0, ]}
          />
          <CartesianGrid stroke="#DDDDDD" vertical={false} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ผู้ติดเชื้อสะสม"
            stroke={"#F3BE43"}
            dot={false}
          ></Line>
          <Line
            type="monotone"
            dataKey="จำนวนผู้ติดเชื้อที่รักษาหาย"
            stroke={"#4FB2AC"}
            dot={false}
          ></Line>
          <Line
            type="monotone"
            dataKey="จำนวนผู้เสียชีวิต"
            stroke={"#CA3B33"}
            dot={false}
          ></Line>
        </LineChart>
      </div>
    </div>
  );
}
