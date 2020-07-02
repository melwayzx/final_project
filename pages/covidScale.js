import Link from "next/link";
import React from "react";
import Button from "../src/components/Button";

export default function covidScale() {
  return (
    <div>
      <Button
        StyledButtonContainer={StyledButtonContainer}
        StyledLink={StyledLink}
        href={"/"}
        name={"กลับไปหน้าหลัก"}
      ></Button>

      <form>
        <div>1. ผู้ป่วยมีอุณหภูมิร่างกายในช่วงอุณหภูมิใด</div>

        <div className="radio">
          <label>
            <input type="radio" value="1" checked={false} />
            ต่ำกว่า 37.5 องศา
          </label>
          <label>
            <input type="radio" value="2" checked={false} />
           สูงกว่าหรือเท่ากับ 37.5 หรือ รู้สึกว่ามีไข้
          </label>
        </div>
      </form>
    </div>
  )
}

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
const StyledButtonChoice = {
  width: "300px",
  backgroundColor: "#6B726E",
  borderRadius: "8px",
  color: "white",
  padding: "10px",
  boxSixing: "border-box",
  textAlign: "center",
};