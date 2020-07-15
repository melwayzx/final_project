import BarChartData from "../Chart/BarChartData";
import ThailandMap from "../Map/ThMap";
import Table from "../Chart/Table";
export default function ThailandSumCard({ domesticSum }) {
  // console.log(domesticSum);
  return (
    <div
      style={{
        fontFamily: "Sukhumvit Set",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <div style={{ display: "flex", marginTop: "40px" }}>
        <ThailandMap domesticSum={domesticSum} />

        {/* <div style={TableContainer}> */}
        <div style={{ marginTop: "50px" }}>
          <Table data={domesticSum} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
