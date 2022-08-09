import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import DashboardItems from "../../components/DashboardItems";

const Dashboard = (props) => {
  const dashboardGadgets = [
    {
      title: "Products",
      amount: "60",
    },
    {
      title: "Cart",
      amount: "12",
    },
    {
      title: "Users",
      amount: "43",
    },
  ];

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#92a3e0",
          width: "100vw",
          padding: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: "black",
            borderRadius: "5px",
            backgroundColor: "white",
            padding: "0.4rem",
            width: "6rem",
            margin: "auto 1rem",
          }}
        >
          Dashboard
        </Typography>

        <div>
          <Button variant="contained" color="white">
            Product
          </Button>
          <Button
            variant="contained"
            color="white"
            style={{ margin: "auto 1.5rem" }}
          >
            Cart
          </Button>
        </div>

        <Typography
          variant="h6"
          style={{
            color: "white",
            padding: "0.4rem",
            width: "6rem",
          }}
        >
            user name
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >

        {
            dashboardGadgets.map( (item) => (
                <DashboardItems title={item.title} amount={item.amount} />
            ))
        }
      </div>
    </Container>
  );
};

export default Dashboard;
