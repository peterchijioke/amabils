import React from "react";
import PropTypes from "prop-types";
import "./top_.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function TopCard(props) {
  return (
    <div className="t-card">
      <div className="t-card-top">
        <div className="icon-shade"></div>
        <div className="icon-wrapper">{props.icon}</div>
        <div className="title-wrap">
          <span className="tcard-amount">{props.amount}</span>
          <label className="tcard-title">{props.title}</label>
        </div>
      </div>
      <div className="t-card-bottom">
        <ArrowRightAltIcon style={{ color: "#054834", fontSize: 40 }} />
      </div>
    </div>
  );
}

TopCard.propTypes = {};

export default TopCard;
