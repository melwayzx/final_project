import services from "./";

export default function getDailyConfirmedData() {
  let dailyConfirmed = [];
  const data = services.getDomesticTimeline().then((data) => {
    const temp = data.Data;
    for (const i in temp) {
      dailyConfirmed.push({
        date: temp[i].Date,
        ผู้ติดเชื้อรายวัน: temp[i].NewConfirmed,
      });
    }
  });
  return dailyConfirmed;
}
