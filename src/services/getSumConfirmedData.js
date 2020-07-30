import services from "./";

export default function getSumConfirmedData() {
  let sumConfirmed = [];
  const data = services.getDomesticTimeline().then((data) => {
    const temp = data.Data;
    for (const i in temp) {
      sumConfirmed.push({
        date: temp[i].Date,
        ผู้ติดเชื้อสะสม: temp[i].Confirmed,
        หายแล้ว: temp[i].Recovered,
        เสียชีวิต: temp[i].Deaths,
      });
    }
  });

  return sumConfirmed;
}
