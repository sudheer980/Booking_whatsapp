import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import Button from '../components/common/Button';
import SearchBar from '../components/common/SearchBar';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import Modal from '../components/common/Modal';
import { mockCategories } from '../data/mockData';

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    status: 'Active',
  });

  const columns = [
    {
      key: 'image',
      label: 'Category',
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
            {value}
          </div>
          <span className="font-semibold text-gray-900">{row.name}</span>
        </div>
      ),
    },
    { key: 'shops', label: 'Number of Shops' },
    {
      key: 'status',
      label: 'Status',
      render: (value: string) => (
        <StatusBadge status={value} type={value === 'Active' ? 'success' : 'danger'} />
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setFormData({ name: '', status: 'Active' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Categories Management</h1>
          <p className="text-gray-600">Manage all product categories in your marketplace</p>
        </div>
        <Button icon={Plus} onClick={() => setIsModalOpen(true)}>
          Add Category
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar
              placeholder="Search categories..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </div>
        </div>

        <DataTable columns={columns} data={mockCategories} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Category"
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter category name"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category Icon
            </label>
            <input
              type="text"
              placeholder="Upload icon or emoji"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Banner Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors cursor-pointer">
              <p className="text-gray-600">Click to upload banner image</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={formData.status === 'Active'}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-4 h-4 text-emerald-600"
                />
                <span className="text-sm font-medium text-gray-700">Active</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={formData.status === 'Inactive'}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-4 h-4 text-emerald-600"
                />
                <span className="text-sm font-medium text-gray-700">Inactive</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)} fullWidth>
              Cancel
            </Button>
            <Button type="submit" variant="primary" fullWidth>
              Save Category
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
