import React, { useId } from "react";
import "./appTable.scss";
import moment from "moment";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export default function AppTable() {
  const id = useId();
  const date = new Date().getDate();
  const data = [
    {
      id,
      date: moment().format("MMM Do YY"),
      time: moment().format("LT"),
      account_name: "Olumide Akanbi",
      product: "DPK",
      liters: "20.5",
      price: "15,000.00",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      time: moment().format("LT"),
      account_name: "Olumide Olaseun",
      product: "PMS",
      liters: "20.5",
      price: "15,000.00",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      time: moment().format("LT"),
      account_name: "Olumide Olaseun",
      product: "PMS",
      liters: "20.5",
      price: "15,000.00",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      time: moment().format("LT"),
      account_name: "Olumide Olaseun",
      product: "PMS",
      liters: "20.5",
      price: "15,000.00",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      time: moment().format("LT"),
      account_name: "Olumide Olaseun",
      product: "PMS",
      liters: "20.5",
      price: "15,000.00",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      time: moment().format("LT"),
      account_name: "Olumide Akanbi",
      product: "DPK",
      liters: "20.5",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      price: "15,000.00",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      time: moment().format("LT"),
      account_name: "Olumide Akanbi",
      product: "PMS",
      liters: "20.5",
      price: "15,000.00",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      time: moment().format("LT"),
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      account_name: "Olumide Olaseun",
      product: "AGO",
      liters: "20.5",
      price: "15,000.00",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      time: moment().format("LT"),
      account_name: "Olumide Olaseun",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      product: "PMS",
      liters: "20.5",
      price: "15,000.00",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
    {
      id,
      date: moment().format("MMM Do YY"),
      time: moment().format("LT"),
      account_name: "Olumide Olaseun",
      product: "AGO",
      liters: "20.5",
      price: "15,000.00",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
      station: "Amaco Uka",
      attendant: "Amina Ojo",
    },
  ];
  return (
    <div className="table-container">
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
          {data.map((item, index) => (
            <tr key={index + item.id}>
              <td>{index + 1}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
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
      <div className="button-wrap">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "10px",
            marginBottom: 10,
          }}
        >
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
