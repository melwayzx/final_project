import BarChartData from "../Chart/BarChartData";
import ThailandMap from "../Map/ThMap";
import Table from "../Chart/Table";
import json from "../Map/thailand.json";
import { useState, useEffect } from "react";
import services from "../../services";
import Skeleton from 'react-loading-skeleton';

export default function ThailandSumCard() {
  const [domesticSum, setDomesticSum] = useState({});
  const dates = new Date();
  const day = dates.getDate();
  let month = dates.getMonth();
  month = month + 1;
  const year = dates.getFullYear();
  const updateDate = day + "/" + month + "/" + year;

  useEffect(() => {
    const data = services.getDomesticSum().then((data) => {
      setDomesticSum(data);
    });
  }, []);

  let check = false;
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
        json.features[i].properties.level = "5";
      } else if (json.features[i].properties.count > 90) {
        json.features[i].properties.level = "4";
      } else if (json.features[i].properties.count > 20) {
        json.features[i].properties.level = "3";
      } else if (json.features[i].properties.count > 10) {
        json.features[i].properties.level = "2";
      } else if (json.features[i].properties.count > 0) {
        json.features[i].properties.level = "1";
      } else {
        json.features[i].properties.level = "0";
      }
    }
    check = true;
  }

  if (check == false) {
    return <Skeleton variant="rect" width={1077.33} height={726.67} />
  }

  return <View domesticCase={json} updateDate={updateDate} />;
}

function View({ domesticCase, updateDate }) {
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
        <ThailandMap domesticSum={domesticCase} updateDate={updateDate} />

        {/* <div style={TableContainer}> */}
        <div style={{ marginTop: "50px" }}>
          <Table data={json} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
