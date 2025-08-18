import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { BiUser, BiEnvelope, BiLock, BiEdit } from 'react-icons/bi';

const Accounts = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: 'John Doe',
    email: 'john.doe@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsEditing(false);
  };

  return (
    <div className="p-3 md:p-5 max-w-2xl mx-auto">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">Account Settings</h1>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Profile Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white mb-4">Profile Information</h2>
              
              {/* <div className="space-y-2">
                <label className="flex items-center text-gray-300 text-sm font-medium">
                  <BiUser className="mr-2" />
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50"
                />
              </div> */}

              <div className="space-y-2">
                <label className="flex items-center text-gray-300 text-sm font-medium">
                  <BiEnvelope className="mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            {/* Security Section */}
            <div className="space-y-4 pt-6 border-t border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Security</h2>
              
              <div className="space-y-2">
                <label className="flex items-center text-gray-300 text-sm font-medium">
                  <BiLock className="mr-2" />
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50"
                />
              </div>

              {isEditing && (
                <>
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-300 text-sm font-medium">
                      <BiLock className="mr-2" />
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-gray-300 text-sm font-medium">
                      <BiLock className="mr-2" />
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              {!isEditing ? (
                <Motion.button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <BiEdit className="mr-2" />
                  Edit Profile
                </Motion.button>
              ) : (
                <>
                  <Motion.button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </Motion.button>
                  <Motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Save Changes
                  </Motion.button>
                </>
              )}
            </div>
          </form>
        </div>
      </Motion.div>
    </div>
  );
};

export default Accounts;

