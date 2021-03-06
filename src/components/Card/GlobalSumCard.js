import react, { useEffect, useState } from "react";
import axios from "axios";
import parse from "csv-parse/lib/sync";
import TableSum from "../Chart/TableSum";
import GlobalSumLineChart from "../Chart/GlobalSumLineChart";

export default function GlobalSumCard() {
  const [sumCount, setSumCount] = useState({
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    updateDate: "",
  });
  const [sumCountry, setSumCountry] = useState([
    {
      country: "",
      confirmed: 0,
      recovered: 0,
      deaths: 0,
    },
  ]);

  const dates = new Date();
  const day = dates.getDate();
  let month = dates.getMonth();
  month = month + 1;
  const year = dates.getFullYear();
  const updateDate = day + "/" + month + "/" + year;

  useEffect(() => {
    var d = new Date();
    var date = d.getDate();
    date = date - 2;
    if (date < 10) {
      date = "0" + date;
    }
    var month = d.getMonth();
    month = month + 1;
    if (month < 10) {
      month = "0" + month;
    }
    var year = d.getFullYear();
    var fileDate =
      month.toString() + "-" + date.toString() + "-" + year.toString();
    const url =
      "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" +
      fileDate +
      ".csv";

    axios({
      method: "get",
      url: url,
    })
      .then((response) => {
        const records = parse(response.data, {
          columns: true,
          skip_empty_lines: true,
        });

        const confirmed = [...records].reduce(
          (prev, curr) => parseInt(prev) + parseInt(curr.Confirmed),
          0
        );

        const recovered = [...records].reduce(
          (prev, curr) => parseInt(prev) + parseInt(curr.Recovered),
          0
        );

        const deaths = [...records].reduce(
          (prev, curr) => parseInt(prev) + parseInt(curr.Deaths),
          0
        );
        setSumCount({
          confirmed: confirmed,
          recovered: recovered,
          deaths: deaths,
          updateDate: records[0].Last_Update,
        });

        let tempList = [];
        for (const i in records) {
          tempList.push({
            country: records[i][["Country_Region"]],
            confirmed: 0,
            recovered: 0,
            deaths: 0,
          });
        }
        const unique = [];
        tempList.map((x) =>
          unique.filter((a) => a.country == x.country).length > 0
            ? null
            : unique.push(x)
        );

        for (const i in unique) {
          for (const j in records) {
            if (unique[i].country === records[j][["Country_Region"]]) {
              unique[i].confirmed =
                parseInt(records[j][["Confirmed"]]) +
                parseInt(unique[i].confirmed);
              unique[i].recovered =
                parseInt(records[j][["Recovered"]]) +
                parseInt(unique[i].recovered);
              unique[i].deaths =
                parseInt(records[j][["Deaths"]]) + parseInt(unique[i].deaths);
            }
          }
        }

        const sortUnique = unique.sort((a, b) => b.confirmed - a.confirmed);
        setSumCountry(unique);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div style={StyledTitle}>อัปเดตสถิติ COVID-19 ทั่วโลก</div>
      <div
        style={{ display: "flex", fontSize: "14px", justifyContent: "center" }}
      >
        <div style={StyledSubTitle}>อัปเดตล่าสุด</div>
        <div>{updateDate}</div>
      </div>
      <div style={StyledWrapper}>
        <div style={StyledBox}>
          <div style={{ ...StyledText, color: "#767676" }}>
            {sumCount.confirmed.toLocaleString("en-US")}
          </div>
          <div style={StyledTypeText}>ผู้ติดเชื้อสะสม</div>
        </div>
        <div style={StyedLine}></div>
        <div style={StyledBox}>
          <div style={{ ...StyledText, color: "#4FB2AC" }}>
            {sumCount.recovered.toLocaleString("en-US")}
          </div>
          <div style={StyledTypeText}>หายแล้ว</div>
        </div>
        <div style={StyedLine}></div>
        <div style={StyledBox}>
          <div style={{ ...StyledText, color: "#CA3B33" }}>
            {sumCount.deaths.toLocaleString("en-US")}
          </div>
          <div style={StyledTypeText}>เสียชีวิต</div>
        </div>
      </div>
      <div
        style={{
          fontWeight: 700,
          fontSize: "18px",
          marginLeft: "140px",
          marginTop: "20px",
        }}
      >
        {/* ผู้ติดเชื้อทั่วโลกจำแนกตามประเทศ */}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
      >
        <div style={StyledTable}>
          <TableSum data={sumCountry} />
        </div>
        <div styled={{ padding: "10px 40px" }}>
          <GlobalSumLineChart />
        </div>
      </div>
    </div>
  );
}

const StyledText = {
  fontSize: "30px",
  lineHeight: "20px",
  fontWeight: "600",
};

const StyledTitle = {
  fontSize: "30px",
  textAlign: "center",
  marginTop: "30px",
  fontWeight: "700",
};

const StyledSubTitle = {
  color: "#C0392B",
  marginRight: "10px",
  fontWeight: 600,
};

const StyledTypeText = { color: "black", fontSize: "15px" };

const StyedLine = { height: "40px", width: "1px", background: "#DDDDDD" };

const StyledBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0 50px",
  boxSizing: "border-box",
};

const StyledWrapper = {
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
  width: "100vw",
};

const StyledTable = {
  justifyContent: " center",
  display: "flex",
  padding: "0 40px",
  width: "450px",
};
