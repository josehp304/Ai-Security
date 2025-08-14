import { useState } from "react";
import useNavigation from "../Utilities/AuthUtils";

import { motion as Motion  } from "framer-motion";

function SignUp() {
   const {loginNavigate}=useNavigation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up data:", formData);
    // TODO: Send data to backend or Firebase auth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 px-4">
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/80 rounded-2xl p-8 shadow-lg max-w-md w-full"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
          Create an Account
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Sign up to start using your AI Security Dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Footer links */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?{" "}
       <span  className="text-blue-400 hover:underline" onClick={loginNavigate}>
            Login
          </span>
        </div>
      </Motion.div>
    </div>
  );
}

export default SignUp;
