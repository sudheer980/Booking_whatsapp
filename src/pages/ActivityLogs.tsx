import { useState } from 'react';
import { Filter } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import DataTable from '../components/common/DataTable';
import { mockActivityLogs } from '../data/mockData';

export default function ActivityLogs() {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      key: 'admin',
      label: 'Admin',
      render: (value: string) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center text-white font-semibold">
            {value.charAt(0)}
          </div>
          <span className="font-medium text-gray-900">{value}</span>
        </div>
      ),
    },
    { key: 'action', label: 'Action Description' },
    { key: 'entity', label: 'Affected Entity' },
    { key: 'timestamp', label: 'Timestamp' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Activity Logs</h1>
        <p className="text-gray-600">Track all administrative actions and changes</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              placeholder="Search logs..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <input
            type="date"
            className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Admins</option>
            <option>Super Admin</option>
            <option>Admin</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">More Filters</span>
          </button>
        </div>

        <DataTable columns={columns} data={mockActivityLogs} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Total Actions Today</p>
          <h3 className="text-2xl font-bold text-gray-900">47</h3>
          <p className="text-xs text-emerald-600 mt-2">+12 vs yesterday</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Most Active Admin</p>
          <h3 className="text-2xl font-bold text-gray-900">Super Admin</h3>
          <p className="text-xs text-gray-500 mt-2">28 actions today</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Most Common Action</p>
          <h3 className="text-2xl font-bold text-gray-900">Updated</h3>
          <p className="text-xs text-gray-500 mt-2">18 updates today</p>
        </div>
      </div>
    </div>
  );
}
