import StatusCard from "./Card/StatusCard";

export default function LandingCard({ domesticDailyCase }) {
  return (
    <div>
      <div style={StyledContainer}>
        <div style={StyledTextContainer}>
          <div style={StyledText}>อัปเดตสถิติ COVID-1 </div>
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
  fontSize: "50px",
};

const StyledTextContainer = {
  justifyContent: "center",
};
