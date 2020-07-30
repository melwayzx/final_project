import PieChartData from "../Chart/PieChartData";
import { useState, useEffect } from "react";
import services from "../../services";

export default function GenderSumCard() {
  const [domesticSum, setDomesticSum] = useState({});
  const dates = new Date();
  const day = dates.getDate();
  let month = dates.getMonth();
  month = month + 1;
  const year = dates.getFullYear();
  const updateDate = day + "/" + month + "/" + year;

  // console.log(domesticSum);
  useEffect(() => {
    const data = services.getDomesticSum().then((data) => {
      setDomesticSum(data);
    });
  }, []);

  if (domesticSum.Gender == undefined) {
    return "loading...";
  }

  return <View domesticSum={domesticSum} updateDate={updateDate} />;
}

function View({ domesticSum, updateDate }) {
  return (
    <div
      style={{
        fontFamily: "Sukhumvit Set",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginRight: "150px",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: "1.4vw" }}>
        ผู้ติดเชื้อในประเทศไทย จำแนกตามเพศ
      </div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px", fontWeight: 600 }}>
          อัปเดตล่าสุด
        </div>
        <div>{updateDate}</div>
      </div>

      <PieChartData domesticSum={domesticSum} />
    </div>
  );
}
