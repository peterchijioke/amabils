import React from "react";

export default function Button({ title, ...props }) {
  return (
    <div
      style={{
        height: 40,
        // width: "135px",
        padding: 2,
        background: "#06805B",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Nunito",
        color: "#FFFFFF",
        ...props.style,
      }}
    >
      {title}
    </div>
  );
}
