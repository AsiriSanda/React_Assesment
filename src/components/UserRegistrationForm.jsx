import { Grid,Button, TextField } from "@material-ui/core";
import React from "react";
import "../pages/User/UserRegistrationForm.css";

const UserRegistrationForm = () => {
  return (
    <Grid container rowSpacing={1} spacing={4}>
      <Grid item xs={6}>
        <TextField
          label={"First Name"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Last Name"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Email"}
          type={"email"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Username"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Password"}
          type={"password"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"City"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Street"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Street No"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Zip Code"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Lat Value"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Long Value"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={"Mobile Number"}
          variant={"outlined"}
          fullWidth
          margin={"dense"}
          className={"input_fields"}
        />
      </Grid>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          style={{
            margin: "0.5rem",
          }}
          variant={"contained"}
          color={"neutral"}
        >
          Clear
        </Button>
        <Button 
          style={{
            margin: "0.5rem",
          }}
          variant={"contained"}
          color={"primary"}
        >
          Save
        </Button>
      </div>
    </Grid>
  );
};

export default UserRegistrationForm;
