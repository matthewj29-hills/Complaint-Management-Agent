import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { submitComplaint } from '../services/api';
import { ComplaintFormData } from '../types';

const ComplaintForm = () => {
  const [formData, setFormData] = useState<ComplaintFormData>({
    name: '',
    email: '',
    complaint: ''
  });
  const navigate = useNavigate();
  const location = useLocation();
  const isDirectAccess = location.pathname === '/submit';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitComplaint(formData);
      toast.success('Complaint submitted successfully');
      setFormData({ name: '', email: '', complaint: '' });
    } catch (error) {
      toast.error('Failed to submit complaint');
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className={`${isDirectAccess ? 'flex justify-between' : ''} items-center mb-6`}>
        <h2 className="text-2xl font-bold text-gray-800">Submit a Complaint</h2>
        {isDirectAccess && (
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800"
          >
            Back to Start
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="complaint">
            Complaint
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="complaint"
            value={formData.complaint}
            onChange={(e) => setFormData({ ...formData, complaint: e.target.value })}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm; 