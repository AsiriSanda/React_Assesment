import React from 'react';
import '../pages/LogIn/Login.css';

const DashboardItems = (props) => {
    return (
      <div
        style={{
          width: "15rem",
          backgroundColor: "#34495e",
          margin: "2rem",
          padding: "2rem",
        }}
      >
        <h2 className="productTitle">{props.title}</h2>
        <h2 className="productAmount">{props.amount}</h2>
      </div>
    );
}

export default DashboardItems;
