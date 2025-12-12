import { MessageCircle, HelpCircle, Mail, Phone, FileText } from 'lucide-react';
import Button from '../components/common/Button';

export default function VendorSupport() {
  const faqs = [
    {
      question: 'How do I add new products?',
      answer: 'Navigate to the Products tab and click the "Add Product" button. Fill in the required details and click save.',
    },
    {
      question: 'When will I receive my payouts?',
      answer: 'Payouts are processed bi-weekly. You can request a payout once your available balance reaches $50.',
    },
    {
      question: 'What is the commission rate?',
      answer: 'The platform charges a 10% commission on all sales. This covers payment processing and platform maintenance.',
    },
    {
      question: 'How do I handle returns?',
      answer: 'Returns can be processed through the Orders tab. Click on the order and select "Process Return".',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-600 mt-1">Get assistance and find answers to your questions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
          <p className="text-sm text-gray-600 mb-4">support@sparkgenx.com</p>
          <Button variant="secondary" size="sm" fullWidth>
            Send Email
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
          <p className="text-sm text-gray-600 mb-4">+1 (555) 123-4567</p>
          <Button variant="secondary" size="sm" fullWidth>
            Call Now
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
            <MessageCircle className="w-6 h-6 text-teal-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-sm text-gray-600 mb-4">Available 24/7</p>
          <Button variant="secondary" size="sm" fullWidth>
            Start Chat
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Documentation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="#"
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <FileText className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-gray-900">Getting Started Guide</p>
              <p className="text-sm text-gray-500">Learn the basics</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <FileText className="w-5 h-5 text-emerald-600" />
            <div>
              <p className="font-medium text-gray-900">Product Management</p>
              <p className="text-sm text-gray-500">Add and manage products</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <FileText className="w-5 h-5 text-orange-600" />
            <div>
              <p className="font-medium text-gray-900">Order Processing</p>
              <p className="text-sm text-gray-500">Handle orders efficiently</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <FileText className="w-5 h-5 text-teal-600" />
            <div>
              <p className="font-medium text-gray-900">Payment & Payouts</p>
              <p className="text-sm text-gray-500">Understand earnings</p>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
        <p className="mb-6 text-green-100">
          Our support team is here to assist you with any questions or issues.
        </p>
        <Button variant="secondary">Contact Support Team</Button>
      </div>
    </div>
  );
}
