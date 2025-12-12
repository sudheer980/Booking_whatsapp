import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { vendorProductsDetailed } from '../data/vendorMockData';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  compare_at_price?: number;
  sku: string;
  stock: number;
  category: string;
  images: string[];
  status: 'active' | 'draft' | 'out_of_stock';
  created_at: string;
}

export default function VendorProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    compare_at_price: '',
    sku: '',
    stock: '',
    category: 'Electronics',
    images: '',
    status: 'active' as 'active' | 'draft' | 'out_of_stock',
  });

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports & Outdoors',
    'Beauty & Personal Care',
    'Books & Media',
    'Toys & Games',
    'Food & Beverages',
    'Other',
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setTimeout(() => {
      setProducts(vendorProductsDetailed);
      setLoading(false);
    }, 300);
  };

  const handleAddProduct = () => {
    setIsEditMode(false);
    setFormData({
      id: '',
      name: '',
      description: '',
      price: '',
      compare_at_price: '',
      sku: '',
      stock: '',
      category: 'Electronics',
      images: '',
      status: 'active',
    });
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setIsEditMode(true);
    setFormData({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      compare_at_price: product.compare_at_price?.toString() || '',
      sku: product.sku,
      stock: product.stock.toString(),
      category: product.category,
      images: product.images.join(', '),
      status: product.status,
    });
    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    setProducts(products.filter(p => p.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData: Product = {
      id: isEditMode ? formData.id : Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      compare_at_price: formData.compare_at_price ? parseFloat(formData.compare_at_price) : undefined,
      sku: formData.sku,
      stock: parseInt(formData.stock),
      category: formData.category,
      images: formData.images.split(',').map(url => url.trim()).filter(url => url),
      status: formData.status,
      created_at: new Date().toISOString(),
    };

    if (isEditMode) {
      setProducts(products.map(p => p.id === formData.id ? productData : p));
    } else {
      setProducts([productData, ...products]);
    }

    setIsModalOpen(false);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">Manage your product inventory</p>
        </div>
        <Button onClick={handleAddProduct} variant="primary" icon={Plus}>
          Add Product
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products by name, SKU, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading products...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
          <p className="text-gray-600">
            {searchQuery ? 'No products found matching your search.' : 'No products yet. Add your first product to get started!'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-100 relative">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : product.status === 'draft'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {product.status}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  {product.compare_at_price && (
                    <span className="text-sm text-gray-400 line-through">${product.compare_at_price}</span>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>SKU: {product.sku}</span>
                  <span>Stock: {product.stock}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    onClick={() => handleEditProduct(product)}
                    variant="secondary"
                    size="sm"
                    icon={Edit}
                    fullWidth
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteProduct(product.id)}
                    variant="secondary"
                    size="sm"
                    icon={Trash2}
                    fullWidth
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditMode ? 'Edit Product' : 'Add New Product'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price *
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Compare Price
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.compare_at_price}
                onChange={(e) => setFormData({ ...formData, compare_at_price: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                SKU *
              </label>
              <input
                type="text"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Stock *
              </label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value as 'active' | 'draft' | 'out_of_stock' })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="out_of_stock">Out of Stock</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URLs (comma-separated)
            </label>
            <input
              type="text"
              value={formData.images}
              onChange={(e) => setFormData({ ...formData, images: e.target.value })}
              placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" onClick={() => setIsModalOpen(false)} variant="secondary" fullWidth>
              Cancel
            </Button>
            <Button type="submit" variant="primary" fullWidth>
              {isEditMode ? 'Update Product' : 'Add Product'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
