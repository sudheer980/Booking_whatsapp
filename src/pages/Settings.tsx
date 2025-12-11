import { useState } from 'react';
import { MessageSquare, CreditCard, User, Palette, DollarSign, HelpCircle } from 'lucide-react';
import Button from '../components/common/Button';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('whatsapp');

  const tabs = [
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
    { id: 'payment', label: 'Payment Gateway', icon: CreditCard },
    { id: 'profile', label: 'Admin Profile', icon: User },
    { id: 'branding', label: 'Branding', icon: Palette },
    { id: 'commission', label: 'Commission', icon: DollarSign },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">System Settings</h1>
        <p className="text-gray-600">Configure platform settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <div className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {activeTab === 'whatsapp' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">WhatsApp Settings</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp Business Number
                </label>
                <input
                  type="tel"
                  placeholder="+1234567890"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  API Key
                </label>
                <input
                  type="text"
                  placeholder="Enter API key"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded" />
                  <span className="text-sm font-medium text-gray-700">Enable order notifications via WhatsApp</span>
                </label>
              </div>
              <Button>Save Settings</Button>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Payment Gateway Settings</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Provider
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Stripe</option>
                  <option>PayPal</option>
                  <option>Square</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  API Key
                </label>
                <input
                  type="text"
                  placeholder="Enter API key"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Secret Key
                </label>
                <input
                  type="password"
                  placeholder="Enter secret key"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <Button>Save Settings</Button>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Admin Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Admin User"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="admin@vendorhub.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Change Password
                </label>
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <Button>Update Profile</Button>
            </div>
          )}

          {activeTab === 'branding' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Platform Branding</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Platform Name
                </label>
                <input
                  type="text"
                  defaultValue="VendorHub"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Logo Upload
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
                  <p className="text-gray-600">Click to upload logo</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Primary Color
                </label>
                <input
                  type="color"
                  defaultValue="#10b981"
                  className="w-full h-12 border border-gray-200 rounded-xl cursor-pointer"
                />
              </div>
              <Button>Save Branding</Button>
            </div>
          )}

          {activeTab === 'commission' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Commission Configuration</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Default Commission Rate (%)
                </label>
                <input
                  type="number"
                  defaultValue="10"
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category-Specific Rates
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="w-32 text-sm font-medium text-gray-700">Electronics</span>
                    <input
                      type="number"
                      defaultValue="12"
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-600">%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-32 text-sm font-medium text-gray-700">Fashion</span>
                    <input
                      type="number"
                      defaultValue="8"
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-600">%</span>
                  </div>
                </div>
              </div>
              <Button>Save Commission Settings</Button>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Support Information</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Support Email
                </label>
                <input
                  type="email"
                  defaultValue="support@vendorhub.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Support Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+1234567890"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Support Hours
                </label>
                <textarea
                  defaultValue="Monday - Friday: 9:00 AM - 6:00 PM&#10;Saturday: 10:00 AM - 4:00 PM&#10;Sunday: Closed"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <Button>Save Support Info</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
