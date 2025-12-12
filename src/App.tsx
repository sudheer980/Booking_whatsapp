import { useState } from 'react';
import Layout from './components/layout/Layout';
import VendorLayout from './components/vendor/VendorLayout';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import VendorLogin from './pages/VendorLogin';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Vendors from './pages/Vendors';
import Shops from './pages/Shops';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';
import Payouts from './pages/Payouts';
import Customers from './pages/Customers';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import ActivityLogs from './pages/ActivityLogs';
import VendorDashboard from './pages/VendorDashboard';
import VendorShop from './pages/VendorShop';
import VendorProducts from './pages/VendorProducts';
import VendorOrders from './pages/VendorOrders';
import VendorEarnings from './pages/VendorEarnings';
import VendorPayouts from './pages/VendorPayouts';
import VendorSettings from './pages/VendorSettings';
import VendorSupport from './pages/VendorSupport';

type AppView = 'landing' | 'admin-login' | 'vendor-login' | 'admin' | 'vendor';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleAdminLogin = () => {
    setCurrentView('admin');
    setCurrentPage('dashboard');
  };

  const handleVendorLogin = () => {
    setCurrentView('vendor');
    setCurrentPage('vendor-dashboard');
  };

  const handleLogout = () => {
    setCurrentView('landing');
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderAdminPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'categories':
        return <Categories />;
      case 'vendors':
        return <Vendors />;
      case 'shops':
        return <Shops />;
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;
      case 'customers':
        return <Customers />;
      case 'analytics':
        return <Analytics />;
      case 'payouts':
        return <Payouts />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      case 'activity-logs':
        return <ActivityLogs />;
      default:
        return <Dashboard />;
    }
  };

  const renderVendorPage = () => {
    switch (currentPage) {
      case 'vendor-dashboard':
        return <VendorDashboard />;
      case 'vendor-shop':
        return <VendorShop />;
      case 'vendor-products':
        return <VendorProducts />;
      case 'vendor-orders':
        return <VendorOrders />;
      case 'vendor-earnings':
        return <VendorEarnings />;
      case 'vendor-payouts':
        return <VendorPayouts />;
      case 'vendor-settings':
        return <VendorSettings />;
      case 'vendor-support':
        return <VendorSupport />;
      default:
        return <VendorDashboard />;
    }
  };

  if (currentView === 'landing') {
    return (
      <LandingPage
        onNavigateAdmin={() => setCurrentView('admin-login')}
        onNavigateVendor={() => setCurrentView('vendor-login')}
      />
    );
  }

  if (currentView === 'admin-login') {
    return <Login onLogin={handleAdminLogin} onBack={() => setCurrentView('landing')} />;
  }

  if (currentView === 'vendor-login') {
    return (
      <VendorLogin
        onLogin={handleVendorLogin}
        onBack={() => setCurrentView('landing')}
      />
    );
  }

  if (currentView === 'admin') {
    return (
      <Layout
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      >
        {renderAdminPage()}
      </Layout>
    );
  }

  if (currentView === 'vendor') {
    return (
      <VendorLayout
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      >
        {renderVendorPage()}
      </VendorLayout>
    );
  }

  return null;
}

export default App;
