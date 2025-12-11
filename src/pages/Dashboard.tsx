import { DollarSign, ShoppingBag, Users, Store, TrendingUp, Package } from 'lucide-react';
import KPICard from '../components/common/KPICard';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import { mockSalesData, mockOrdersData, mockCategoryRevenue, mockOrders, mockVendors, mockProducts } from '../data/mockData';

export default function Dashboard() {
  const orderColumns = [
    { key: 'id', label: 'Order ID' },
    { key: 'customer', label: 'Customer' },
    { key: 'shop', label: 'Shop' },
    { key: 'total', label: 'Total' },
    {
      key: 'orderStatus',
      label: 'Status',
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
  ];

  const vendorColumns = [
    { key: 'name', label: 'Vendor Name' },
    { key: 'shop', label: 'Shop' },
    { key: 'category', label: 'Category' },
    { key: 'totalSales', label: 'Total Sales' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <StatusBadge status={value} type={value === 'Active' ? 'success' : 'danger'} />
      ),
    },
  ];

  const productColumns = [
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
    { key: 'stock', label: 'Stock' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <StatusBadge status={value} type={value === 'Active' ? 'success' : 'warning'} />
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your marketplace today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard
          title="Total Sales"
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
          title="Total Customers"
          value="8,234"
          icon={Users}
          color="purple"
          trend={{ value: 5.7, isPositive: true }}
        />
        <KPICard
          title="Total Vendors"
          value="87"
          icon={Store}
          color="orange"
          trend={{ value: 15.2, isPositive: true }}
        />
        <KPICard
          title="Commission Earned"
          value="$19,308"
          icon={TrendingUp}
          color="green"
          trend={{ value: 10.1, isPositive: true }}
        />
        <KPICard
          title="Active Products"
          value="2,847"
          icon={Package}
          color="blue"
          trend={{ value: 3.2, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LineChart data={mockSalesData} title="Sales Overview (Last 6 Months)" color="#10b981" />
        <BarChart data={mockOrdersData} title="Orders Trend (Last 6 Months)" color="#3b82f6" />
      </div>

      <div>
        <PieChart data={mockCategoryRevenue} title="Revenue by Category" />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
          <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
            View All
          </button>
        </div>
        <DataTable columns={orderColumns} data={mockOrders.slice(0, 5)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">New Vendors</h2>
            <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
              View All
            </button>
          </div>
          <DataTable columns={vendorColumns} data={mockVendors.slice(0, 3)} />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Low Stock Products</h2>
            <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
              View All
            </button>
          </div>
          <DataTable columns={productColumns} data={mockProducts.filter(p => p.status === 'Low Stock')} />
        </div>
      </div>
    </div>
  );
}
