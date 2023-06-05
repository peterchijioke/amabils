import React from "react";
import PropTypes from "prop-types";
import "./right.scss";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import useMediaQuery from "@mui/material/useMediaQuery";
import RCard from "./RCard";
function RightWrapper(props) {
  const mobile = useMediaQuery("(max-width:900px)");
  return (
    <div className="r-wrapper">
      <RCard
        onClick={() => {}}
        arrowStyle={{ left: !mobile ? "70px" : "45px" }}
        style={{ width: "100%", backgroundColor: " #F6FFFF" }}
        icon={<PersonIcon style={{ color: "#fff" }} />}
        amount="201"
        title="Corporate Customers"
      />
      <RCard
        onClick={() => {}}
        arrowStyle={{ left: !mobile ? "70px" : "45px" }}
        style={{
          width: "100%",
          marginTop: "15px",
          backgroundColor: " #F6FFFF",
        }}
        icon={<SupervisorAccountIcon style={{ color: "#fff" }} />}
        amount="254"
        title="Individual Customers"
      />
      <div className="product-dis">
        <div className="donut-chart">
          <span>Product Dispensed</span>
          <div className="donut-chart-wrapper"></div>
        </div>
        <RCard
          dot
          style={{ margin: "1rem 0px 1rem 0px" }}
          type="PMS"
          onClick={() => {}}
          icon={<SupervisorAccountIcon style={{ color: "#fff" }} />}
          amount="23,281.00 Liters"
          title="Total PMS Dispensed"
        />
        <RCard
          dot
          type="DPK"
          style={{ margin: "1rem 0px 1rem 0px" }}
          onClick={() => {}}
          icon={<SupervisorAccountIcon style={{ color: "#fff" }} />}
          amount="23, 281.00 Liters"
          title="Total PMS Dispensed"
        />
        <RCard
          dot
          type="AGO"
          onClick={() => {}}
          style={{ margin: "1rem 0px 1rem 0px" }}
          icon={<SupervisorAccountIcon style={{ color: "#fff" }} />}
          amount="23, 281.00 Liters"
          title="Total PMS Dispensed"
        />
      </div>
    </div>
  );
}

RightWrapper.propTypes = {};

export default RightWrapper;
