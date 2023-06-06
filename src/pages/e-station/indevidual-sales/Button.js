import React from "react";
import "./indevidual_sale.scss";

export default function Button({ title, ...props }) {
  return <button className="i-top-btn" {...props} />;
}
