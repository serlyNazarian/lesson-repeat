import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Category.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AlertDialog from "./ConfirmModal";
import { Link } from "react-router-dom";
import { showAlertError, showAlertSuccess } from "../../util/UtilNotify";

const Category = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch("http://asfaltirovanie7-24.ru/api/categories/get")
      .then((x) => x.json())
      .then((data) => setCategories(data.categories));
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    e.target.reset();
    let cong = { name: data.get("name") };
    const fetchConfiguration = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cong),
    };
    fetch(
      "http://asfaltirovanie7-24.ru/api/categories/store",
      fetchConfiguration
    )
      .then((x) => x.json())
      .then((x) => setCategories([x.category, ...categories]));

    // for (const [key, value] of data.entries()) {
    //   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
    // }
    // setCategories([...categories, { id: Date.now(), name: data.get("name"), price: data.get("price") }]);
  };

  const finallyDelete = (id) => {
    fetch("http://asfaltirovanie7-24.ru/api/categories/delete/" + id)
      .then((x) => x.json())
      .then((data) => {
        if (data.status === 1) {
          setCategories(categories.filter((x) => x.id !== id));
          showAlertSuccess(data.message)
        } else {
          showAlertError(data.message)
        }
      });
  };




  return (
    <div>
      <div className="add-form">
        <form onSubmit={handlerSubmit}>
          <div className="form-group">
            <TextField required fullWidth={true} label={"Name"} name={"name"} />
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
              <TableCell>id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Show</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">
                  <AlertDialog
                    onYesClick={() => {
                      finallyDelete(row.id);
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Link className="link" to={"/category/" + row.id}>
                    <Button variant={"outlined"}>Show</Button>
                  </Link>
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
