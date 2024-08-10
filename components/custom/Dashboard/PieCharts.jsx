import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts'

const PieCharts = ({ totalIllness, resolvedIllness }) => {
    const data = [
        {
            name: 'Total Condition',
            value: Number(totalIllness),
            fill: '#0F6292'
        },
        {
            name: 'Resolved Condition',
            value: Number(resolvedIllness),
            fill: '#16FF00'
        }
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='p-5 border rounded-lg shadow-md'>
            <h2 className='font-bold text-lg pb-6'>Quick Overview</h2>
            <ResponsiveContainer width={'100%'} height={300}>
                <PieChart>
                    {/* <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label /> */}
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieCharts