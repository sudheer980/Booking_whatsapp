interface StatusBadgeProps {
  status: string;
  type?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

export default function StatusBadge({ status, type = 'default' }: StatusBadgeProps) {
  const typeClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeClasses[type]}`}>
      {status}
    </span>
  );
}
