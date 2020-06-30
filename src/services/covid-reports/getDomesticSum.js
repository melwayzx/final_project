export default async function getDomesticSum() {
  const res = await fetch("https://covid19.th-stat.com/api/open/cases/sum");
  return await res.json();
}
