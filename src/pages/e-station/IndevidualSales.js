import React from "react";
import PropTypes from "prop-types";
import TopWrapper from "./e-component/top/TopWrapper";
import { useMediaQuery } from "@mui/material";
import Button from "./indevidual-sales/Button";

function IndevidualSales(props) {
  const mobile = useMediaQuery("(max-width:900px)");
  return (
    <div style={styles(mobile).root}>
      <TopWrapper disableCard />
      <div
        style={{
          width: "100%",
          background: "blue",
          padding: "0rem 1rem 0rem 1rem",
          display: "flex",
          overflow: "auto",
          flexDirection: "row",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button title="All Products" />
          <Button title="All Products" style={{ margin: "0px 5px 0px 5px" }} />
          <Button title="All Products" />
        </div>
      </div>
    </div>
  );
}

IndevidualSales.propTypes = {};

export default IndevidualSales;

const styles = (mobile, tablet) => ({
  root: { width: "100%", height: "100%", background: "#ffffff" },
});
