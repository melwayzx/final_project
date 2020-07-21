import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import json from "../Map/thailand.json";
// import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: 300,
  },
});

export default function SimpleTable({ data }) {
  const classes = useStyles();

  const provinceList = Object.keys(data.Province);

  return (
    // <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
      {/* <TableHead>
        <TableRow>
          <TableCell>จังหวัด</TableCell>
          <TableCell align="right">ผู้ติดเชื้อ</TableCell>
        </TableRow>
      </TableHead> */}
      <div style={StyledTableHeader}>
        <div
          style={{ padding: "0px 15px", color: "#AF3233", fontWeight: "600" }}
        >
          จังหวัด
        </div>
        <div
          style={{
            padding: "0 40px 0 40px",
            color: "#AF3233",
            fontWeight: "600",
          }}
        >
          ผู้ติดเชื้อ
        </div>
      </div>
      <div style={StyledTableContainer}>
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
      </div>
    </Table>
    // </TableContainer>
  );
}

const StyledTableContainer = {
  height: "600px",
  width: "300px",
  overflow: "auto",
  color: "white",
};
const StyledTableHeader = {
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
};
