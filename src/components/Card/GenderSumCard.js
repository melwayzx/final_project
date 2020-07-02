import PieChartData from "../Chart/PieChartData";

export default function GenderSumCard({ domesticSum }) {
  console.log(domesticSum);
  return (
    <div style={{ fontFamily: "Sukhumvit Set" }}>
      <div>ผู้ติดเชื้อในประเทศไทย จำแนกตามเพศ</div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px" }}>
          อัพเดตล่าสุด
        </div>
        <div>{domesticSum.LastData}</div>
      </div>
      <PieChartData domesticSum={domesticSum} />
    </div>
  );
}

const StyledTitle = {};
