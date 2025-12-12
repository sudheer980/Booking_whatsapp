import { DollarSign, CreditCard, Clock } from 'lucide-react';
import Button from '../components/common/Button';

export default function VendorPayouts() {
  const payouts = [
    { id: 'PAY-001', date: '2024-03-15', amount: '$3,250', status: 'paid', method: 'Bank Transfer' },
    { id: 'PAY-002', date: '2024-03-01', amount: '$2,890', status: 'paid', method: 'Bank Transfer' },
    { id: 'PAY-003', date: '2024-02-15', amount: '$3,120', status: 'paid', method: 'Bank Transfer' },
    { id: 'PAY-004', date: '2024-02-01', amount: '$2,567', status: 'paid', method: 'Bank Transfer' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Payouts</h1>
        <p className="text-gray-600 mt-1">Manage your payout history and settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">Available Balance</p>
              <h3 className="text-2xl font-bold text-gray-900">$4,580</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <Button variant="primary" size="sm" fullWidth className="mt-4">
            Request Payout
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">Pending Payout</p>
              <h3 className="text-2xl font-bold text-gray-900">$1,230</h3>
            </div>
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">Processing in 2-3 business days</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">Total Paid Out</p>
              <h3 className="text-2xl font-bold text-gray-900">$38,420</h3>
            </div>
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <p className="text-xs text-green-600 mt-4">+15.3% from last month</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payout History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Payout ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Method</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {payouts.map((payout) => (
                <tr key={payout.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{payout.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payout.date}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{payout.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payout.method}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {payout.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Payout Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Bank Name</label>
            <input
              type="text"
              defaultValue="Chase Bank"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Account Number</label>
              <input
                type="text"
                defaultValue="****6789"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Routing Number</label>
              <input
                type="text"
                defaultValue="****4321"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="primary">Update Settings</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
