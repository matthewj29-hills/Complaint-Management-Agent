import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getComplaints, updateComplaintStatus, deleteComplaint } from '../services/api';
import { Complaint } from '../types';
import ComplaintForm from './ComplaintForm';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [filter, setFilter] = useState<'all' | 'Pending' | 'Resolved'>('all');
  const [activeTab, setActiveTab] = useState<'admin' | 'complaint'>('admin');
  const navigate = useNavigate();

  const fetchComplaints = async () => {
    try {
      const data = await getComplaints();
      setComplaints(data);
    } catch (error) {
      toast.error('Failed to fetch complaints');
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleStatusToggle = async (complaint: Complaint) => {
    try {
      const newStatus = complaint.status === 'Pending' ? 'Resolved' : 'Pending';
      await updateComplaintStatus(complaint.id, newStatus);
      await fetchComplaints();
      toast.success(`Complaint marked as ${newStatus}`);
    } catch (error) {
      toast.error('Failed to update complaint status');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this complaint?')) return;
    
    try {
      await deleteComplaint(id);
      await fetchComplaints();
      toast.success('Complaint deleted successfully');
    } catch (error) {
      toast.error('Failed to delete complaint');
    }
  };

  const filteredComplaints = complaints.filter(complaint => 
    filter === 'all' ? true : complaint.status === filter
  );

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-4 py-2 rounded ${
              activeTab === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Admin Dashboard
          </button>
          <button
            onClick={() => setActiveTab('complaint')}
            className={`px-4 py-2 rounded ${
              activeTab === 'complaint' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            Submit Complaint
          </button>
        </div>
        <button
          onClick={() => navigate('/')}
          className="text-gray-600 hover:text-gray-800"
        >
          Back to Start
        </button>
      </div>

      {activeTab === 'admin' ? (
        <>
          <div className="flex justify-end mb-4">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded ${
                  filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('Pending')}
                className={`px-4 py-2 rounded ${
                  filter === 'Pending' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilter('Resolved')}
                className={`px-4 py-2 rounded ${
                  filter === 'Resolved' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                Resolved
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Complaint
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredComplaints.map((complaint) => (
                  <tr key={complaint.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {complaint.name}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {complaint.email}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="max-w-xs truncate">{complaint.complaint}</div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          complaint.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {complaint.status}
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {new Date(complaint.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStatusToggle(complaint)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Toggle Status
                        </button>
                        <button
                          onClick={() => handleDelete(complaint.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <ComplaintForm />
      )}
    </div>
  );
};

export default AdminDashboard; 