import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";
//const countryList = Object.keys(data.Country);
const columns = [
    { id: 'country', label: 'ประเทศ', minWidth: 100 },
    { id: 'infect', label: 'ผู้ติดเชื้อสะสม', minWidth: 100 },
    { id: 'well', label: 'หายแล้ว', minWidth: 100 },
    { id: 'dead', label: 'ตาย', minWidth: 100 },
];

function createData(country, infect, well, dead) {

    return { country, infect, well, dead };
}

const rows = [
    createData('India', 1324171354, 1324171354, 24),
    createData('China', 1324171354, 1403500365, 24),
    createData('Italy', 1324171354, 60483973, 24),
    createData('United States', 1324171354, 327167434, 24),
    createData('Canada', 132417135, 37602103, 24),
    createData('Australia', 132417135, 25475400, 24),
    createData('Germany', 132417135, 83019200, 24),
    createData('Ireland', 132417135, 4857000, 24),
    createData('Mexico', 132417135, 126577691, 24),

];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function TableSum({ countryList }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    console.log({ countryList })
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >{column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
