import BarChartData from "../Chart/BarChartData";
import { useState, useEffect } from "react";
import services from "../../services";

export default function AgeSumCard() {
  const [domesticCase, setDomesticCase] = useState([]);
  const dates = new Date();
  const day = dates.getDate();
  let month = dates.getMonth();
  month = month + 1;
  const year = dates.getFullYear();
  const updateDate = day + "/" + month + "/" + year;

  useEffect(() => {
    const data = services.getDomesticCase().then((data) => {
      setDomesticCase(data);
    });
  }, []);

  if (domesticCase.length == 0) {
    return "loading...";
  }

  return <View domesticCase={domesticCase} updateDate={updateDate} />;
}

function View({ domesticCase, updateDate }) {
  return (
    <div
      style={{
        fontFamily: "Sukhumvit Set",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "1.4vw" }}>
        ผู้ติดเชื้อในประเทศไทย จำแนกตามอายุ
      </div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px", fontWeight: 600 }}>
          อัปเดตล่าสุด
        </div>
        <div>{updateDate}</div>
      </div>
      <BarChartData domesticCase={domesticCase} />
    </div>
  );
}
