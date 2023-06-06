import React from "react";
import TopWrapper from "../e-component/top/TopWrapper";
import Button from "./Button";
import "./indevidual_sale.scss";
import { useMediaQuery } from "@mui/material";

export default function IndividualSaleindex() {
  const mobile = useMediaQuery("(max-width:900px)");
  const tablet = useMediaQuery("(min-width:800px)");
  return (
    <div className="wrap-btn-wrap">
      <div className="btn-wrap">
        <Button>{mobile ? "All" : "All Products"}</Button>
        <Button>PMS</Button>
        <Button>AGO</Button>
        <Button>DPK</Button>
        {/* <Button
          // style={{
          // }}
          title={mobile ? "All" : "All Products"}
        />
        <Button
          title="PMS"
          // style={{
          //   margin: !mobile && "0px 5px 0px 5px",
          // }}
        />
        <Button
          title="AGO"
          // style={{
          // }}
        />
        <Button
          title="DPK"
          // style={{
          //   margin: !mobile && "0px 5px 0px 5px",
          // }}
        /> */}
      </div>
      <input className="search-" type="text" id="fname" name="fname"></input>
    </div>
  );
}

const styles = (mobile, tablet) => ({
  btn: {},
});
