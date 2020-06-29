import Head from "next/head";
import axios from "axios";
import parse from "csv-parse/lib/sync";
import App from "./App";
import { useState, useEffect } from "react";

export default function index() {
  const [confirmedCase, setConfirmedCase] = useState([]);
  const [deathsCase, setDeathsCase] = useState([]);
  const [recoveredCase, setRecoveredCase] = useState([]);
  const [domesticCase, setDomesticCase] = useState([]);
  const [domesticDailyCase, setDomesticDailyCase] = useState([]);

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

        setConfirmedCase(records);
      })
      .catch((err) => {
        console.error(err);
      });

    axios({
      method: "get",
      url:
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv",
    })
      .then((response) => {
        const records = parse(response.data, {
          columns: true,
          skip_empty_lines: true,
        });
        console.log(records);

        setDeathsCase(records);
      })
      .catch((err) => {
        console.error(err);
      });

    axios({
      method: "get",
      url:
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv",
    })
      .then((response) => {
        const records = parse(response.data, {
          columns: true,
          skip_empty_lines: true,
        });
        console.log(records);

        setRecoveredCase(records);
      })
      .catch((err) => {
        console.error(err);
      });

    axios({
      method: "get",
      url: "https://covid19.th-stat.com/api/open/cases/sum",
    })
      .then((response) => {
        console.log(response);

        setDomesticCase(response);
      })
      .catch((err) => {
        console.error(err);
      });

    axios({
      method: "get",
      url: "https://covid19.th-stat.com/api/open/today",
    })
      .then((response) => {
        console.log(response);

        setDomesticDailyCase(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <App
        confirmedCase={confirmedCase}
        deathsCase={deathsCase}
        recoveredCase={recoveredCase}
        domesticCase={domesticCase}
        domesticDailyCase={domesticDailyCase}
      ></App>
    </div>
  );
}
