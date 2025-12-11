import { Search, Bell, User, LogOut, Menu } from 'lucide-react';

interface NavbarProps {
  onLogout: () => void;
  onOpenMobileMenu?: () => void;
}

export default function Navbar({ onLogout, onOpenMobileMenu }: NavbarProps) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-0 lg:left-64 z-10 shadow-sm">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-xl"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex-1 max-w-xl hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search orders, products, vendors..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          <button className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-xl transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">Admin User</p>
              <p className="text-gray-500 text-xs">Super Admin</p>
            </div>
          </div>

          <div className="md:hidden w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-white" />
          </div>

          <button
            onClick={onLogout}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
