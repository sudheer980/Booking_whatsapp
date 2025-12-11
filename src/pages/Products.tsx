import { useState } from 'react';
import { Edit } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import { mockProducts } from '../data/mockData';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      key: 'image',
      label: 'Product',
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
            {value}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{row.name}</p>
            <p className="text-xs text-gray-500">{row.shop}</p>
          </div>
        </div>
      ),
    },
    { key: 'category', label: 'Category' },
    { key: 'priceRange', label: 'Price Range' },
    { key: 'stock', label: 'Stock' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <StatusBadge
          status={value}
          type={value === 'Active' ? 'success' : value === 'Low Stock' ? 'warning' : 'danger'}
        />
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Products Management</h1>
        <p className="text-gray-600">View and manage all products across all shops</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              placeholder="Search products..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Sports</option>
            <option>Home & Garden</option>
            <option>Books</option>
          </select>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Shops</option>
            <option>TechHub Store</option>
            <option>Fashion Avenue</option>
            <option>SportsPro</option>
          </select>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        <DataTable columns={columns} data={mockProducts} />
      </div>
    </div>
  );
}
