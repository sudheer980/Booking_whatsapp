import { useState } from 'react';
import { Mail, Lock, Store } from 'lucide-react';
import Button from '../components/common/Button';

interface VendorLoginProps {
  onLogin: () => void;
  onBack: () => void;
}

export default function VendorLogin({ onLogin, onBack }: VendorLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <button
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-green-700 rounded-2xl font-semibold hover:bg-white shadow-lg hover:shadow-xl transition-all z-10"
      >
        <Store className="w-5 h-5" />
        <span className="hidden sm:inline">Back to Home</span>
      </button>

      <div className="relative w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block text-white">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl"
                style={{ boxShadow: '0 0 30px rgba(37, 211, 102, 0.5)' }}>
                <Store className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">SparkGenX</h1>
                <p className="text-green-100">Vendor Portal</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Grow Your Business with Us
            </h2>
            <p className="text-lg text-green-100 mb-6">
              Manage your shop, products, orders, and track your earnings all in one place.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">✓</div>
                <span>Easy Product Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">✓</div>
                <span>Real-time Order Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">✓</div>
                <span>Automated Payouts</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Vendor Login</h2>
            <p className="text-gray-600">Sign in to your vendor dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vendor@sparkgenx.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm font-medium text-green-600 hover:text-green-700">
                Forgot Password?
              </button>
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Sign In
            </Button>
          </form>

          <div className="mt-6 space-y-3">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Demo credentials: <span className="font-semibold text-green-600">vendor@sparkgenx.com / vendor123</span>
              </p>
            </div>
            <button
              onClick={onBack}
              className="w-full text-center text-sm text-gray-600 hover:text-gray-900"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
