import { useState, useEffect } from "react";
import services from "../../services";

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
  const [domesticTimeline, setDomesticTimeline] = useState({});
  // let dai] = useState([{}]);

  useEffect(() => {
    const data = services.getDomesticTimeline().then((data) => {
      setDomesticTimeline(data.Data);
    });
  }, []);

  let dailyConfirmed = [];
  let sumConfirmed = [];
  for (const i in domesticTimeline) {
    dailyConfirmed.push({
      date: domesticTimeline[i].Date,
      ผู้ติดเชื้อรายวัน: domesticTimeline[i].NewConfirmed,
    });
  }

  for (const i in domesticTimeline) {
    sumConfirmed.push({
      date: domesticTimeline[i].Date,
      ผู้ติดเชื้อสะสม: domesticTimeline[i].Confirmed,
      หายแล้ว: domesticTimeline[i].Recovered,
      เสียชีวิต: domesticTimeline[i].Deaths,
    });
  }

  if (dailyConfirmed.length == 0 && sumConfirmed.length == 0) {
    return "loading...";
  }

  return <View dailyConfirmed={dailyConfirmed} sumConfirmed={sumConfirmed} />;
}

function View({ dailyConfirmed, sumConfirmed }) {
  return (
    <div style={{ padding: "40px 0", display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "90px",
        }}
      >
        <div
          style={{ fontWeight: 700, fontSize: "1.4vw", marginBottom: "10px" }}
        >
          จำนวนผู้ติดเชื้อรายวัน
        </div>
        <LineChart
          width={550}
          height={300}
          data={dailyConfirmed}
          // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
            strokeWidth={3}
          ></Line>
        </LineChart>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ fontWeight: 700, fontSize: "1.4vw", marginBottom: "10px" }}
        >
          จำนวนผู้ติดเชื้อสะสมรายวัน
        </div>
        <LineChart
          width={550}
          height={300}
          data={sumConfirmed}
          // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis
          // type="number"
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
            strokeWidth={2}
          ></Line>
          <Line
            type="monotone"
            dataKey="หายแล้ว"
            stroke={"#4FB2AC"}
            dot={false}
            strokeWidth={2}
          ></Line>
          <Line
            type="monotone"
            dataKey="เสียชีวิต"
            stroke={"#CA3B33"}
            strokeWidth={2}
            dot={false}
          ></Line>
        </LineChart>
      </div>
    </div>
  );
}
