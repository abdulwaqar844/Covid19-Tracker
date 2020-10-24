import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function AllCountries() {
    const [globalData, setglobalData] = useState([{}]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
            let data = await response.json();
            setglobalData(Object.values(Object.values(data.countryitems[0])));



        }
        getData()
    }, [])
    const classes = useStyles();


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Serial No</TableCell>

                        <TableCell>Country</TableCell>
                        <TableCell align="right">Active Cases</TableCell>
                        <TableCell align="right">Total Cases</TableCell>
                        <TableCell align="right">Total Death</TableCell>
                        <TableCell align="right">Total Recoved</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {globalData.map((key, ind) => (
                        <TableRow key={ind}>
                            <TableCell component="th" scope="row">{globalData[ind].ourid}</TableCell>
                            <TableCell component="th" scope="row">{globalData[ind].title}</TableCell>
                            <TableCell align="right">{globalData[ind].total_active_cases}</TableCell>
                            <TableCell align="right">{globalData[ind].total_cases}</TableCell>
                            <TableCell align="right">{globalData[ind].total_deaths}</TableCell>
                            <TableCell align="right">{globalData[ind].total_recovered}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
