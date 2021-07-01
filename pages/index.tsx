import Layout from '../components/Layout/Layout'
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { useState, useEffect } from 'react';

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>${payload[0].value.toFixed(2)} NTD</p>
      </div>
    );
  }
  return null;
}

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setInterval(() => {
      let dummy_data: number [] = [];
      // data generation
      for(let num = 30; num >= 0; num--){
        dummy_data.push({
          date: subDays(new Date(), num).toISOString(),
          value: 26 + 4 * Math.random(),
        })
      }
      setData(dummy_data);
    }, 5000)
  }, [])

  return (
    <Layout>
      <div>
      <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        <YAxis
          datakey="value"
          axisLine={false}
          tickLine={false}
          tickCount={10}
          domain={['dataMin' - 2, 'dataMax' + 2]}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
      </div>
    </Layout>
  )
}
