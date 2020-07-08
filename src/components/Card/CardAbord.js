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
                                fontSize: "100px",
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

                {/* <StatusCardAbord /> */}
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