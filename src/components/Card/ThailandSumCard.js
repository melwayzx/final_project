import BarChartData from "../Chart/BarChartData";
import ThailandMap from "../Map/ThMap";
import Table from "../Chart/Table";
import json from "../Map/thailand.json";

export default function ThailandSumCard({ domesticSum }) {
  // console.log(domesticSum);

  for (const j in domesticSum.Province) {
    for (const i in json.features) {
      if (j === json.features[i].properties.name) {
        json.features[i].properties.count = domesticSum.Province[j];
      }
      if (json.features[i].properties.name == "Bangkok Metropolis") {
        json.features[i].properties.count = domesticSum.Province["Bangkok"];
      }
      if (json.features[i].properties.name == "Phangnga") {
        json.features[i].properties.count = domesticSum.Province["Phang Nga"];
      }
      if (json.features[i].properties.name == "Lop Buri") {
        json.features[i].properties.count = domesticSum.Province["Lopburi"];
      }
      if (json.features[i].properties.name == "Si Sa Ket") {
        json.features[i].properties.count = domesticSum.Province["Sisaket"];
      }
      if (json.features[i].properties.name == "Phangnga") {
        json.features[i].properties.count = domesticSum.Province["Phang Nga"];
      }
      if (json.features[i].properties.name == "Chonburi") {
        json.features[i].properties.count = domesticSum.Province["Chon Buri"];
      }
      if (json.features[i].properties.name == "Buri Ram") {
        json.features[i].properties.count = domesticSum.Province["Buriram"];
      }
      if (json.features[i].properties.name == "Nong Bua Lam Phu") {
        json.features[i].properties.count =
          domesticSum.Province["Nong Bua Lamphu"];
      }
      if (json.features[i].properties.count > 1000) {
        json.features[i].properties.level = "danger";
      } else if (json.features[i].properties.count > 30) {
        json.features[i].properties.level = "caution";
      } else if (json.features[i].properties.count > 2) {
        json.features[i].properties.level = "normal";
      } else {
        json.features[i].properties.level = "less";
      }
    }
  }

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
        {/* <ThailandMap domesticSum={domesticSum} /> */}
        <ThailandMap domesticSum={json} />

        {/* <div style={TableContainer}> */}
        <div style={{ marginTop: "50px" }}>
          <Table data={json} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
