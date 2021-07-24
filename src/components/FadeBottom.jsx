import React from "react";

export default function FadeBottom({ small = false }) {
  const fadeBottomStyle = {
    minHeight: small ? "10vh" : "22vh",
    position: "absolute",
    borderBottomLeftRadius: "inherit",
    borderBottomRightRadius: "inherit",
    bottom: "0",
    width: "100%",
    color: "white",
    backgroundImage:
      "linear-gradient(180deg,transparent,rgba(37, 37, 37, 0.61),#111)",
  };
  return <div style={fadeBottomStyle}></div>;
}
