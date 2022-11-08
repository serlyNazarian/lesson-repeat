import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import { useState } from 'react';
import AlertDialog from '../category/ConfirmModal';
import { showAlertSuccess } from "../../util/UtilNotify";

const Products = () => {
    const [products, setProducts] = useState([]);
    const handlerSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        e.target.reset();
        setProducts([
            ...products,
            {
                id: Date.now(),
                title: data.get("title"),
                price: data.get("price"),
                sale: data.get("sale"),
                description: data.get("description"),
                avatar: data.get("avatar"),
            }
        ])
    }



    const finallyDelete = (id) => {
        setProducts(products.filter((x) => x.id !== id))
        let msg = "Successfully deleted"
        showAlertSuccess(msg);
    }


    return (
        <div>
            <div className='add-form'>
                <form onSubmit={handlerSubmit}>
                    <div className="form-group">
                        <TextField required fullWidth={true} label={"Title"} name={"title"} />
                    </div>
                    <div className="form-group">
                        <TextField required fullWidth={true} label={"Price"} name={"price"} />
                    </div>
                    <div className="form-group">
                        <TextField required fullWidth={true} label={"Sale"} name={"sale"} />
                    </div>
                    <div className="form-group">
                        <TextField required fullWidth={true} label={"Description"} name={"description"} />
                    </div>
                    <div className='form-group'>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload File
                            <input
                                name={'avatar'}
                                type="file"
                                hidden
                            />
                        </Button>
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
                            <TableCell align='center'>Title</TableCell>
                            <TableCell align='center'>Price</TableCell>
                            <TableCell align='center'>Sale</TableCell>
                            <TableCell align='center'>Description</TableCell>
                            <TableCell align='center'>Avatar</TableCell>
                            <TableCell align='center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell component="th" scope="row">
                                    {product.id}
                                </TableCell>
                                <TableCell align='center'>
                                    {product.title}
                                </TableCell>
                                <TableCell align='center'>
                                    {product.price}
                                </TableCell>
                                <TableCell align='center'>
                                    {product.sale}
                                </TableCell>
                                <TableCell align='center'>
                                    {product.description}
                                </TableCell>
                                <TableCell align='center'>
                                    {product.avatar}
                                </TableCell>
                                <TableCell align='center'>
                                    <AlertDialog
                                        onYesClick={() => {
                                            finallyDelete(product.id)
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

export default Products;