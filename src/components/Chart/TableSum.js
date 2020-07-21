import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
//const countryList = Object.keys(data.Country);
const columns = [
  { id: "country", label: "ประเทศ", minWidth: 100 },
  { id: "confirmed", label: "ผู้ติดเชื้อสะสม", minWidth: 100 },
  { id: "recovered", label: "หายแล้ว", minWidth: 100 },
  { id: "deaths", label: "ตาย", minWidth: 100 },
];

function createData(country, confirmed, recovered, deaths) {
  return { country, confirmed, recovered, deaths };
}

const rows = [
  createData("India", 0, 0, 0),
  createData("China", 0, 0, 0),
  createData("Italy", 0, 0, 0),
  createData("United States", 0, 0, 0),
  createData("Canada", 0, 0, 0),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableSum({ sumCountry }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  //   const [data, setData] = useState([]);

  //   console.log({ sumCountry });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //   useEffect(() => {
  //     if (sumCountry === undefined) {
  //       setData(rows);
  //     } else {
  //       setData(sumCountry);
  //     }
  //   }, [data]);
  let data = [];
  if (sumCountry === undefined) {
    data = rows;
  } else {
    data = sumCountry;
  }

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
                >
                  {" "}
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}

                    {/* {sumCountry.map((item) => (
                                        <TableCell
                                            key={item.label}
                                        >{item.label}
                                        </TableCell>
                                    ))} */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
