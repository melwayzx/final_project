import React from "react";

export default function StatusCard({ domesticDailyCase }) {
  // console.log(domesticDailyCase);

  return (
    <div>
      <div style={StyledWrapper}>
        <div style={StyledMainBox}>
          <div style={StyledFlexbox}>
            <div style={{ fontSize: "25px", lineHeight: "20px" }}>
              ผู้ติดเชื้อสะสม
            </div>
            <div
              style={{
                ...StyledCount,
                fontSize: "25px",
                width: "200px",
                height: "40px",
              }}
            >
              + {domesticDailyCase.NewConfirmed}
            </div>{" "}
          </div>
          {domesticDailyCase.Confirmed.toLocaleString("en-US")}
        </div>
        <div style={{ ...StyledBox, background: "#408F4D", gridArea: "b" }}>
          <div style={{ fontSize: "16px" }}>หายแล้ว</div>
          {domesticDailyCase.Recovered.toLocaleString("en-US")}
          <div style={StyledCount}>+ {domesticDailyCase.NewRecovered}</div>
        </div>
        <div style={{ ...StyledBox, background: "#FFBC00", gridArea: "c" }}>
          <div style={{ fontSize: "16px" }}>กำลังรักษา</div>
          {domesticDailyCase.Hospitalized.toLocaleString("en-US")}
          <div style={StyledCount}>
            {" "}
            {domesticDailyCase.NewHospitalized > 1
              ? +domesticDailyCase.NewHospitalized
              : domesticDailyCase.NewHospitalized}
          </div>
        </div>
        <div style={{ ...StyledBox, background: "#C0392B", gridArea: "d" }}>
          <div style={{ fontSize: "16px" }}>เสียชีวิต</div>
          {domesticDailyCase.Deaths.toLocaleString("en-US")}
          <div style={StyledCount}>+ {domesticDailyCase.NewDeaths}</div>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = {
  position: "relative",
  display: "grid",
  gridGap: "0.5rem",
  gridTemplateColumns: "175px 175px 175px",
  gridTemplateRows: "125px 125px",
  gridTemplateAreas: ` "a a a"
    "b c d"`,
  fontFamily: "Sukhumvit Set",
  color: "#ffffff",
  textAlign: "center",
};

const StyledMainBox = {
  position: "relative",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gridArea: "a",
  background: "#566573",
  /* padding: 2rem 1.8rem, */
  justifyContent: "space-evenly",
  fontSize: 60,
};

const StyledFlexbox = {
  display: "flex",
  flexDirection: "column",
  fontSize: "16px",
};

const StyledBox = {
  position: "relative",
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontSize: 50,
  alignItems: "center",
  lineHeight: "30px",
};

const StyledCount = {
  width: "100px",
  height: "30px",
  background: "white",
  borderRadius: "4px",
  color: "#454545",
  fontSize: "16px",
  marginTop: "8px",
  fontWeight: 500,
};
