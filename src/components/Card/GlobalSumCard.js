import react, { useEffect, useState } from "react";
import axios from "axios";
import parse from "csv-parse/lib/sync";

export default function GlobalSumCard() {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [date, setDate] = useState("");

  // var confirmed = 1000;
  // var recovered = 1000;
  // var deaths = 1000;
  useEffect(() => {
    var d = new Date();
    var date = d.getDate();
    date = date - 2;
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

        // console.log(records);
        for (const i in records) {
          setConfirmed(
            (confirmed) => parseInt(records[i].Confirmed) + confirmed
          );
          setRecovered(
            (recovered) => parseInt(records[i].Recovered) + recovered
          );
          setDeaths((deaths) => parseInt(records[i].Deaths) + deaths);
        }

        setDate(records[0].Last_Update);
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      setConfirmed(0);
      setRecovered(0);
      setDeaths(0);
    };
  }, []);

  return (
    <div>
      <div style={StyledTitle}>อัปเดตสถิติ COVID-19 ทั่วโลก</div>
      <div
        style={{ display: "flex", fontSize: "14px", justifyContent: "center" }}
      >
        <div style={StyledSubTitle}>อัพเดตล่าสุด</div>
        <div>{date}</div>
      </div>
      <div style={StyledWrapper}>
        <div style={StyledBox}>
          <div style={{ ...StyledText, color: "#767676" }}>
            {confirmed.toLocaleString("en-US")}
          </div>
          <div style={StyledTypeText}>ผู้ติดเชื้อสะสม</div>
        </div>
        <div style={StyedLine}></div>
        <div style={StyledBox}>
          <div style={{ ...StyledText, color: "#4FB2AC" }}>
            {recovered.toLocaleString("en-US")}
          </div>
          <div style={StyledTypeText}>หายแล้ว</div>
        </div>
        <div style={StyedLine}></div>
        <div style={StyledBox}>
          <div style={{ ...StyledText, color: "#CA3B33" }}>
            {deaths.toLocaleString("en-US")}
          </div>
          <div style={StyledTypeText}>เสียชีวิต</div>
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

const StyledSubTitle = { color: "#C0392B", marginRight: "10px" };

const StyledTypeText = { color: "black", fontSize: "15px" };

const StyedLine = { height: "40px", width: "1px", background: "#DDDDDD" };

const StyledBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  boxSizing: "border-box",
};

const StyledWrapper = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "30px",
  width: "100vw",
};
