import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const DonutChartComponent = ({ inventory }) => {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie data={Object.entries(inventory).map(([name, count]) => ({ name, count }))} dataKey="count" outerRadius={100} fill="#8884d8" label>
                    {Object.entries(inventory).map(([_, __], index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default DonutChartComponent;
