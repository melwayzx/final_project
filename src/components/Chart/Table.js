import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});

export default function SimpleTable({ data }) {
  const classes = useStyles();

  const provinceList = Object.keys(data.Province);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>จังหวัด</TableCell>
            <TableCell align="right">ผู้ติดเชื้อ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {provinceList.map((province) => (
            <TableRow key={province}>
              <TableCell component="th" scope="row">
                {province}
              </TableCell>
              <TableCell align="right">{data.Province[province]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
