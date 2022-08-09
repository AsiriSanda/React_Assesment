import {
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <Container
      style={{
        padding:"0",
        margin:"0",
        backgroundColor:"#ffffff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth:"100vw",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFBF8B8B",
          display: "flex",
          padding: "3rem",
          margin: "1rem",
          flexDirection: "column",
          width: "25rem",
          borderRadius: "10px",
          boxShadow: "0 1rem 3rem rgba(1, 1, 1, 0.275)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          LOGIN
        </Typography>

        <TextField
          label="Username"
          autoFocus
          required
          variant="outlined"
          //margin="dense"
        />

        <TextField
          label="Password"
          required
          variant="outlined"
          //margin="dense"
        />

        <Button
          variant="contained"
          color="primary"
          style={{ margin: "1rem 4rem" }}
        >
          Login
        </Button>

        <p>
          Create New User Account?
          <Link style={{ marginLeft: "0.4rem" }} href="#">
            Click Here
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
