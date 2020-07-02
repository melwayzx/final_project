import Link from "next/link";
import React from "react";
import Button from "../src/components/Button";
import Survey from '../pages/survey';
export default function covidScale() {
  return (
    <div>
      <Button
        StyledButtonContainer={StyledButtonContainer}
        StyledLink={StyledLink}
        href={"/"}
        name={"กลับไปหน้าหลัก"}
      ></Button>
      <Survey></Survey>
    </div >
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