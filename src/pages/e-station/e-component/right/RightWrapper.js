import React from "react";
import PropTypes from "prop-types";
import "./right.scss";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import useMediaQuery from "@mui/material/useMediaQuery";
import RCard from "./RCard";
function RightWrapper(props) {
  const mobile = useMediaQuery("(max-width:900px)");
  const tablet = useMediaQuery("(min-width:700px)");
  return (
    <div className="r-wrapper">
      <RCard
        onClick={() => {}}
        arrowStyle={{ left: !mobile ? "70px" : tablet ? "25rem" : "45px" }}
        style={{ width: "100%", backgroundColor: " #F6FFFF" }}
        icon={
          <img
            src={require("../../img/user.svg").default}
            style={{ color: "#fff" }}
          />
        }
        amount="201"
        title="Corporate Customers"
      />
      <RCard
        onClick={() => {}}
        arrowStyle={{ left: !mobile ? "70px" : tablet ? "25rem" : "45px" }}
        style={{
          width: "100%",
          marginTop: "15px",
          backgroundColor: " #F6FFFF",
        }}
        icon={
          <img
            src={require("../../img/users.svg").default}
            style={{ color: "#fff" }}
          />
        }
        amount="254"
        title="Individual Customers"
      />
      <div className="product-dis">
        <div className="donut-chart">
          <span>Product Dispensed</span>
          <div className="donut-chart-wrapper">
            <img
              src={require("../../img/chat2.svg").default}
              style={{ color: "#fff", width: 100, height: 100 }}
            />
          </div>
        </div>
        <RCard
          dot
          arrowStyle={{
            left: !mobile ? "60px" : tablet ? "25rem" : "30px",
            marginBottom: 20,
          }}
          type="PMS"
          onClick={() => {}}
          icon={
            <img
              src={require("../../img/pump (1).svg").default}
              style={{ color: "#fff" }}
            />
          }
          amount="23, 281.00 Liters"
          title="Total PMS Dispensed"
        />
        <RCard
          arrowStyle={{
            left: !mobile ? "60px" : tablet ? "25rem" : "30px",
            marginBottom: 20,
          }}
          dot
          type="DPK"
          style={{ margin: "1rem 0px 1rem 0px" }}
          onClick={() => {}}
          icon={
            <img
              src={require("../../img/pump (1).svg").default}
              style={{ color: "#fff" }}
            />
          }
          amount="23, 281.00 Liters"
          title="Total PMS Dispensed"
        />
        <RCard
          dot
          type="AGO"
          arrowStyle={{
            left: !mobile ? "60px" : tablet ? "25rem" : "30px",
            marginBottom: 20,
          }}
          onClick={() => {}}
          style={{ margin: "1rem 0px 1rem 0px" }}
          icon={
            <img
              src={require("../../img/pump (1).svg").default}
              style={{ color: "#fff" }}
            />
          }
          amount="23, 281.00 Liters"
          title="Total PMS Dispensed"
        />
      </div>
    </div>
  );
}

RightWrapper.propTypes = {};

export default RightWrapper;
