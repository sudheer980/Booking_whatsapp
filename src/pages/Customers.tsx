import { useState } from 'react';
import { Eye } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import DataTable from '../components/common/DataTable';
import { mockCustomers } from '../data/mockData';

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      key: 'name',
      label: 'Customer',
      render: (value: string, row: any) => (
        <div>
          <p className="font-semibold text-gray-900">{value}</p>
          <p className="text-xs text-gray-500">{row.email}</p>
        </div>
      ),
    },
    { key: 'phone', label: 'Phone' },
    { key: 'totalOrders', label: 'Total Orders' },
    { key: 'totalSpent', label: 'Total Spent' },
    { key: 'lastOrder', label: 'Last Order' },
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customers</h1>
        <p className="text-gray-600">View and manage customer information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Total Customers</p>
          <h3 className="text-2xl font-bold text-gray-900">8,234</h3>
          <p className="text-xs text-emerald-600 mt-2">+245 this month</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Active Customers</p>
          <h3 className="text-2xl font-bold text-emerald-600">5,892</h3>
          <p className="text-xs text-gray-500 mt-2">Last 30 days</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Avg Order Value</p>
          <h3 className="text-2xl font-bold text-blue-600">$124.98</h3>
          <p className="text-xs text-emerald-600 mt-2">+12.5% vs last month</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Repeat Rate</p>
          <h3 className="text-2xl font-bold text-purple-600">68.5%</h3>
          <p className="text-xs text-emerald-600 mt-2">+5.2% vs last month</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              placeholder="Search customers..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Customers</option>
            <option>High Value</option>
            <option>Recent</option>
            <option>Inactive</option>
          </select>
        </div>

        <DataTable columns={columns} data={mockCustomers} />
      </div>
    </div>
  );
}
