interface DataPoint {
  label: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
  title: string;
  color?: string;
}

export default function LineChart({ data, title, color = '#10b981' }: LineChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  const chartHeight = 200;
  const chartWidth = 600;
  const padding = 40;

  const points = data.map((point, index) => {
    const x = (index / (data.length - 1)) * (chartWidth - padding * 2) + padding;
    const y = chartHeight - (point.value / maxValue) * (chartHeight - padding * 2) - padding;
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <polygon
          points={`${padding},${chartHeight - padding} ${points} ${chartWidth - padding},${chartHeight - padding}`}
          fill="url(#lineGradient)"
        />

        {data.map((point, index) => {
          const x = (index / (data.length - 1)) * (chartWidth - padding * 2) + padding;
          const y = chartHeight - (point.value / maxValue) * (chartHeight - padding * 2) - padding;
          return (
            <g key={index}>
              <circle cx={x} cy={y} r="5" fill={color} />
              <text
                x={x}
                y={chartHeight - padding + 20}
                textAnchor="middle"
                className="text-xs fill-gray-600"
              >
                {point.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
