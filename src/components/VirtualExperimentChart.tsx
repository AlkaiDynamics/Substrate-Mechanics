import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

const data = [
  { mass: 0, standardQM: 1.0, substrate: 1.0 },
  { mass: 2, standardQM: 0.99, substrate: 0.99 },
  { mass: 4, standardQM: 0.98, substrate: 0.98 },
  { mass: 6, standardQM: 0.97, substrate: 0.97 },
  { mass: 8, standardQM: 0.96, substrate: 0.96 },
  { mass: 10, standardQM: 0.95, substrate: 0.95 },
  { mass: 12, standardQM: 0.94, substrate: 0.94 },
  { mass: 14, standardQM: 0.93, substrate: 0.93 },
  { mass: 16, standardQM: 0.92, substrate: 0.92 },
  { mass: 18, standardQM: 0.91, substrate: 0.90 },
  { mass: 20, standardQM: 0.90, substrate: 0.85 },
  { mass: 21, standardQM: 0.89, substrate: 0.70 },
  { mass: 21.5, standardQM: 0.885, substrate: 0.45 },
  { mass: 21.8, standardQM: 0.882, substrate: 0.15 },
  { mass: 22, standardQM: 0.88, substrate: 0.0 },
  { mass: 24, standardQM: 0.86, substrate: 0.0 },
  { mass: 26, standardQM: 0.84, substrate: 0.0 },
  { mass: 28, standardQM: 0.82, substrate: 0.0 },
  { mass: 30, standardQM: 0.80, substrate: 0.0 },
];

export const VirtualExperimentChart: React.FC = () => {
  return (
    <div className="w-full h-80 mt-8 bg-black/20 p-4 rounded-xl border border-white/5">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis 
            dataKey="mass" 
            stroke="#888" 
            tick={{ fill: '#888' }}
            label={{ value: 'Mass (µg)', position: 'bottom', fill: '#888' }}
          />
          <YAxis 
            stroke="#888" 
            tick={{ fill: '#888' }}
            domain={[0, 1]}
            label={{ value: 'Fringe Visibility', angle: -90, position: 'insideLeft', fill: '#888' }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Legend verticalAlign="top" height={36} />
          <ReferenceLine x={22} stroke="#ef4444" strokeDasharray="3 3" label={{ value: 'Sherer Limit (22µg)', fill: '#ef4444', position: 'insideTopRight' }} />
          <Line 
            type="monotone" 
            dataKey="standardQM" 
            name="Standard QM" 
            stroke="#6b7280" 
            strokeWidth={2} 
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="substrate" 
            name="Substrate Mechanics" 
            stroke="#06b6d4" 
            strokeWidth={3} 
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
