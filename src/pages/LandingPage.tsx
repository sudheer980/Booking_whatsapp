import { Store, Users, Package, TrendingUp, Check, Mail, Phone, ArrowRight, Sparkles } from 'lucide-react';
import ScrollToTop from '../components/common/ScrollToTop';

interface LandingPageProps {
  onNavigateAdmin: () => void;
  onNavigateVendor: () => void;
}

export default function LandingPage({ onNavigateAdmin, onNavigateVendor }: LandingPageProps) {
  const registrationSteps = [
    { step: 1, title: 'Vendor Contacts SparkGenX', desc: 'Reach out to us via email or phone', icon: Mail },
    { step: 2, title: 'Admin Verifies & Approves', desc: 'Our team reviews your application', icon: Check },
    { step: 3, title: 'Receive Login Credentials', desc: 'Get access to your vendor dashboard', icon: Users },
    { step: 4, title: 'Setup Shop & Products', desc: 'Configure your shop and add products', icon: Store },
    { step: 5, title: 'Start Receiving Orders', desc: 'Begin selling and earning', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .float-3d {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg); }
        }
        .glow-green {
          box-shadow: 0 0 30px rgba(37, 211, 102, 0.5), 0 0 60px rgba(37, 211, 102, 0.3);
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8 float-3d">
              <div className="relative">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl glow-green transform hover:scale-110 transition-all duration-300"
                  style={{ transform: 'perspective(1000px) rotateY(0deg)' }}>
                  <Store className="w-12 h-12 text-green-600" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-pulse" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                SparkGenX
              </h1>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Welcome to SparkGenX<br />
              <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                Commerce Platform
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              AI-powered multi-vendor management system for shops, products, orders, payouts & analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={onNavigateAdmin}
                className="group relative px-10 py-5 bg-white text-green-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-300 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Admin Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={onNavigateVendor}
                className="group relative px-10 py-5 bg-green-500 text-white rounded-2xl font-bold text-lg shadow-2xl border-4 border-white hover:bg-green-400 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Vendor Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 60C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </div>

      {/* About Section with 3D Cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            About the Platform
          </h2>
          <p className="text-xl text-gray-600">Comprehensive multi-vendor marketplace solution</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border-4 border-green-100 hover:border-green-300"
            style={{
              boxShadow: '0 20px 60px rgba(37, 211, 102, 0.1), 0 0 0 1px rgba(37, 211, 102, 0.05)',
              transform: 'perspective(1000px) rotateY(0deg)',
            }}>
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg glow-green group-hover:rotate-12 transition-transform duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h3>
            <p className="text-gray-600 mb-6 text-lg">Complete control over your marketplace</p>
            <ul className="space-y-4">
              {['Categories Management', 'Business Users', 'Shops Oversight', 'Products Control', 'Orders Processing', 'Analytics & Reports', 'Payouts Management'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 group/item">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border-4 border-emerald-100 hover:border-emerald-300"
            style={{
              boxShadow: '0 20px 60px rgba(16, 185, 129, 0.1), 0 0 0 1px rgba(16, 185, 129, 0.05)',
              transform: 'perspective(1000px) rotateY(0deg)',
            }}>
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg glow-green group-hover:rotate-12 transition-transform duration-300">
              <Store className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Vendor Dashboard</h3>
            <p className="text-gray-600 mb-6 text-lg">Everything vendors need to succeed</p>
            <ul className="space-y-4">
              {['Shop Profile Management', 'Product Listings', 'Order Management', 'Earnings Tracking', 'Payout Requests', 'Performance Analytics', 'Support & Help'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 group/item">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-200 transition-colors">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Vendor Registration Process with 3D Effect */}
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Vendor Registration Process
            </h2>
            <p className="text-xl text-gray-600">Simple steps to start selling on SparkGenX</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {registrationSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="group relative bg-white rounded-3xl shadow-xl p-6 text-center transform hover:scale-110 hover:-translate-y-3 transition-all duration-500"
                  style={{
                    boxShadow: '0 15px 40px rgba(37, 211, 102, 0.15)',
                  }}>
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:glow-green transition-all">
                    <Icon className="w-10 h-10 text-green-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-lg glow-green">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact Section with 3D Card */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 rounded-[3rem] shadow-2xl p-8 sm:p-12 overflow-hidden"
          style={{ boxShadow: '0 25px 50px rgba(37, 211, 102, 0.3)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 opacity-10 rounded-full -ml-48 -mb-48"></div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-green-100 text-lg mb-8">
                Have questions? Want to become a vendor? Contact us today!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm text-green-100">Email</p>
                    <p className="text-xl font-semibold">contact@sparkgenx.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm text-green-100">Phone</p>
                    <p className="text-xl font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 border-2 border-green-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 border-2 border-green-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-4 border-2 border-green-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
                />
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 glow-green">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 to-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg glow-green">
                <Store className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SparkGenX</h3>
                <p className="text-sm text-green-200">Commerce Platform</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-300">© 2025 SparkGenX Innovations Pvt Ltd. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
