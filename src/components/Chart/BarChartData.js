import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
export default function BarChartData({ domesticCase }) {
  let age0_10 = 0;
  let age11_20 = 0;
  let age21_30 = 0;
  let age31_40 = 0;
  let age41_50 = 0;
  let age51_60 = 0;
  let age61_70 = 0;
  let age71_80 = 0;
  let age81_90 = 0;
  let age91_100 = 0;
  let ageUndefined = 0;

  const age = domesticCase.Data.map((item) => {
    if (item.Age <= 10) {
      age0_10 += 1;
    } else if (item.Age <= 20) {
      age11_20 += 1;
    } else if (item.Age <= 30) {
      age21_30 += 1;
    } else if (item.Age <= 40) {
      age31_40 += 1;
    } else if (item.Age <= 50) {
      age41_50 += 1;
    } else if (item.Age <= 60) {
      age51_60 += 1;
    } else if (item.Age <= 70) {
      age61_70 += 1;
    } else if (item.Age <= 80) {
      age71_80 += 1;
    } else if (item.Age <= 90) {
      age81_90 += 1;
    } else if (item.Age <= 100) {
      age91_100 += 1;
    } else {
      ageUndefined += 1;
    }
  });
  const data = [
    { name: "0-10 ปี", จำนวนคน: age0_10 },
    { name: "11-20 ปี ", จำนวนคน: age11_20 },
    { name: "21-30 ปี", จำนวนคน: age21_30 },
    { name: "31-40 ปี", จำนวนคน: age31_40 },
    { name: "41-50 ปี", จำนวนคน: age41_50 },
    { name: "51-60 ปี", จำนวนคน: age51_60 },
    { name: "61-70 ปี", จำนวนคน: age61_70 },
    { name: "71-80 ปี", จำนวนคน: age71_80 },
    { name: "81-90 ปี", จำนวนคน: age81_90 },
    { name: "91-100 ปี", จำนวนคน: age91_100 },
    // { name: "ไม่ระบุ", จำนวนคน: ageUndefined },
  ];
  return (
    <BarChart width={700} height={350} data={data} barSize={40}>
      {/* <CartesianGrid strokeDasharray="1 1 " /> */}
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Tooltip />
      <Legend />
      <Bar
        dataKey="จำนวนคน"
        fill="rgb(240, 128, 128)"
        background={{ fill: "#eee" }}
        label={{ position: "top", opacity: "0.6" }}
      />
    </BarChart>
  );
}
