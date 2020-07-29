import StatusCard from "./StatusCard";
import Button from "../Button";
import react, { useEffect, useState } from "react";
import services from "../../services";

export default function SumCard() {
  const [domesticDailyCase, setDomesticDailyCase] = useState({});
  const dates = new Date();
  const day = dates.getDate();
  let month = dates.getMonth();
  month = month + 1;
  const year = dates.getFullYear();
  const updateDate = day + "/" + month + "/" + year;

  useEffect(() => {
    const data = services.getDomesticDailyCase().then((data) => {
      setDomesticDailyCase(data);
    });
  }, []);

  if (domesticDailyCase.Deaths == undefined) {
    return <div style={{ textAlign: "center" }}>"loading..." </div>;
  }

  return <View domesticDailyCase={domesticDailyCase} updateDate={updateDate} />;
}

function View({ domesticDailyCase, updateDate }) {
  return (
    <div>
      <div style={StyledContainer}>
        <div style={StyledWrapper}>
          <div style={StyledTextContainer}>
            <div style={StyledText}>อัปเดตสถิติ </div>
            <div
              style={{
                ...StyledText,
                color: "#C23D3D",
                fontSize: "100px",
                fontWeight: 900,
                lineHeight: "60px",
              }}
            >
              {" "}
              COVID-19
            </div>
            <div style={StyledText}>ประเทศไทย </div>
          </div>
          {/* <Button
      href={"/covidScale"}
      name={"แบบประเมินความเสี่ยง"}
      StyledButtonContainer={StyledButtonContainer}
      StyledLink={StyledLink}
    /> */}
        </div>

        <StatusCard
          domesticDailyCase={domesticDailyCase}
          updateDate={updateDate}
        />
      </div>
    </div>
  );
}

const StyledContainer = {
  display: "flex",
  justifyContent: "center",
};

const StyledText = {
  fontSize: "40px",
};

const StyledTextContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
};

const StyledWrapper = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "100px",
  fontFamily: "Sukhumvit Set",
};

const StyledButtonContainer = {
  width: "200px",
  backgroundColor: "#C23D3D",
  borderRadius: "8px",
  color: "white",
  padding: "10px",
  boxSixing: "border-box",
  textAlign: "center",
};

const StyledLink = {
  color: "white",
  textDecoration: "inherit",
};
