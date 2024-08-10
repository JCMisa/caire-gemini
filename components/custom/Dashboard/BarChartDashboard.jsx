import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const BarChartDashboard = ({ assessmentList }) => {
    return (
        <div className='border rounded-lg md:p-5'>
            <h2 className='font-bold text-lg'>Assessment</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={assessmentList} margin={{ top: 7 }}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='resolved' stackId='a' fill='#2E236C' />
                    <Bar dataKey='unresolved' stackId='a' fill='#433D8B' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartDashboard