import { useState } from 'react';
import { Bell, ShoppingBag, Users, Package, AlertTriangle, Settings, Trash2 } from 'lucide-react';
import Button from '../components/common/Button';
import { mockNotifications } from '../data/mockData';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  const getIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <ShoppingBag className="w-5 h-5" />;
      case 'vendor':
        return <Users className="w-5 h-5" />;
      case 'stock':
        return <Package className="w-5 h-5" />;
      case 'refund':
        return <AlertTriangle className="w-5 h-5" />;
      case 'system':
        return <Settings className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'order':
        return 'bg-blue-100 text-blue-600';
      case 'vendor':
        return 'bg-emerald-100 text-emerald-600';
      case 'stock':
        return 'bg-orange-100 text-orange-600';
      case 'refund':
        return 'bg-red-100 text-red-600';
      case 'system':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'system', label: 'System' },
    { id: 'vendors', label: 'Vendors' },
    { id: 'orders', label: 'Orders' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications Center</h1>
          <p className="text-gray-600">Stay updated with all platform activities</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">Mark All Read</Button>
          <Button variant="danger" icon={Trash2}>Clear All</Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200 px-6">
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {mockNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 transition-colors ${
                !notification.read ? 'bg-emerald-50/30' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconColor(notification.type)}`}>
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    )}
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
