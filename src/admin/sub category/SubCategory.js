import { Button, Table, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import AlertDialog from '../category/ConfirmModal';

const SubCategory = () => {
    const [test, setTest] = useState('');
    const testCategories = [
        {
            id: 1,
            value: "electronics",
            name: "electronics",
        },
        {
            id: 2,
            value: "games",
            name: "games",
        },
        {
            id: 3,
            value: "idk",
            name: "idk",
        },
        {
            id: 4,
            value: "more",
            name: "more",
        },
        {
            id: 5,
            value: "toys",
            name: "toys",
        },
    ];

    const handleChange = (e) => {
        setTest(e.target.value)
    }



    return (
        <div className='Sub-Category-div'>
            <div className='add-form'>
                <form>
                    <div className='form-group'>
                        <TextField required fullWidth={true} label={"Name"} name={"name"} />
                    </div>
                    <div className='form-group'>
                        <TextField
                            fullWidth={true}
                            id="category"
                            select
                            label="Category"
                            value={test}
                            onChange={handleChange}
                            helperText="Please select your category"
                        >
                            {testCategories.map((option) => (
                                <MenuItem key={option.id} value={option.value}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className='form-group'>
                        <Button type={"submit"} variant={"outlined"}>Add</Button>
                    </div>
                </form>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> id </TableCell>
                            <TableCell align="center"> Name </TableCell>
                            <TableCell align="center"> Parent Category </TableCell>
                            <TableCell align="center"> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">1</TableCell>
                            <TableCell align="center">toy</TableCell>
                            <TableCell align="center">
                                IDK
                            </TableCell>
                            <TableCell align="center">
                                <AlertDialog />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default SubCategory;