import BarChartData from "../Chart/BarChartData";

export default function AgeSumCard({ domesticCase, updateDate }) {
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

const StyledTitle = {};
