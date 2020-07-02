import StatusCard from "./Card/StatusCard";
import Button from "../components/Button";

export default function LandingCard({ domesticDailyCase }) {
  console.log(domesticDailyCase);
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
                fontSize: "60px",
                fontWeight: 900,
                lineHeight: "45px",
              }}
            >
              {" "}
              COVID-19
            </div>
            <div style={StyledText}>ประเทศไทย </div>
          </div>
          <Button href={"/covidScale"} name={"แบบประเมินความเสี่ยง"} />
        </div>

        <StatusCard domesticDailyCase={domesticDailyCase} />
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
