export default async function getDeathGlobal() {
  const res = await fetch(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv"
  );
  return await res.json();
}
