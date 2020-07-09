import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function LineCharts({ confirmGlobal }) {

    // console.log(confirmGlobal)

    return (
        <LineChart
            width={600}
            height={600}
            // data={[{ date:}]}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}

        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" unit="ประเทศ" />
            <YAxis dataKey="y" unit="จำนวนคน" />
            <Tooltip />
            <Legend />
            {/* <Line type="monotone" dataKey="Thailand" stroke="#8884d8" />
            <Line type="monotone" dataKey="Japan" stroke="#82ca9d" /> */}
        </LineChart >

    );
}


