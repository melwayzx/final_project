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

function createData(name, count) {
  return { name, count };
}

const rows = [
  createData("กรุงเทพ", 1600),
  createData("ภูเก็ต", 227),
  createData("นนทบุรี", 158),
  createData("สมุทรปราการ", 140),
  createData("ยะลา", 134),
];
export default function SimpleTable({ domesticSum }) {
  const classes = useStyles();

  // console.log(domesticSum.Province);
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
          {/* {rows.map((row) => ( */}
          <TableRow key={domesticSum.Province}>
            <TableCell component="th" scope="row">
              Amnat Charoen
            </TableCell>
            <TableCell align="right">
              {domesticSum.Province["Amnat Charoen"]}
            </TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
