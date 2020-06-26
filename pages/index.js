import Head from "next/head";
import axios from "axios";
import parse from "csv-parse/lib/sync";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url:
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv",
    })
      .then((response) => {
        const records = parse(response.data, {
          columns: true,
          skip_empty_lines: true,
        });
        console.log(records);

        setData(records);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {/* <Head>
        <title>Covid-19 update</title>
      </Head>
      <h1>dee ja</h1>
      <StatusCard /> */}
      {/* {response} */}

      {/* <BarChart data={data} /> */}
    </div>
  );
}
