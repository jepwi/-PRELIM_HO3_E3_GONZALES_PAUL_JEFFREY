import React from "react";
import "../styles/PropsPage.css";

const PropsPage = ({ message }) => (
  <div className="props-container">
    <div className="props-box">
      <h2 className="props-title">Props Page</h2>
      <p className="props-message">{message}</p>
    </div>
  </div>
);

export default PropsPage;
