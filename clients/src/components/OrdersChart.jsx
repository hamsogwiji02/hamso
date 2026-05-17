import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", orders: 120 },
  { name: "Tue", orders: 200 },
  { name: "Wed", orders: 150 },
  { name: "Thu", orders: 280 },
  { name: "Fri", orders: 220 },
  { name: "Sat", orders: 350 },
  { name: "Sun", orders: 400 },
];

export default function OrdersChart() {
  return (
    <div className="glass p-8 rounded-[30px] mt-10 h-[400px]">

      <h2 className="text-3xl font-black mb-8">
        Weekly Orders
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="orders"
            stroke="#00f5ff"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}