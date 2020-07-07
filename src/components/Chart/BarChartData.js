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
  console.log(domesticCase);
  let age = [];
  age = [{ ...domesticCase }].map((item) => console.log(item.Age));
  console.log(age);
  const data = [
    { name: "0-10 ปี", จำนวนคน: 62 },
    { name: "11-20 ปี ", จำนวนคน: 121 },
    { name: "21-30 ปี", จำนวนคน: 827 },
    { name: "31-40 ปี", จำนวนคน: 771 },
    { name: "41-50 ปี", จำนวนคน: 592 },
    { name: "51-60 ปี", จำนวนคน: 433 },
    { name: "61-70 ปี", จำนวนคน: 222 },
    { name: "71-80 ปี", จำนวนคน: 86 },
    { name: "81-90 ปี", จำนวนคน: 22 },
    { name: "91-100 ปี", จำนวนคน: 2 },
    { name: "ไม่ระบุ", จำนวนคน: 19 },
  ];
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 10,
        left: 10,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 1 " />
      <XAxis dataKey="name" />
      <YAxis dataKey="จำนวนคน" />
      <Tooltip />
      <Legend />
      <Bar dataKey="จำนวนคน" fill="#8884d8" />
    </BarChart>
  );
}
