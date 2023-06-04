import React, { Suspense } from "react";
import TopWrapper from "./e-component/top/TopWrapper";

function EStation() {
  return (
    <div style={Styles.container}>
      <Suspense fallback={<div>Loading ...</div>}>
        <TopWrapper />
      </Suspense>
    </div>
  );
}
const Styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F4F4F4",
    display: "flex",
  },
};

export default EStation;
