import { useState } from 'react';
import { Edit } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import { mockShops } from '../data/mockData';

export default function Shops() {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      key: 'logo',
      label: 'Shop',
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
            {value}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{row.name}</p>
            <p className="text-xs text-gray-500">{row.category}</p>
          </div>
        </div>
      ),
    },
    { key: 'vendor', label: 'Vendor' },
    { key: 'products', label: 'Products' },
    { key: 'orders', label: 'Orders' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <StatusBadge status={value} type={value === 'Active' ? 'success' : 'danger'} />
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <Edit className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shops Management</h1>
        <p className="text-gray-600">View and manage all shops in your marketplace</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              placeholder="Search shops..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Sports</option>
          </select>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <DataTable columns={columns} data={mockShops} />
      </div>
    </div>
  );
}
