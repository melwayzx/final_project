export default function GlobalSumCard() {
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ fontSize: "20px", textAlign: "center", marginTop: "30px" }}>
        อัปเดตสถิติ COVID-19 ทั่วโลก
      </div>
      <div
        style={{ display: "flex", fontSize: "14px", justifyContent: "center" }}
      >
        <div style={{ color: "#C0392B", marginRight: "10px" }}>
          อัพเดตล่าสุด
        </div>
        <div>23/6/2020 11:00</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              color: "#767676",
              fontSize: "30px",
              lineHeight: "20px",
              fontWeight: "600",
            }}
          >
            10,145,791
          </div>
          <div style={{ color: "black", fontSize: "15px" }}>
            ผู้ติดเชื้อสะสม
          </div>
        </div>
        <div
          style={{ height: "40px", width: "1px", background: "#DDDDDD" }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              color: "#4FB2AC",
              fontSize: "30px",
              lineHeight: "20px",
              fontWeight: "600",
            }}
          >
            5,140,899
          </div>
          <div style={{ color: "black", fontSize: "15px" }}>หายแล้ว</div>
        </div>
        <div
          style={{ height: "40px", width: "1px", background: "#DDDDDD" }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              color: "#CA3B33",
              fontSize: "30px",
              lineHeight: "20px",
              fontWeight: "600",
            }}
          >
            501,893
          </div>
          <div style={{ color: "black", fontSize: "15px" }}>เสียชีวิต</div>
        </div>
      </div>
    </div>
  );
}
