import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Category.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setCategories([...categories, { id: Date.now(), name: data.get("name") }]);
  };
  return (
    <div>
      <div className="add-form">
        <form onSubmit={handlerSubmit}>
          <div className="form-group">
            <TextField fullWidth={true} label={"Name"} name={"name"} />
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
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  <Button variant={"outlined"} color={"error"}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Category;
