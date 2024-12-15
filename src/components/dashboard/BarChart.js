import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BarChartComponent = ({ data }) => {
    const transformedData = [
        { id: "Odd", count: data.filter((d) => d.id % 2 !== 0).length },
        { id: "Even", count: data.filter((d) => d.id % 2 === 0).length },
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={transformedData}>
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
