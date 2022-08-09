import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React from "react";
import "../pages/Product/ProductManage.css";

const ProductManageForm = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} className="grid_items_style">
          <TextField
            label="Title"
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
            label="Price"
            style={{
              background: "white",
            }}
            variant="filled"
            fullWidth
            margin="dense"
          />
        </Grid>
        <Grid item xs={6} className="grid_items_style">
          <FormControl fullWidth>
            <InputLabel id={"category-label"}>Category</InputLabel>
            <Select labelId={"category-label"} label="Category">
              <MenuItem value={1}>Category-One</MenuItem>
              <MenuItem value={2}>Category-Two</MenuItem>
              <MenuItem value={3}>Category-Three</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} className="grid_items_style">
          <TextareaAutosize
            minRows={4}
            placeholder={"Description"}
            style={{
              width: "30rem",
              boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Grid>

        <Grid item xs={6} className="grid_items_style">
          <Button variant={"contained"} color={"primary"}>
            Choose Image
          </Button>
        </Grid>
      </Grid>
      <div
        style={{
          width: "90%",
          position: "absolute",
          bottom: "2rem",
          display:'flex',
          justifyContent:'flex-end'
        }}
      >
        <Button style={{
            margin:'1rem'
        }} variant={"contained"} color={"white"}>
          Clear
        </Button>
        <Button style={{
            margin:'1rem'
        }} variant={"contained"} color={"primary"}>
          Save
        </Button>
      </div>
    </>
  );
};

export default ProductManageForm;
