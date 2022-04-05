import React from 'react';
import './Dashboard.css'
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
    { month: 'Mar', investment: 100000, sell: 241, revenue: 10401 },
    { month: 'Apr', investment: 200000, sell: 423, revenue: 24500 },
    { month: 'May', investment: 500000, sell: 726, revenue: 67010 },
    { month: 'Jun', investment: 500000, sell: 529, revenue: 40405 },
    { month: 'Jul', investment: 600000, sell: 601, revenue: 50900 },
    { month: 'Aug', investment: 700000, sell: 670, revenue: 61000 },
];

const Dashboard = () => {
    return (
        <div>
            <h2>This is Dashboard</h2>
            <div className='chart'>
                <div>
                    <LineChart width={600} height={330} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <LineChart width={600} height={330} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;