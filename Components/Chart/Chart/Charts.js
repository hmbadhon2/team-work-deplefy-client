import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Charts = ({charts}) => {
    return (
        <div>
                {/* <div className="overflow-hidden">
            <h1>{chart?.length}</h1>
            <AreaChart width={700} height={400} data={data} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}>
                <CartesianGrid strokeDasharray="3 3" /><CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                <XAxis dataKey="name" />
                <Tooltip />

                <YAxis></YAxis>
            </AreaChart> */}
        </div>
       
    );
};

export default Charts;