import React, { useState } from "react";
import useNavigation from "../Utilities/AuthUtils";
import { motion as Motion } from "framer-motion";
import "../App.css";
import { useAuth } from "../Auth/Auth";  

function Login() {
  const { SignUpNavigate, afterAuth } = useNavigation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadLogin, setLoadLogin] = useState(false);
  const [error, setError] = useState("");   // <-- add state for error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadLogin(true);
    setError(""); // reset error before login attempt

    try {
      const result = await login(email, password);

      if (result) {
        afterAuth(); // success
      } 
    } catch (err) {
      // 🔴 Handle Firebase Auth error codes here
      if (err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("Password is incorrect");
      } else if (err.code === "auth/user-not-found") {
        setError("No account found with this email");
      } else {
        setError("Something went wrong. Try again!");
      }
    } finally {
      setLoadLogin(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 px-4 py-6">
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white bg-gray-800/90 rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-[min(90%,400px)] border border-gray-700 mx-auto my-auto"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            A-eye
          </h1>
          <p className="text-center text-gray-400 mb-6 text-sm sm:text-base">
            Sign in to access your security dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-gray-300 mb-1.5 text-sm sm:text-base">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1.5 text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
              required
            />
          </div>

          {/* 🔴 Error message */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-2.5 sm:py-3 rounded-lg shadow-md text-sm sm:text-base mt-2"
          >
            {loadLogin ? (
              <div className="flex justify-center items-center">
                <div className="loader"></div>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </Motion.div>
    </div>
  );
}

export default Login;
