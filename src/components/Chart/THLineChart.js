import { useState, useEffect } from "react";
import services from "../../services";
import Skeleton from 'react-loading-skeleton';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { sum } from "d3";

export default function LineCharts() {
  const [dailyConfirmed, setDailyConfirmed] = useState([]);
  const [sumConfirmed, setSumConfirmed] = useState([]);

  useEffect(() => {
    services.getDailyConfirmedData().then((data) => setDailyConfirmed(data));
    services.getSumConfirmedData().then((data) => setSumConfirmed(data));
  }, []);

  if (dailyConfirmed.length == 0 && sumConfirmed.length == 0) {
    return <Skeleton variant="rect" width={1154.81} height={275.75} />
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
<<<<<<< HEAD
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
=======
        <LineChart width={550} height={300} data={dailyConfirmed}>
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis type="number" />
>>>>>>> origin/Melwayz
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
<<<<<<< HEAD
        <LineChart
          width={550}
          height={300}
          data={sumConfirmed}
        // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
=======
        <LineChart width={550} height={300} data={sumConfirmed}>
>>>>>>> origin/Melwayz
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis />
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
