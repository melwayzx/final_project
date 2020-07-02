import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function PieChartData({ domesticSum }) {
    // console.log({ domesticSum });
    const data = [
        {
            name: "ผู้หญิง",
            value: domesticSum.Gender["Female"],
        },
        {
            name: "ผู้ชาย",
            value: domesticSum.Gender["Male"],
        },
    ];

    const COLORS = ["#F08080", "#0088FE"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "250px",
            }}
        >
            <PieChart width={350} height={350}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    // outerRadius={80}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div style={{ display: "flex" }}>
                <div style={{ ...StyledLabel, background: "#F08080" }}></div>
                <div style={{ lineHeight: "20px", width: "50px" }}>ผู้หญิง</div>
                <div style={{ ...StyledLabel, background: "#0088FE" }}></div>
                <div style={{ lineHeight: "20px", width: "30px" }}> ผู้ชาย</div>
            </div>
        </div>
    );
}

const StyledLabel = {
    width: "20px",
    height: "20px",
    marginRight: "10px",
};