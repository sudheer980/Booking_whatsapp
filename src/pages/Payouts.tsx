import { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import Button from '../components/common/Button';
import SearchBar from '../components/common/SearchBar';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import { mockPayouts } from '../data/mockData';

export default function Payouts() {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { key: 'vendor', label: 'Vendor' },
    { key: 'shop', label: 'Shop' },
    { key: 'totalEarnings', label: 'Total Earnings' },
    { key: 'commission', label: 'Commission (10%)' },
    { key: 'netPayout', label: 'Net Payout' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <StatusBadge
          status={value}
          type={value === 'Processed' ? 'success' : 'warning'}
        />
      ),
    },
    { key: 'lastPayout', label: 'Last Payout' },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg hover:from-emerald-600 hover:to-green-700">
            Process
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payouts & Commission</h1>
          <p className="text-gray-600">Manage vendor payouts and commission tracking</p>
        </div>
        <Button icon={Download} variant="secondary">
          Export CSV
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Total Earnings</p>
          <h3 className="text-2xl font-bold text-gray-900">$193,080</h3>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Commission Earned</p>
          <h3 className="text-2xl font-bold text-emerald-600">$19,308</h3>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Pending Payouts</p>
          <h3 className="text-2xl font-bold text-orange-600">$98,467</h3>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm font-medium text-gray-600 mb-2">Processed This Month</p>
          <h3 className="text-2xl font-bold text-blue-600">$75,305</h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              placeholder="Search vendors or shops..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Status</option>
            <option>Pending</option>
            <option>Processed</option>
          </select>
        </div>

        <DataTable columns={columns} data={mockPayouts} />
      </div>
    </div>
  );
}
