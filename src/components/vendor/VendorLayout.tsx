import { ReactNode, useState } from 'react';
import { Home, Store, Package, ShoppingBag, DollarSign, TrendingUp, Settings, HelpCircle, Menu, X, User, LogOut, Bell } from 'lucide-react';

interface VendorLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export default function VendorLayout({ children, currentPage, onNavigate, onLogout }: VendorLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'vendor-dashboard', label: 'Dashboard', icon: Home },
    { id: 'vendor-shop', label: 'Shop Profile', icon: Store },
    { id: 'vendor-products', label: 'Products', icon: Package },
    { id: 'vendor-orders', label: 'Orders', icon: ShoppingBag },
    { id: 'vendor-earnings', label: 'Earnings', icon: TrendingUp },
    { id: 'vendor-payouts', label: 'Payouts', icon: DollarSign },
    { id: 'vendor-settings', label: 'Settings', icon: Settings },
    { id: 'vendor-support', label: 'Help & Support', icon: HelpCircle },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className={`h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0 overflow-y-auto shadow-lg z-50 transform transition-transform duration-300 lg:transform-none ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-blue-500 to-blue-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Store className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">SparkGenX</h1>
                <p className="text-xs text-blue-100">Vendor Portal</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Navbar */}
      <div className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-0 lg:left-64 z-10 shadow-sm">
        <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-xl"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1"></div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-xl">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

            <div className="hidden md:flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">John Smith</p>
                <p className="text-gray-500 text-xs">Tech Haven</p>
              </div>
            </div>

            <div className="md:hidden w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-5 h-5 text-white" />
            </div>

            <button
              onClick={onLogout}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16">
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
