import React from "react";
import Link from "next/link";

export default function Button({ href, name }) {
  return (
    <div>
      <div style={StyledButtonContainer}>
        <Link href="/covidScale">
          <a style={StyledLink}>{name}</a>
        </Link>
      </div>
    </div>
  );
}

const StyledButtonContainer = {
  width: "200px",
  backgroundColor: "#C23D3D",
  borderRadius: "8px",
  color: "white",
  padding: "10px",
  boxSixing: "border-box",
  textAlign: "center",
};

const StyledLink = {
  color: "white",
  textDecoration: "inherit",
};
