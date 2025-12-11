import { DollarSign, ShoppingBag, TrendingUp, Package } from 'lucide-react';
import KPICard from '../components/common/KPICard';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import DataTable from '../components/common/DataTable';
import { mockSalesData, mockOrdersData, mockCategoryRevenue, mockProducts, mockShops } from '../data/mockData';

export default function Analytics() {
  const topProductColumns = [
    {
      key: 'image',
      label: 'Product',
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
            {value}
          </div>
          <span className="font-medium">{row.name}</span>
        </div>
      ),
    },
    { key: 'shop', label: 'Shop' },
    { key: 'stock', label: 'Sales' },
    { key: 'priceRange', label: 'Revenue' },
  ];

  const topShopColumns = [
    {
      key: 'logo',
      label: 'Shop',
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center text-xl">
            {value}
          </div>
          <span className="font-medium">{row.name}</span>
        </div>
      ),
    },
    { key: 'vendor', label: 'Vendor' },
    { key: 'orders', label: 'Orders' },
    { key: 'products', label: 'Products' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sales Analytics</h1>
        <p className="text-gray-600">Comprehensive analytics and performance metrics</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="date"
            className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Sports</option>
          </select>
          <select className="px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option>All Shops</option>
            <option>TechHub Store</option>
            <option>Fashion Avenue</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Revenue"
          value="$193,080"
          icon={DollarSign}
          color="green"
          trend={{ value: 12.5, isPositive: true }}
        />
        <KPICard
          title="Total Orders"
          value="1,545"
          icon={ShoppingBag}
          color="blue"
          trend={{ value: 8.3, isPositive: true }}
        />
        <KPICard
          title="Avg Order Value"
          value="$124.98"
          icon={TrendingUp}
          color="purple"
          trend={{ value: 4.2, isPositive: true }}
        />
        <KPICard
          title="Products Sold"
          value="3,421"
          icon={Package}
          color="orange"
          trend={{ value: 7.8, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart data={mockSalesData} title="Revenue Over Time" color="#10b981" />
        <BarChart data={mockOrdersData} title="Orders Over Time" color="#3b82f6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChart data={mockCategoryRevenue} title="Category-wise Revenue" />
        <BarChart
          data={[
            { label: 'TechHub', value: 45230 },
            { label: 'Fashion Ave', value: 78500 },
            { label: 'SportsPro', value: 32100 },
            { label: 'Home Ess', value: 21450 },
          ]}
          title="Shop-wise Revenue"
          color="#ec4899"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">Best-Selling Products</h2>
          </div>
          <DataTable columns={topProductColumns} data={mockProducts.slice(0, 5)} />
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">Top-Performing Shops</h2>
          </div>
          <DataTable columns={topShopColumns} data={mockShops.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}
