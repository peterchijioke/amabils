import React from "react";
import PropTypes from "prop-types";
import "./top_.scss";
import AppSelect from "./AppSelect";
import AppDate from "./AppDate";
import TopCard from "./TopCard";
import {
  AccountBalanceWallet,
  Description,
  Receipt,
  Note,
} from "@mui/icons-material";

const data = [];

function TopWrapper(props) {
  return (
    <div className="e-top-wrapper">
      <div className="date-select">
        <AppSelect data={data} />
        <AppDate />
      </div>
      <div className="card-wrapper">
        <TopCard
          icon={<AccountBalanceWallet style={{ color: "#fff" }} />}
          amount="NGN 530,000"
          title="Wallet Balance"
        />
        <TopCard
          amount="NGN 220,000"
          title="Assets"
          icon={<Description style={{ color: "#fff" }} />}
        />
        <TopCard
          amount="NGN 230,000"
          title="Liability"
          icon={<Note style={{ color: "#fff" }} />}
        />
        <TopCard
          amount="NGN 350,000"
          title="Sales"
          icon={<Receipt style={{ color: "#fff" }} />}
        />
      </div>
    </div>
  );
}

TopWrapper.propTypes = {};

export default TopWrapper;
