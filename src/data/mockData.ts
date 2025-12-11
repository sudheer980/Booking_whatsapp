export const mockCategories = [
  { id: 1, name: 'Electronics', shops: 15, status: 'Active', image: '📱' },
  { id: 2, name: 'Fashion', shops: 32, status: 'Active', image: '👗' },
  { id: 3, name: 'Home & Garden', shops: 18, status: 'Active', image: '🏡' },
  { id: 4, name: 'Sports', shops: 12, status: 'Active', image: '⚽' },
  { id: 5, name: 'Books', shops: 8, status: 'Active', image: '📚' },
];

export const mockVendors = [
  { id: 1, name: 'John Smith', phone: '+1234567890', email: 'john@shop.com', category: 'Electronics', shop: 'TechHub Store', status: 'Active', totalSales: '$45,230' },
  { id: 2, name: 'Sarah Johnson', phone: '+1234567891', email: 'sarah@fashion.com', category: 'Fashion', shop: 'Fashion Avenue', status: 'Active', totalSales: '$78,500' },
  { id: 3, name: 'Mike Brown', phone: '+1234567892', email: 'mike@sports.com', category: 'Sports', shop: 'SportsPro', status: 'Active', totalSales: '$32,100' },
  { id: 4, name: 'Emily Davis', phone: '+1234567893', email: 'emily@home.com', category: 'Home & Garden', shop: 'Home Essentials', status: 'Inactive', totalSales: '$21,450' },
  { id: 5, name: 'David Wilson', phone: '+1234567894', email: 'david@books.com', category: 'Books', shop: 'BookWorld', status: 'Active', totalSales: '$15,800' },
];

export const mockShops = [
  { id: 1, logo: '🏪', name: 'TechHub Store', category: 'Electronics', vendor: 'John Smith', products: 145, orders: 523, status: 'Active' },
  { id: 2, logo: '👔', name: 'Fashion Avenue', category: 'Fashion', vendor: 'Sarah Johnson', products: 298, orders: 1245, status: 'Active' },
  { id: 3, logo: '🏃', name: 'SportsPro', category: 'Sports', vendor: 'Mike Brown', products: 87, orders: 342, status: 'Active' },
  { id: 4, logo: '🏠', name: 'Home Essentials', category: 'Home & Garden', vendor: 'Emily Davis', products: 156, orders: 234, status: 'Inactive' },
  { id: 5, logo: '📖', name: 'BookWorld', category: 'Books', vendor: 'David Wilson', products: 432, orders: 567, status: 'Active' },
];

export const mockProducts = [
  { id: 1, image: '📱', name: 'iPhone 15 Pro', shop: 'TechHub Store', category: 'Electronics', priceRange: '$999 - $1,199', stock: 45, status: 'Active' },
  { id: 2, image: '💻', name: 'MacBook Air M2', shop: 'TechHub Store', category: 'Electronics', priceRange: '$1,199 - $1,499', stock: 23, status: 'Active' },
  { id: 3, image: '👗', name: 'Summer Dress', shop: 'Fashion Avenue', category: 'Fashion', priceRange: '$49 - $89', stock: 156, status: 'Active' },
  { id: 4, image: '👟', name: 'Running Shoes', shop: 'SportsPro', category: 'Sports', priceRange: '$79 - $149', stock: 89, status: 'Active' },
  { id: 5, image: '🛋️', name: 'Modern Sofa', shop: 'Home Essentials', category: 'Home & Garden', priceRange: '$599 - $899', stock: 12, status: 'Low Stock' },
];

export const mockOrders = [
  { id: 'ORD-001', customer: 'Alice Cooper', shop: 'TechHub Store', total: '$1,199', paymentStatus: 'Paid', orderStatus: 'Delivered', date: '2024-03-15' },
  { id: 'ORD-002', customer: 'Bob Martin', shop: 'Fashion Avenue', total: '$249', paymentStatus: 'Paid', orderStatus: 'Shipped', date: '2024-03-14' },
  { id: 'ORD-003', customer: 'Carol White', shop: 'SportsPro', total: '$149', paymentStatus: 'Pending', orderStatus: 'Processing', date: '2024-03-14' },
  { id: 'ORD-004', customer: 'Dan Brown', shop: 'Home Essentials', total: '$899', paymentStatus: 'Paid', orderStatus: 'Processing', date: '2024-03-13' },
  { id: 'ORD-005', customer: 'Eve Johnson', shop: 'BookWorld', total: '$79', paymentStatus: 'Paid', orderStatus: 'Delivered', date: '2024-03-13' },
];

export const mockCustomers = [
  { id: 1, name: 'Alice Cooper', phone: '+1234567895', email: 'alice@email.com', totalOrders: 15, totalSpent: '$4,523', lastOrder: '2024-03-15' },
  { id: 2, name: 'Bob Martin', phone: '+1234567896', email: 'bob@email.com', totalOrders: 8, totalSpent: '$1,250', lastOrder: '2024-03-14' },
  { id: 3, name: 'Carol White', phone: '+1234567897', email: 'carol@email.com', totalOrders: 23, totalSpent: '$8,950', lastOrder: '2024-03-14' },
  { id: 4, name: 'Dan Brown', phone: '+1234567898', email: 'dan@email.com', totalOrders: 5, totalSpent: '$2,340', lastOrder: '2024-03-13' },
  { id: 5, name: 'Eve Johnson', phone: '+1234567899', email: 'eve@email.com', totalOrders: 12, totalSpent: '$3,120', lastOrder: '2024-03-13' },
];

export const mockPayouts = [
  { id: 1, vendor: 'John Smith', shop: 'TechHub Store', totalEarnings: '$45,230', commission: '$4,523', netPayout: '$40,707', status: 'Pending', lastPayout: '2024-02-28' },
  { id: 2, vendor: 'Sarah Johnson', shop: 'Fashion Avenue', totalEarnings: '$78,500', commission: '$7,850', netPayout: '$70,650', status: 'Processed', lastPayout: '2024-03-01' },
  { id: 3, vendor: 'Mike Brown', shop: 'SportsPro', totalEarnings: '$32,100', commission: '$3,210', netPayout: '$28,890', status: 'Pending', lastPayout: '2024-02-28' },
  { id: 4, vendor: 'Emily Davis', shop: 'Home Essentials', totalEarnings: '$21,450', commission: '$2,145', netPayout: '$19,305', status: 'Processed', lastPayout: '2024-03-01' },
  { id: 5, vendor: 'David Wilson', shop: 'BookWorld', totalEarnings: '$15,800', commission: '$1,580', netPayout: '$14,220', status: 'Pending', lastPayout: '2024-02-28' },
];

export const mockNotifications = [
  { id: 1, type: 'order', title: 'New Order Placed', message: 'Order #ORD-001 placed by Alice Cooper', time: '5 minutes ago', read: false },
  { id: 2, type: 'vendor', title: 'New Vendor Registration', message: 'John Smith registered as a vendor', time: '2 hours ago', read: false },
  { id: 3, type: 'stock', title: 'Low Stock Alert', message: 'Modern Sofa is running low on stock (12 units)', time: '5 hours ago', read: true },
  { id: 4, type: 'refund', title: 'Refund Requested', message: 'Customer Bob Martin requested refund for order #ORD-045', time: '1 day ago', read: true },
  { id: 5, type: 'system', title: 'System Update', message: 'System maintenance scheduled for tonight', time: '2 days ago', read: true },
];

export const mockActivityLogs = [
  { id: 1, admin: 'Super Admin', action: 'Updated product details', entity: 'Product #145', timestamp: '2024-03-15 10:30 AM' },
  { id: 2, admin: 'Super Admin', action: 'Approved vendor registration', entity: 'Vendor #12', timestamp: '2024-03-15 09:15 AM' },
  { id: 3, admin: 'Super Admin', action: 'Changed order status', entity: 'Order #ORD-001', timestamp: '2024-03-14 04:20 PM' },
  { id: 4, admin: 'Super Admin', action: 'Added new category', entity: 'Category: Electronics', timestamp: '2024-03-14 02:45 PM' },
  { id: 5, admin: 'Super Admin', action: 'Processed payout', entity: 'Payout #89', timestamp: '2024-03-13 11:00 AM' },
];

export const mockSalesData = [
  { label: 'Jan', value: 12500 },
  { label: 'Feb', value: 18750 },
  { label: 'Mar', value: 22300 },
  { label: 'Apr', value: 19800 },
  { label: 'May', value: 25600 },
  { label: 'Jun', value: 31200 },
];

export const mockOrdersData = [
  { label: 'Jan', value: 145 },
  { label: 'Feb', value: 198 },
  { label: 'Mar', value: 234 },
  { label: 'Apr', value: 267 },
  { label: 'May', value: 312 },
  { label: 'Jun', value: 389 },
];

export const mockCategoryRevenue = [
  { label: 'Electronics', value: 45230, color: '#3b82f6' },
  { label: 'Fashion', value: 78500, color: '#ec4899' },
  { label: 'Sports', value: 32100, color: '#f59e0b' },
  { label: 'Home & Garden', value: 21450, color: '#10b981' },
  { label: 'Books', value: 15800, color: '#8b5cf6' },
];
