import parse from "csv-parse/lib/sync";
import axios from "axios";

export default async function getConfirmGlobal() {
  const res = await fetch(
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
  );
  console.log(res);
  const records = parse(res.data, {
    columns: true,
    skip_empty_lines: true,
  });

  return records;
}

// export default function getConfirmGlobal() {
//   let records = {};
//   axios({
//     method: "get",
//     url:
//       "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
//   }).then((response) => {
//     records = parse(response.data, {
//       columns: true,
//       skip_empty_lines: true,
//     });
//     // console.log(records);
//   });
//   return records;
// }
