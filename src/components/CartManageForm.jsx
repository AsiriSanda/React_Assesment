import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const CartManageForm = () => {
  const [date, setDate] = useState("");

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} className="grid_items_style">
          <FormControl size="small" fullWidth>
            <InputLabel id="cartUserNameLabel">User Name</InputLabel>
            <Select
              MenuProps={{
                PaperProps: { sx: { maxHeight: 150 } },
              }}
              required
              labelId="cartUserNameLabel"
              placeholder="User Name"
              id="cartUserName"
              label="User Name"
              fullWidth
              size="small"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
              <MenuItem value={40}>4</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} className="grid_items_style">
          <TextField
            label="Product Title"
            style={{
              background: "white",
            }}
            variant="filled"
            fullWidth
            margin="dense"
          />
        </Grid>

        <Grid item xs={6} className="grid_items_style">
          <TextField
            id="date"
            label="Date"
            type="date"
            fullWidth
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={6} className="grid_items_style">
          <TextField
            id="date"
            label="Qty"
            type="number"
            fullWidth
            size="small"
          />
        </Grid>

      </Grid>
      <div
        style={{
          width: "90%",
          position: "absolute",
          bottom: "2rem",
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
    </>
  );
};

export default CartManageForm;
