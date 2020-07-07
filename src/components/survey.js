import React, { useState } from "react";
import Button from "./Button";

export default function survey() {
  const [point, setPoint] = useState('');
  const [select, setSelected] = useState(false);

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
          <label><input type="radio" value="1" id="1" />
            ต่ำกว่า 37.5 องศา</label>
          <label><input type="radio" value="2" id="2" />
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
            <input type="radio" value="1" id="1" />
            ไม่มี
          </label>
          <label>
            <input type="radio" value="2" id="2" />
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
            <input type="radio" value="1" id="1" />
            ไม่มี
          </label>
          <label>
            <input type="radio" value="2" id="2" />
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
            <input type="radio" value="1" id="1" />
            ไม่มี
          </label>
          <label>
            <input type="radio" value="2" id="2" />
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
            <input type="radio" value="1" id="1" />
            ไม่มี
          </label>
          <label>
            <input type="radio" value="2" id="2s" />
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
            <input type="radio" value="1" id="1" />
            ไม่มี
          </label>
          <label>
            <input type="radio" value="2" id="2" />
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
            <input type="radio" value="1" id="1" />
            ไม่มี
          </label>
          <label>
            <input type="radio" value="2" id="2" />
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
            <input type="radio" value="1" id="1" />
            ไม่มี
          </label>
          <label>
            <input type="radio" value="2" id="2" />
            มี
          </label>
        </div>
      </form>
      <Button
        StyledButtonContainer={StyledButtonContainer}
        StyledLink={StyledLink}
        href={"/result"}
        name={"ดูผลลัพธ์การประเมิน"}
      // onclick="displayRadioValue()"
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
