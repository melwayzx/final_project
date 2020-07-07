import BarChartData from "../Chart/BarChartData";

export default function GenderSumCard({ domesticCase }) {
  // console.log(domesticSum);
  return (
    <div style={{ fontFamily: "Sukhumvit Set" }}>
      <div>ผู้ติดเชื้อในประเทศไทย จำแนกตามอายุ</div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px" }}>
          อัพเดตล่าสุด
        </div>
        <div>{domesticCase.LastData}</div>
      </div>
      <BarChartData domesticCase={domesticCase} />
    </div>
  );
}

const StyledTitle = {};
