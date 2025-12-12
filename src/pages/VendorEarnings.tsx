import { DollarSign, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { vendorSalesData } from '../data/vendorMockData';

export default function VendorEarnings() {
  const stats = [
    { label: 'Total Earnings', value: '$45,230', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'green' },
    { label: 'This Month', value: '$8,450', change: '+18.3%', trend: 'up', icon: TrendingUp, color: 'emerald' },
    { label: 'Last Month', value: '$7,150', change: '-5.2%', trend: 'down', icon: TrendingDown, color: 'orange' },
    { label: 'Avg. Monthly', value: '$6,890', change: '+8.7%', trend: 'up', icon: Calendar, color: 'teal' },
  ];

  const transactions = [
    { id: 'TXN-001', date: '2024-03-15', amount: '$1,250', type: 'Sale', status: 'completed' },
    { id: 'TXN-002', date: '2024-03-14', amount: '$890', type: 'Sale', status: 'completed' },
    { id: 'TXN-003', date: '2024-03-13', amount: '$2,340', type: 'Sale', status: 'completed' },
    { id: 'TXN-004', date: '2024-03-12', amount: '$567', type: 'Sale', status: 'completed' },
    { id: 'TXN-005', date: '2024-03-11', amount: '$1,890', type: 'Sale', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Earnings</h1>
        <p className="text-gray-600 mt-1">Track your earnings and revenue</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-50 rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
              <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last period
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Earnings Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={vendorSalesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Transaction ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{txn.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{txn.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{txn.type}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">{txn.amount}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
