import React from "react";
import ReportOne from "./pages/comprehensive/report/one";
import EStation from "./pages/e-station/EStation";
import IndevidualSales from "./pages/e-station/IndevidualSales";
import CorporateSales from "./pages/e-station/CorporateSales";
import Sales from "./pages/e-station/Sales";

export default function App() {
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      {/* <EStation /> */}
      {/* <IndevidualSales /> */}
      <CorporateSales />
      {/* <Sales /> */}
    </div>
  );
}
