import { Line, LineChart, XAxis, YAxis } from "recharts";


const Chart = () => {
    const data = [
        {
            name: 'Day 1',
            user: 100,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Day 2',
            user: 150,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Day 3',
            user: 200,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Day 4',
            user: 280,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Day 5',
            user: 300,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Day 6',
            user: 320,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Day 7',
            user: 350,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className="overflow-hidden">
            <LineChart width={500} height={400} data={data}>

                <Line type="monotone" dataKey="user" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default Chart;