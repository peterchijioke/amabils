import React from "react";
import CustomTable from "../two/layout/CustomTable";
import { dataT1, headerT1 } from "./data";

export default function index() {
  const footer = [
    {
      id: `${Math.random()}`,
      value: "",
    },
    {
      id: `${Math.random()}`,
      value: "Total",
    },
    {
      id: `${Math.random()}`,
      value: "283,922.00 ",
    },
  ];
  return (
    <div style={Styles.wrapper}>
      <div style={Styles.tp}>
        <div style={Styles.ft}>
          <span style={Styles.span}>
            <label for="title" style={{ color: "#06805B" }}>
              Comprehensive Result
            </label>
            - 20 May, 2023
          </span>
        </div>
        <CustomTable
          title="Expenses"
          data={dataT1}
          footer={footer}
          header={headerT1}
        />
      </div>
    </div>
  );
}

const Styles = {
  wrapper: {
    backgroundColor: "#f1f1f1",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  span: {
    fontstyle: "normal",
    fontWeight: 800,
    fontSize: "32px",
    lineHeight: "44px",
    fontFamily: "'Nunito', sans-serif",
  },
  tp: {
    width: "85%",
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
  },
  ft: { marginTop: 20, marginBottom: "1rem" },
};
