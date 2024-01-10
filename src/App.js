import logo from './logo.svg';
import './App.css';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Label, Tooltip } from "recharts";

const topMargin = 10;
const leftMargin = 3;
const bottomMargin = 20;
const rightMargin = 15;

const data = [
  {
    x: 1,
    y: 2
  },
  {
    x: 2,
    y: 3,
  },
  {
    x: 2,
    y: 4,
  },
  {
    x: 2,
    y: 5
  },
  {
    x: 3,
    y: 4
  }
]


function App() {
  return (
    <div style={{ width: '33vw', height: '30vh' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: topMargin,
            left: leftMargin,
            bottom: bottomMargin,
            right: rightMargin,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="x"
            axisLine={{ stroke: "black" }}
            tick={{ fill: "black" }}
            tickLine={{ stroke: "black" }}
            domain={[1, 3]}
            style={{ fontSize: "14px" }}
            type="number"
          >
            <Label
              value="x"
              position="insideBottom"
              style={{ textAnchor: "middle", fontSize: "14px" }}
              fill="black"
              fontWeight="bold"
              dy={bottomMargin}
            />
          </XAxis>
          <YAxis
            dataKey="y"
            axisLine={{ stroke: "black" }}
            tick={{ fill: "black" }}
            tickLine={{ stroke: "black" }}
            style={{ fontSize: "14px" }}
            domain={[2, 5]}
            type="number"
          >
            <Label
              value="y"
              position="insideLeft"
              angle={-90}
              fill="black"
              fontWeight="bold"
              style={{ textAnchor: "middle", fontSize: "14px" }}
            />
          </YAxis>
          <Tooltip />
          <Area
            type="linear"
            dataKey="y"
            stroke="#7ABFFF"
            fill="rgba(0, 133, 255, 0.13)"
            dot={{ fill: "#90CAFF", stroke: "#90CAFF", fillOpacity: 1, r: 3 }}
            activeDot={{
              fill: "#0085FF",
              stroke: "#0085FF",
              fillOpacity: 1,
              r: 3,
            }}
          >
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
