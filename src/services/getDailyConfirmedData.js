import services from "./";

export default async function getDailyConfirmedData() {
  const data = await services.getDomesticTimeline();

  return data.Data.map((item) => {
    return {
      date: item.Date,
      ผู้ติดเชื้อรายวัน: item.NewConfirmed,
    };
  });
}
