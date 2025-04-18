import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LandingPage = () => {
  const [passcode, setPasscode] = useState('');
  const navigate = useNavigate();

  const handleSubmitComplaint = () => {
    navigate('/submit');
  };

  const handleAdminAccess = () => {
    if (passcode === '0000') {
      navigate('/admin');
    } else {
      toast.error('Invalid passcode');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Complaint Management System
        </h2>
        
        <div className="space-y-4">
          <button
            onClick={handleSubmitComplaint}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continue to Submit Complaint
          </button>

          <div className="border-t border-gray-200 pt-4">
            <div className="text-sm text-gray-600 mb-2">Admin Access</div>
            <div className="flex gap-2">
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                onClick={handleAdminAccess}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 