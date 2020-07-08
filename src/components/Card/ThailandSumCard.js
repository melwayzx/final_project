import BarChartData from "../Chart/BarChartData";
import ThailandMap from "../Map/ThMap";
import Table from "../Chart/Table";

export default function ThailandSumCard({ domesticSum }) {
  // console.log(domesticSum);
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
      <div>ผู้ติดเชื้อในประเทศไทย จำแนกตามจังหวัด</div>
      <div style={{ display: "flex", fontSize: "14px" }}>
        <div style={{ color: "#C0392B", marginRight: "10px" }}>
          อัพเดตล่าสุด
        </div>
        <div>{domesticSum.LastData}</div>
      </div>
      <div style={{ display: "flex", marginTop: "40px" }}>
        <ThailandMap domesticSum={domesticSum} />
        {/* <div style={TableContainer}> */}
        <Table data={domesticSum} />
        {/* </div> */}
      </div>
    </div>
  );
}
