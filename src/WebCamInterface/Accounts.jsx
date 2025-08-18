import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { BiUser, BiEnvelope, BiLock, BiEdit } from 'react-icons/bi';
import { useAuth } from '../Auth/Auth';
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";


const Accounts = () => {
 const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(""); // clear old messages

  if (!user) {
    setStatus("No user is logged in.");
    return;
  }

  if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
    setStatus("Please fill in all fields.");
    return;
  }

  if (formData.newPassword !== formData.confirmPassword) {
    setStatus("New password and confirm password do not match.");
    return;
  }

  try {
    // 1. Re-authenticate user with current credentials
    const credential = EmailAuthProvider.credential(
      user.email,
      formData.currentPassword
    );
    await reauthenticateWithCredential(user, credential);

    // 2. Update password
    await updatePassword(user, formData.newPassword);

    setStatus("✅ Password updated successfully!");
    setIsEditing(false);
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  } catch (err) {
    if (err.code === "auth/wrong-password") {
      setStatus("Incorrect current password.");
    } else if (err.code === "auth/weak-password") {
      setStatus(" Password should be at least 6 characters.");
    } else {
      setStatus( err.message);
    }
  }
};

  return (
    <div className="h-[calc(100vh-57px)] flex flex-col">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-3 md:p-5"
      >
        <div className="max-w-2xl mx-auto  flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-4">Account Settings</h1>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-gray-700 ">
            <form onSubmit={handleSubmit} className="flex flex-col min-h-fit">
              {/* Profile Section - Made more compact */}
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-white">Profile Information</h2>
                <div className="space-y-1">
                  <label className="flex items-center text-gray-300 text-sm font-medium">
                    <BiEnvelope className="mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full px-3 py-1.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50 text-sm"
                  />
                </div>
              </div>

              {/* Security Section - Reduced spacing */}
              <div className="space-y-2 mt-4 pt-4 border-t border-gray-700">
                <h2 className="text-lg font-semibold text-white">Security</h2>
                <div className="space-y-1">
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
                    className="w-full px-3 py-1.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-50 text-sm"
                  />
                </div>

                {isEditing && (
                  <Motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
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
                        className="w-full px-3 py-1.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center text-gray-300 text-sm font-medium">
                        <BiLock className="mr-2" />
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-3 py-1.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors text-sm"
                      />
                    </div>
                  </Motion.div>
                )}
              </div>

              {/* Status Message - Kept compact */}
              {status && (
                <Motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-sm text-center ${
                    status.includes('✅') ? 'text-green-400' : 'text-red-400'
                  } mt-2`}
                >
                  {status}
                </Motion.p>
              )}

              {/* Action Buttons - Pushed to bottom */}
              <div className="flex justify-end space-x-3  pt-4">
                {!isEditing ? (
                  <Motion.button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm"
                  >
                    <BiEdit className="mr-2" />
                    Change Password
                  </Motion.button>
                ) : (
                  <>
                    <Motion.button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
                    >
                      Cancel
                    </Motion.button>
                    <Motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm"
                    >
                      Save Changes
                    </Motion.button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </Motion.div>
    </div>
  );
};

export default Accounts;

