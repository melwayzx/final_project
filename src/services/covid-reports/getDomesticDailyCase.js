export default async function getDomesticDailyCase() {
  const res = await fetch("https://covid19.th-stat.com/api/open/today");
  return await res.json();
}

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
