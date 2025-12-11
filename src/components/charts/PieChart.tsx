interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: DataPoint[];
  title: string;
}

export default function PieChart({ data, title }: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  const slices = data.map((item) => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;

    const startX = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
    const startY = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
    const endX = 50 + 40 * Math.cos((currentAngle * Math.PI) / 180);
    const endY = 50 + 40 * Math.sin((currentAngle * Math.PI) / 180);
    const largeArc = angle > 180 ? 1 : 0;

    return {
      path: `M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArc} 1 ${endX} ${endY} Z`,
      percentage: percentage.toFixed(1),
      color: item.color,
      label: item.label,
    };
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="flex items-center gap-8">
        <div className="flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-48 h-48 transform -rotate-90">
            {slices.map((slice, index) => (
              <path
                key={index}
                d={slice.path}
                fill={slice.color}
                className="transition-all duration-300 hover:opacity-80"
              />
            ))}
          </svg>
        </div>
        <div className="flex-1 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                {slices[index].percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
