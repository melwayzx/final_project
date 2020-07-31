import React, { useState, useEffect } from "react";
import Button from "./Button";
export default function survey() {
  const [point, setPoint] = useState(0);
  const [select, setSelected] = useState(false);

  // function selectRadio(e) {
  //   setSelected(true);
  //   calPoint();
  // }
  function calPoint(id) {
    if (id % 2 == 0) {
      setPoint(state => state + 1);
      calRisk();
    }
    calRisk();
    console.log(point);
  }
  function calRisk(point) {
    const x = "risk covid"
    if (point > 5) {
      return x;
    }
    console.log(x);
  }
  return (
    <div>
      <form >
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
        >
          1. ผู้ป่วยมีอุณหภูมิร่างกายในช่วงอุณหภูมิใด
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
          className="radio"
        >
          <label><input type="radio" onChange={(e) => calPoint(1)} value="1" id="1" />
            ต่ำกว่า 37.5 องศา</label>
          <label><input type="radio" onChange={(e) => calPoint(2)} value="2" id="2" />
            สูงกว่าหรือเท่ากับ 37.5 หรือ รู้สึกว่ามีไข้</label>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
        >
          2. ผู้ป่วยมีอาการระบบทางเดินหายใจ อย่างใดอย่างหนึ่งดังต่อไปนี้ "ไอ
          น้ำมูก เจ็บคอ หายใจเหนื่อย หรือหายใจลำบาก"
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
          className="radio"
        >
          <label>
            <input type="radio" onChange={(e) => calPoint(3)} value="3" id="3" />
            ไม่มี
          </label>
          <label>
            <input type="radio" onChange={(e) => calPoint(4)} value="4" id="4" />
            มี
          </label>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
        >
          3. ผู้ป่วยมีประวัติเดินทางไปยัง หรือ มาจาก หรือ
          อาศัยอยู่ในพื้นที่เกิดโรค COVID-19 ในช่วงเวลา 14 วัน ก่อนป่วย{" "}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
          className="radio"
        >
          <label>
            <input type="radio" onChange={(e) => calPoint(5)} value="5" id="5" />
            ไม่มี
          </label>
          <label>
            <input type="radio" onChange={(e) => calPoint(6)} value="6" id="6" />
            มี
          </label>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
        >
          4. อยู่ใกล้ชิดกับผู้ป่วยยืนยัน COVID-19 (ใกล้กว่า 1 เมตร นานเกิน 5
          นาที) ในช่วง 14 วันก่อน{" "}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
          className="radio"
        >
          <label>
            <input type="radio" onChange={(e) => calPoint(7)} value="7" id="7" />
            ไม่มี
          </label>
          <label>
            <input type="radio" onChange={(e) => calPoint(8)} value="8" id="8" />
            มี
          </label>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
        >
          5. มีประวัติไปสถานที่ชุมนุมชน หรือสถานที่ที่มีการรวมกลุ่มคน เช่น
          ตลาดนัด ห้างสรรพสินค้า สถานพยาบาล หรือ ขนส่งสาธารณะ{" "}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
          className="radio"
        >
          <label>
            <input type="radio" onChange={(e) => calPoint(9)} value="9" id="9" />
            ไม่มี
          </label>
          <label>
            <input type="radio" onChange={(e) => calPoint(10)} value="10" id="10" />
            มี
          </label>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
        >
          6. ผู้ป่วยประกอบอาชีพที่สัมผัสใกล้ชิดกับนักท่องเที่ยวต่างชาติ
          สถานที่แออัด หรือติดต่อคนจำนวนมาก{" "}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
          className="radio"
        >
          <label>
            <input type="radio" onChange={(e) => calPoint(11)} value="11" id="11" />
            ไม่มี
          </label>
          <label>
            <input type="radio" onChange={(e) => calPoint(12)} value="12" id="12" />
            มี
          </label>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
        >
          7. เป็นบุคลากรทางการแพทย์{" "}
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
          sclassName="radio"
        >
          <label>
            <input type="radio" onChange={(e) => calPoint(13)} value="13" id="13" />
            ไม่มี
          </label>
          <label>
            <input type="radio" onChange={(e) => calPoint(14)} value="14" id="14" />
            มี
          </label>
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
        >
          8. มีผู้ใกล้ชิดป่วยเป็นไข้หวัดพร้อมกัน มากกว่า 5 คน
          ในช่วงสัปดาห์ที่ป่วย
        </div>
        <div
          style={{
            fontSize: "16px",
            fontFamily: "Sukhumvit Set",
            marginBottom: "25px",
          }}
          className="radio"
        >
          <label>
            <input type="radio" onChange={(e) => calPoint(15)} value="15" id="15" />
            ไม่มี
          </label>
          <label>
            <input type="radio" onChange={(e) => calPoint(16)} value="16" id="16" />
            มี
          </label>
        </div>
      </form>
      <Button
        StyledButtonContainer={StyledButtonContainer}
        StyledLink={StyledLink}
        href={"/Result"}
        name={"ดูผลลัพธ์การประเมิน"}
      ></Button>

    </div>
  );
}
//function displayRadioValue() {
//var ele = document.getElementsByName('gender');
//   for (i = 0; i < ele.length; i++) {
//     if (ele[i].checked)
//       document.getElementById("result").innerHTML
//         = "Gender: " + ele[i].value; 
// }

const StyledButtonContainer = {
  width: "200px",
  backgroundColor: "#C23D3D",
  borderRadius: "8px",
  color: "white",
  padding: "12px",
  boxSixing: "border-box",
  textAlign: "center",
};

const StyledLink = {
  color: "white",
  textDecoration: "inherit",
};
