import React from "react";
import "./individual_sale.scss";
import moment from "moment";
import { Edit, Note } from "@mui/icons-material";

export default function SalesTable() {
  return (
    <div>
      <table id="sales-table-">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Date</th>
            <th>Time</th>
            <th>Account Name</th>
            <th>Vehicle No</th>
            <th>Product</th>
            <th>Litres</th>
            <th>Amount</th>
            <th>Station</th>
            <th>Attendant</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData_S.map((item, index) => (
            <tr key={Math.random()}>
              <td>{index + 1}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                  }}
                >
                  <ProfileImg item={item} />
                  {item.account_name}
                </div>
              </td>
              <td>{item.vehicle_no}</td>
              <td>{item.product}</td>
              <td>{item.liters}</td>
              <td>{item.price}</td>
              <td>{item.station}</td>
              <td>{item.attendant}</td>
              <td>
                <NoteIcon onClick={() => {}} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer-">
        <div className="inner-footer-"></div>
      </div>
    </div>
  );
}

const NoteIcon = ({ onClick }) => (
  <div onClick={onClick} style={styles.icon}>
    <Note style={{ color: "white", fontSize: 18 }} />
  </div>
);

const ProfileImg = ({ onClick, item }) => (
  <div onClick={onClick} style={{ ...styles.icon, marginRight: 3 }}>
    <img src={item.image} style={{ width: "100", height: "100%" }} />
  </div>
);

const styles = {
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#07956A",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const tableData_S = [
  {
    id: `${Math.random()}`,
    date: moment().format("MMM Do YY"),
    time: moment().format("LT"),
    account_name: "Olumide Olaseun",
    vehicle_no: "JK-1234-3",
    product: "AGO",
    liters: "20.5",
    price: "15,000.00",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
    station: "Amaco Uka",
    attendant: "Amina Ojo",
  },
  {
    id: `${Math.random()}`,
    date: moment().format("MMM Do YY"),
    time: moment().format("LT"),
    account_name: "Olumide Olaseun",
    vehicle_no: "JK-1234-3",
    product: "AGO",
    liters: "20.5",
    price: "15,000.00",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
    station: "Amaco Uka",
    attendant: "Amina Ojo",
  },
  {
    id: `${Math.random()}`,
    date: moment().format("MMM Do YY"),
    time: moment().format("LT"),
    account_name: "Mike Kola",
    vehicle_no: "JK-1234-3",
    product: "PMS",
    liters: "20.5",
    price: "15,000.00",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
    station: "Amaco Uka",
    attendant: "Amina Ojo",
  },
  {
    id: `${Math.random()}`,
    date: moment().format("MMM Do YY"),
    time: moment().format("LT"),
    account_name: "Chi Chijioke",
    vehicle_no: "JK-1234-3",
    product: "PMS",
    liters: "20.5",
    price: "15,000.00",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png",
    station: "Amaco Uka",
    attendant: "Amina Ojo",
  },
];
