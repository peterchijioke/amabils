import React, { Suspense } from "react";
import TopWrapper from "./e-component/top/TopWrapper";
import Wrapper from "./e-component/wrapper/Wrapper";

function EStation() {
  return (
    <div style={Styles.container}>
      <Suspense fallback={<div>Loading ...</div>}>
        <TopWrapper />
        <Wrapper />
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
    flexDirection: "column",
    flex: 1,
  },
};

export default EStation;
