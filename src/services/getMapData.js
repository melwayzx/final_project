import services from "./";
import json from "../components/Map/thailand.json";

export default async function getMapData() {
  const data = await services.getDomesticSum();

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
  }
  return json;
}
