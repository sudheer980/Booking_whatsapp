import { DollarSign, ShoppingCart, TrendingUp, Package } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { vendorStats, vendorSalesData, vendorOrdersData, vendorOrders, vendorProducts } from '../data/vendorMockData';

export default function VendorDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, John! Here's your shop performance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <h3 className="text-2xl font-bold text-gray-900">${(vendorStats.totalSales / 1000).toFixed(1)}K</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-xs text-green-600">+12.5% from last month</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <h3 className="text-2xl font-bold text-gray-900">{vendorStats.totalOrders}</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-green-600">+8.2% from last month</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <h3 className="text-2xl font-bold text-gray-900">${(vendorStats.earningsThisMonth / 1000).toFixed(1)}K</h3>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <p className="text-xs text-green-600">+18.3% from last month</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">Pending Orders</p>
              <h3 className="text-2xl font-bold text-gray-900">{vendorStats.pendingOrders}</h3>
            </div>
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
              <Package className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500">Need attention</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">Commission Paid</p>
              <h3 className="text-2xl font-bold text-gray-900">${(vendorStats.commissionPaid / 1000).toFixed(1)}K</h3>
            </div>
            <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-sky-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500">10% platform fee</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-gray-600">Avg Order Value</p>
              <h3 className="text-2xl font-bold text-gray-900">${vendorStats.averageOrderValue}</h3>
            </div>
            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-teal-600" />
            </div>
          </div>
          <p className="text-xs text-green-600">+5.8% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={vendorSalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Orders Per Day</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vendorOrdersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="orders" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
          <div className="space-y-3">
            {vendorOrders.slice(0, 5).map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-gray-900">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customerName}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{order.total}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    order.orderStatus === 'delivered' ? 'bg-green-100 text-green-800' :
                    order.orderStatus === 'shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.orderStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Low Stock Products</h2>
          <div className="space-y-3">
            {vendorProducts.filter(p => p.status === 'low_stock').map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <p className="font-semibold text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.variants} variants</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">
                  {product.stock} left
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
