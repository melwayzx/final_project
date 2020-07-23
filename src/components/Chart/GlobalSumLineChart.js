import react, { useState, useEffect } from "react";
import axios from "axios";
import parse from "csv-parse/lib/sync";

export default function GlobalSumLineChart() {
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

        let tempList = [];
        for (const i in records) {
          tempList.push({
            label: records[i][["Country/Region"]],
            value: records[i][["Country/Region"]],
          });
        }

        // console.log(urlData);

        const unique = [];
        tempList.map((x) =>
          unique.filter((a) => a.label == x.label && a.value == x.value)
            .length > 0
            ? null
            : unique.push(x)
        );
        setCountryList(unique);

        const newObj = { ...records };
        let dates = [];
        for (const key in newObj[0]) {
          if (
            key !== "Province/State" &&
            key !== "Country/Region" &&
            key !== "Lat" &&
            key !== "Long"
          ) {
            dates.push(key);
          }
        }
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div>kkkkk</div>;
}
