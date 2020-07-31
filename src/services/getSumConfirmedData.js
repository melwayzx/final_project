import services from "./";

export default async function getSumConfirmedData() {
  const data = await services.getDomesticTimeline();

  return data.Data.map((item) => {
    return {
      date: item.Date,
      ผู้ติดเชื้อสะสม: item.Confirmed,
      หายแล้ว: item.Recovered,
      เสียชีวิต: item.Deaths,
    };
  });
}
