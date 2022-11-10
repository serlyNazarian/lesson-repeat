import {
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import AlertDialog from "../category/ConfirmModal";
import { showAlertSuccess } from "../../util/UtilNotify";

const SubCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedcategorie, setSelectedCategorie] = useState("");
  const [subcategory, setSubCategory] = useState([]);

  useEffect(() => {
    fetch("http://asfaltirovanie7-24.ru/api/categories/get")
      .then((x) => x.json())
      .then((data) =>
        setCategories(
          data.categories.map((cat) => {
            return { name: cat.name, value: "" + cat.id, id: cat.id };
          })
        )
      );
  }, []);

  const handleChange = (e) => {
    setSelectedCategorie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // console.log("data=", data);

    // for (const [key, value] of data.entries()) {
    //   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
    // }

    setSubCategory([
      ...subcategory,
      {
        id: Date.now(),
        name: data.get("name"),
        category: data.get("category"),
      },
    ]);
    e.target.reset();
    setSelectedCategorie("");
  };

  const finallyDelete = (id) => {
    setSubCategory(subcategory.filter((x) => x.id !== id));
    let msg = "Successfully deleted";
    showAlertSuccess(msg);
  };

  return (
    <div className="Sub-Category-div">
      <div className="add-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField required fullWidth={true} label={"Name"} name={"name"} />
          </div>
          <div className="form-group">
            <TextField
              required
              fullWidth={true}
              label="Category"
              name={"category"}
              select
              value={selectedcategorie}
              onChange={handleChange}
              helperText="Please select your category"
            >
              {categories.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="form-group">
            <Button type={"submit"} variant={"outlined"}>
              Add
            </Button>
          </div>
        </form>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> id </TableCell>
              <TableCell align="center"> Name </TableCell>
              <TableCell align="center"> Parent Id </TableCell>
              <TableCell align="center"> Delete </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subcategory.map((subitem) => (
              <TableRow key={subitem.id}>
                <TableCell component="th" scope="row">
                  {subitem.id}
                </TableCell>
                <TableCell align="center">{subitem.name}</TableCell>
                <TableCell align="center">{subitem.category}</TableCell>
                <TableCell align="center">
                  <AlertDialog
                    onYesClick={() => {
                      finallyDelete(subitem.id);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SubCategory;
