import PieChartData from "../Chart/PieChartData";

export default function GenderSumCard({ domesticSum }) {
  // console.log(domesticSum);
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
      <div style={{ fontWeight: 700, fontSize: "18px" }}>
        ผู้ติดเชื้อในประเทศไทย จำแนกตามเพศ
      </div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px", fontWeight: 600 }}>
          อัปเดตล่าสุด
        </div>
        <div>{domesticSum.LastData}</div>
      </div>

      <PieChartData domesticSum={domesticSum} />
    </div>
  );
}

const StyledTitle = {};
