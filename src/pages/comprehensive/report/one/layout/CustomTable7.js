import React, { useId } from "react";

export default function CustomTable7({ title = "Payment & Net to Bank" }) {
  const id = useId();
  const dataT7_1 = [
    {
      id,
      head: "Bank Name",
      data: "Wema Bank",
    },
    {
      id,
      head: "Account No",
      data: "18277281771881",
    },
    {
      id,
      head: "Teller",
      data: "127,927.00",
    },
    {
      id,
      head: "pos",
      data: "136,971.00",
    },
    {
      id,
      head: "Total",
      data: "253,927.00",
    },
    {
      id,
      head: "Differences",
      data: "35,928.00",
    },
  ];
  const dataT7_2 = [
    {
      id,
      head: "Total Amount of Sales",
      data: "18277281771881",
    },
    {
      id,
      head: "Total Amount of Expenses",
      data: "127,927.00",
    },
    {
      id,
      head: "Total Amount of I.O.N",
      data: "136,971.00",
    },
    {
      id,
      head: "Total",
      data: "253,927.00",
    },
    {
      id,
      head: "Differences",
      data: "35,928.00",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <span style={Styles.title}>{title}</span>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* ===================== Table1 =================*/}
        <table
          style={{
            width: "45%",
            padding: 0,
            borderSpacing: 5,
            // marginRight: 10,
          }}
        >
          {dataT7_1.map((item, index) => (
            <tr key={index}>
              <th
                style={
                  index == dataT7_1.length - 1 || index == dataT7_1.length - 2
                    ? Styles.th
                    : Styles.header
                }
              >
                {item.head}
              </th>
              <td style={Styles.th}>{item.data}</td>
            </tr>
          ))}
        </table>

        {/* =========================Table 2 ============== */}
        <table
          style={{
            width: "45%",
            padding: 0,
            borderSpacing: 5,
            // marginLeft: 10,
          }}
        >
          {dataT7_2.map((item, index) => (
            <tr key={index}>
              <th
                style={
                  index == dataT7_2.length - 1 || index == dataT7_2.length - 2
                    ? Styles.th
                    : Styles.header
                }
              >
                {item.head}
              </th>
              <td style={Styles.th}>{item.data}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

const Styles = {
  header: {
    paddingLeft: 10,
    fontFamily: "'Nunito', sans-serif",
    fontStyle: "normal",
    lineHeight: "22px",
    textAlign: "start",
    color: "white",
    height: "40px",
    fontSize: 14,
    background: "linear-gradient(266.48deg, #171717 8.34%, #252525 52.9%)",
    borderRadius: "4px",
  },
  title: {
    fontFamily: "'Nunito', sans-serif",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "34px",
    color: "#06805B",
    marginLeft: 8,
    marginTop: "1rem",
    marginBottom: 5,
  },
  th: {
    height: "35px",
    background: "#F3F3F3",
    borderRadius: "4px",
    fontSize: 14,
    padding: "5px",
    fontFamily: "'Nunito', sans-serif",
  },
};
