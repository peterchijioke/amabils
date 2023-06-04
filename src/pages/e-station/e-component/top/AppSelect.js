import React, { useId } from "react";
import "./top_.scss";
export default function AppSelect({ data = [] }) {
  const id = useId();

  const data_ = [
    { id, name: "Goat" },
    { id, name: "Goat" },
    { id, name: "Goat" },
  ];
  return <div className="select-wrapper"></div>;
}
