import { useState } from 'react';
import { Eye } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import { mockOrders } from '../data/mockData';

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { key: 'id', label: 'Order ID' },
    { key: 'customer', label: 'Customer' },
    { key: 'shop', label: 'Shop' },
    { key: 'total', label: 'Total' },
    {
      key: 'paymentStatus',
      label: 'Payment',
      render: (value: string) => (
        <StatusBadge
          status={value}
          type={value === 'Paid' ? 'success' : 'warning'}
        />
      ),
    },
    {
      key: 'orderStatus',
      label: 'Order Status',
      render: (value: string) => {
        const statusMap: { [key: string]: 'success' | 'warning' | 'info' } = {
          'Delivered': 'success',
          'Shipped': 'info',
          'Processing': 'warning',
        };
        return <StatusBadge status={value} type={statusMap[value] || 'default'} />;
      },
    },
    { key: 'date', label: 'Date' },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <Eye className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Orders Management</h1>
        <p className="text-gray-600">View and manage all orders in your marketplace</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              placeholder="Search orders..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Status</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Sports</option>
          </select>
          <input
            type="date"
            className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <DataTable columns={columns} data={mockOrders} />
      </div>
    </div>
  );
}
