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
import { useMediaQuery } from "@mui/material";

const data = [];

function TopWrapper(props) {
  const mobile = useMediaQuery("(max-width:900px)");
  const tablet = useMediaQuery("(min-width:700px)");
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div className="e-top-wrapper">
        <div className="date-select">
          <AppSelect data={data} />
          <AppDate />
        </div>
        <div className="card-wrapper">
          <TopCard
            arrowStyle={{ left: !mobile ? "30px" : tablet ? "25rem" : "45px" }}
            icon={<AccountBalanceWallet style={{ color: "#fff" }} />}
            amount="NGN 530,000"
            title="Wallet Balance"
          />
          <TopCard
            arrowStyle={{ left: !mobile ? "30px" : tablet ? "25rem" : "45px" }}
            amount="NGN 220,000"
            title="Assets"
            icon={<Description style={{ color: "#fff" }} />}
          />
          <TopCard
            arrowStyle={{ left: !mobile ? "30px" : tablet ? "25rem" : "45px" }}
            amount="NGN 230,000"
            title="Liability"
            icon={<Note style={{ color: "#fff" }} />}
          />
          <TopCard
            arrowStyle={{ left: !mobile ? "30px" : tablet ? "25rem" : "45px" }}
            amount="NGN 350,000"
            title="Sales"
            icon={<Receipt style={{ color: "#fff" }} />}
          />
        </div>
      </div>
    </div>
  );
}

TopWrapper.propTypes = {};

export default TopWrapper;
