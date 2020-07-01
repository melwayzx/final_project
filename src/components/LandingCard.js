import StatusCard from "./Card/StatusCard";
import { colors } from "@material-ui/core";

export default function LandingCard({ domesticDailyCase }) {
  console.log(domesticDailyCase);
  return (
    <div>
      <div style={StyledContainer}>
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
        <StatusCard domesticDailyCase={domesticDailyCase} />
      </div>
    </div>
  );
}

const StyledContainer = {
  display: "flex",
};

const StyledText = {
  fontFamily: "Sukhumvit Set",
  fontSize: "40px",
};

const StyledTextContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  marginRight: "100px",
};
