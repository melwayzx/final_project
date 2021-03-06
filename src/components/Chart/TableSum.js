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
    width: 450,
  },
});

export default function SimpleTable({ data }) {
  const classes = useStyles();

  // console.log(data);
  // const provinceList = Object.keys(data.Province);
  // const sortData = data.features.sort(
  //   (a, b) => b.properties.count - a.properties.count
  // );
  // console.log(sortData);

  return (
    <Table className={classes.table} aria-label="a dense table">
      <div style={StyledTableHeader}>
        <div style={{ color: "#AF3233", fontWeight: "600" }}>อันดับ</div>
        <div style={{ color: "#AF3233", fontWeight: "600" }}>ประเทศ</div>
        <div
          style={{
            color: "#AF3233",
            fontWeight: "600",
          }}
        >
          ผู้ติดเชื้อ
        </div>
        <div
          style={{
            color: "#AF3233",
            fontWeight: "600",
          }}
        >
          หายแล้ว
        </div>
        <div
          style={{
            color: "#AF3233",
            fontWeight: "600",
            paddingRight: "10px",
          }}
        >
          เสียชีวิต
        </div>
      </div>
      <div style={StyledTableContainer}>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell align="left">{index + 1}</TableCell>
              <TableCell align="center">{item.country}</TableCell>
              <TableCell align="center">
                {item.confirmed.toLocaleString("en-US")}
              </TableCell>
              <TableCell align="center">
                {item.recovered.toLocaleString("en-US")}
              </TableCell>
              <TableCell align="center">
                {item.deaths.toLocaleString("en-US")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </div>
    </Table>
  );
}

const StyledTableContainer = {
  height: "300px",
  width: "450px",
  overflow: "auto",
  color: "white",
};
const StyledTableHeader = {
  width: "450px",
  display: "flex",
  justifyContent: "space-between",
};
