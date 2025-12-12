export const vendorShopData = {
  shopId: 1,
  shopName: 'Tech Haven',
  shopLogo: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200',
  businessOwner: 'John Smith',
  email: 'john@techhaven.com',
  phone: '+1234567890',
  address: '123 Tech Street, Silicon Valley, CA 94025',
  description: 'Your one-stop shop for all things tech. We offer the latest gadgets, electronics, and accessories.',
  category: 'Electronics',
  isOpen: true,
  createdAt: '2024-01-15',
};

export const vendorStats = {
  totalSales: 125430,
  totalOrders: 1245,
  earningsThisMonth: 45670,
  pendingOrders: 23,
  commissionPaid: 12543,
  averageOrderValue: 100.74,
};

export const vendorSalesData = [
  { month: 'Jan', sales: 15000 },
  { month: 'Feb', sales: 18000 },
  { month: 'Mar', sales: 16000 },
  { month: 'Apr', sales: 21000 },
  { month: 'May', sales: 19000 },
  { month: 'Jun', sales: 23000 },
];

export const vendorOrdersData = [
  { day: 'Mon', orders: 45 },
  { day: 'Tue', orders: 52 },
  { day: 'Wed', orders: 48 },
  { day: 'Thu', orders: 61 },
  { day: 'Fri', orders: 55 },
  { day: 'Sat', orders: 67 },
  { day: 'Sun', orders: 43 },
];

export const vendorProducts = [
  { id: 1, name: 'Wireless Headphones', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200', variants: 3, priceRange: '$49 - $79', stock: 145, status: 'active' },
  { id: 2, name: 'Smart Watch', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200', variants: 2, priceRange: '$199 - $299', stock: 89, status: 'active' },
  { id: 3, name: 'Bluetooth Speaker', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200', variants: 2, priceRange: '$59 - $129', stock: 12, status: 'low_stock' },
  { id: 4, name: 'USB-C Cable', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200', variants: 1, priceRange: '$12 - $15', stock: 234, status: 'active' },
  { id: 5, name: 'Phone Case', image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=200', variants: 5, priceRange: '$15 - $35', stock: 167, status: 'active' },
];

export const vendorProductsDetailed = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    price: 79.99,
    compare_at_price: 129.99,
    sku: 'WHP-001',
    stock: 145,
    category: 'Electronics',
    images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400'],
    status: 'active' as const,
    created_at: '2024-11-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    description: 'Advanced smartwatch with fitness tracking, heart rate monitor, and GPS.',
    price: 299.99,
    compare_at_price: 399.99,
    sku: 'SWU-002',
    stock: 89,
    category: 'Electronics',
    images: ['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400'],
    status: 'active' as const,
    created_at: '2024-11-20T14:20:00Z',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker Mini',
    description: 'Compact portable speaker with powerful bass and waterproof design.',
    price: 59.99,
    sku: 'BSM-003',
    stock: 12,
    category: 'Electronics',
    images: ['https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=400'],
    status: 'active' as const,
    created_at: '2024-11-25T09:15:00Z',
  },
  {
    id: '4',
    name: 'USB-C Fast Charging Cable',
    description: 'Durable braided USB-C cable with fast charging support up to 100W.',
    price: 15.99,
    compare_at_price: 24.99,
    sku: 'UCC-004',
    stock: 234,
    category: 'Electronics',
    images: ['https://images.pexels.com/photos/163403/box-sport-male-nbc-163403.jpeg?auto=compress&cs=tinysrgb&w=400'],
    status: 'active' as const,
    created_at: '2024-12-01T08:00:00Z',
  },
  {
    id: '5',
    name: 'Premium Phone Case',
    description: 'Slim protective case with military-grade drop protection and wireless charging support.',
    price: 29.99,
    sku: 'PPC-005',
    stock: 167,
    category: 'Electronics',
    images: ['https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400'],
    status: 'active' as const,
    created_at: '2024-12-05T11:45:00Z',
  },
  {
    id: '6',
    name: 'Laptop Stand Aluminum',
    description: 'Ergonomic laptop stand with adjustable height and ventilated design.',
    price: 49.99,
    sku: 'LSA-006',
    stock: 78,
    category: 'Home & Garden',
    images: ['https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400'],
    status: 'active' as const,
    created_at: '2024-12-08T13:30:00Z',
  },
];

export const vendorOrders = [
  { id: 'ORD-2024-001', customerName: 'Alice Brown', itemsCount: 2, total: '$249.99', paymentStatus: 'paid', orderStatus: 'delivered', date: '2024-12-10' },
  { id: 'ORD-2024-002', customerName: 'Bob Taylor', itemsCount: 1, total: '$89.50', paymentStatus: 'paid', orderStatus: 'shipped', date: '2024-12-09' },
  { id: 'ORD-2024-003', customerName: 'Carol White', itemsCount: 3, total: '$599.99', paymentStatus: 'pending', orderStatus: 'processing', date: '2024-12-08' },
  { id: 'ORD-2024-004', customerName: 'David Green', itemsCount: 1, total: '$125.00', paymentStatus: 'paid', orderStatus: 'confirmed', date: '2024-12-07' },
  { id: 'ORD-2024-005', customerName: 'Emma Martinez', itemsCount: 2, total: '$75.25', paymentStatus: 'paid', orderStatus: 'delivered', date: '2024-12-06' },
];

export const vendorOrderDetails = {
  id: 'ORD-2024-001',
  customerName: 'Alice Brown',
  customerEmail: 'alice@example.com',
  customerPhone: '+1234560001',
  deliveryAddress: '456 Main Street, Apt 3B, San Francisco, CA 94102',
  items: [
    { id: 1, product: 'Wireless Headphones', variant: 'Black', quantity: 2, price: 49.99, total: 99.98 },
    { id: 2, product: 'USB-C Cable', variant: '6ft', quantity: 1, price: 12.99, total: 12.99 },
  ],
  subtotal: 112.97,
  commission: 11.30,
  vendorEarnings: 101.67,
  date: '2024-12-10',
  paymentStatus: 'paid',
  orderStatus: 'delivered',
};

export const vendorEarningsData = [
  { month: 'Jan', earnings: 13500 },
  { month: 'Feb', earnings: 16200 },
  { month: 'Mar', earnings: 14400 },
  { month: 'Apr', earnings: 18900 },
  { month: 'May', earnings: 17100 },
  { month: 'Jun', earnings: 20700 },
];

export const vendorCategoryBreakdown = [
  { category: 'Headphones', revenue: 45000 },
  { category: 'Watches', revenue: 38000 },
  { category: 'Speakers', revenue: 25000 },
  { category: 'Accessories', revenue: 17000 },
];

export const vendorTopProducts = [
  { name: 'Wireless Headphones', sales: '$45,230', orders: 523 },
  { name: 'Smart Watch', sales: '$38,120', orders: 189 },
  { name: 'Bluetooth Speaker', sales: '$24,890', orders: 312 },
  { name: 'Phone Case', sales: '$17,190', orders: 678 },
];

export const vendorPayouts = [
  { id: 1, payoutId: 'PAY-2024-001', date: '2024-11-30', amount: '$90,000', commission: '$9,000', netPayout: '$81,000', status: 'processed' },
  { id: 2, payoutId: 'PAY-2024-002', date: '2024-10-31', amount: '$85,000', commission: '$8,500', netPayout: '$76,500', status: 'processed' },
  { id: 3, payoutId: 'PAY-2024-003', date: '2024-09-30', amount: '$78,000', commission: '$7,800', netPayout: '$70,200', status: 'processed' },
  { id: 4, payoutId: 'PAY-2024-004', date: 'Pending', amount: '$35,430', commission: '$3,543', netPayout: '$31,887', status: 'pending' },
];

export const vendorSupportTickets = [
  { id: 1, ticketId: 'TKT-001', subject: 'Payment not received', status: 'open', date: '2024-12-08', priority: 'high' },
  { id: 2, ticketId: 'TKT-002', subject: 'How to add variants', status: 'resolved', date: '2024-12-05', priority: 'low' },
  { id: 3, ticketId: 'TKT-003', subject: 'Product approval pending', status: 'in_progress', date: '2024-12-03', priority: 'medium' },
];

export const vendorFAQs = [
  { question: 'How do I add a new product?', answer: 'Navigate to Products > Add Product and fill in the required details including name, description, images, and variants.' },
  { question: 'When will I receive my payout?', answer: 'Payouts are processed monthly on the last day of each month. It may take 3-5 business days to reflect in your account.' },
  { question: 'How is commission calculated?', answer: 'Commission is calculated as a percentage of each order total. The default rate is 10% but may vary by category.' },
  { question: 'Can I modify my shop details?', answer: 'Yes, you can update your shop details anytime from the Shop Profile page.' },
];
