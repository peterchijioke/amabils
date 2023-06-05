import React, { useId } from "react";
import "./appTable.scss";
import moment from "moment";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { tableData_E } from "../../data";
export default function AppTable() {
  return (
    <div className="table-container">
      <div style={styles().tWrap}>
        <table id="app-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Date</th>
              <th>Time</th>
              <th>Account Name</th>
              <th>Product</th>
              <th>Litres</th>
              <th>Price</th>
              <th>Station</th>
              <th>Attendants</th>
            </tr>
          </thead>
          <tbody>
            {tableData_E.map((item, index) => (
              <tr key={index + item.id}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>
                  <div style={styles().userName}>
                    <img
                      src={require("../../img/image.svg").default}
                      className="profile-image"
                    />
                    <label>{item.account_name}</label>
                  </div>
                </td>
                <td>
                  <CircleIcon
                    style={{
                      color:
                        item.product == "DPK"
                          ? "#35393E"
                          : item.product == "PMS"
                          ? "#399A19"
                          : "#FFA010",
                      marginRight: 2,
                      fontSize: 8,
                    }}
                  />
                  {item.product}
                </td>
                <td>{item.liters}</td>
                <td>{item.price}</td>
                <td>{item.station}</td>
                <td>{item.attendant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-wrap">
        <div style={styles().pagginator}>
          <button className="button_">
            <KeyboardArrowLeftIcon />
          </button>
          <button className="button_">
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = (mobile, tablet) => ({
  tWrap: {
    maxHeight: "550px",
    overflow: "scroll",
    width: "100%",
  },
  pagginator: {
    display: "flex",
    flexDirection: "row",
    marginRight: "10px",
    marginBottom: 10,
  },
  userName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "1rem",
  },
});
