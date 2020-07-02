import React from "react";
import Link from "next/link";

export default function Button({
  href,
  name,
  StyledLink,
  StyledButtonContainer,
}) {
  return (
    <div>
      <div style={StyledButtonContainer}>
        <Link href={href}>
          <a style={StyledLink}>{name}</a>
        </Link>
      </div>
    </div>
  );
}
