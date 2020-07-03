export default async function getDomesticCase() {
  const res = await fetch("https://covid19.th-stat.com/api/open/cases");
  return await res.json();
}
