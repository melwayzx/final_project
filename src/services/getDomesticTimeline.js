export default async function getDomesticTimeline() {
  const initialData = {
    Deaths: 0,
    DevBy: "",
    Hospitalized: 0,
    NewConfirmed: 0,
    NewDeaths: 0,
    NewHospitalized: 0,
    NewRecovered: 0,
    Recovered: 0,
    SeverBy: "",
    Source: "",
    UpdateDate: "",
    Confirmed: 0,
  };

  try {
    const res = await fetch("https://covid19.th-stat.com/api/open/timeline");

    return await res.json();
  } catch (error) {
    return initialData;
  }
}
