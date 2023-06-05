import React, { useId, useState } from "react";
import "./select_.scss";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
export default function AppSelect({ data = [] }) {
  const mobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);
  const id = useId();

  const data_ = [
    { id, name: "Goat" },
    { id, name: "Goat" },
    { id, name: "Goat" },
  ];
  return (
    <div className="wrap-wrap-select_">
      <div className="select-wrapper">
        <div className="selected">{stripeText("peterChijiokeChuke")}</div>
        <div className="select-icon-wrap">
          <ArrowDropDown style={{ fontSize: 40 }} />
        </div>
      </div>
      <div className="s-dropdown-card"></div>
    </div>
  );
}

const stripeText = (data = "") => {
  if (data.length == 0) {
    return data;
  } else {
    if (data.length > 12) {
      const da = data.slice(0, 12) + "...";
      return da;
    }
  }
};
