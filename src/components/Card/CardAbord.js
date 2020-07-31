// import StatusCardAbord from "./StatusCardAbord";

export default function CardAbord() {

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
                                fontSize: "80px",
                                fontWeight: 800,
                                lineHeight: "100px",
                            }}
                        >
                            {" "}
              COVID-19
            </div>
                        <div style={StyledText}>ทั่วโลก </div>
                    </div>

                </div>


            </div>
            {/* <StatusCardAbord /> */}
        </div>
    );
}

const StyledContainer = {
    display: "flex",
    justifyContent: "center",
};

const StyledText = {
    fontSize: "30px",
};

const StyledTextContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
};

const StyledWrapper = {
    display: "flex",
    marginLeft: "0px",
    marginTop: "100px",
    fontFamily: "Sukhumvit Set",
};
