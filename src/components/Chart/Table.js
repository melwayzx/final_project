import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import json from "../Map/thailand.json";
// import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: 275,
  },
});

export default function SimpleTable({ data }) {
  const classes = useStyles();

  console.log(data.features);
  // const provinceList = Object.keys(data.Province);
  const sortData = data.features.sort(
    (a, b) => b.properties.count - a.properties.count
  );
  console.log(sortData);

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
          {data.features.map((item, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
                style={{ paddingRight: "60px", fontFamily: "Sukhumvit Set" }}
              >
                {item.properties.TH}
              </TableCell>
              <TableCell align="right" style={{ fontFamily: "Sukhumvit Set" }}>
                {item.properties.count}
              </TableCell>
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
  width: "275px",
  overflow: "auto",
  color: "white",
};
const StyledTableHeader = {
  width: "275px",
  display: "flex",
  justifyContent: "space-between",
};
