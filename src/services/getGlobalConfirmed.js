import axios from "axios";
import parse from "csv-parse/lib/sync";

export default async function getGlobalConfirmed() {
  try {
    const res = await axios({
      method: "get",
      url:
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    });
    // console.log(res);
    const records = parse(res.data, {
      columns: true,
      skip_empty_lines: true,
    });
    return await records;
  } catch (error) {
    console.error(error);
    return null;
  }
}
