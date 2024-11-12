import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

export default function LinePopulationChart({ populationData }) {
    return (
        <>
            <h3>Population growth</h3>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={populationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: '#000', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#0ABAB5" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}