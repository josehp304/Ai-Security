import React from 'react'
import useNavigation from '../Utilities/AuthUtils';
import useAuth from '../Auth/Auth';
import { motion as Motion } from "framer-motion";
import { useState } from "react";
import '../App.css'




 function Login() {
  const {SignUpNavigate,afterAuth}=useNavigation();
  const {login}=useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadLogin,setLoadLogin]=useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadLogin(true);
    try{
         const user = await login(email,password);

     if(user){
      afterAuth();
     }
    //  else{

    //  }
    }

    finally{
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
    <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 sm:mb-6">
      ThSecurity
    </h1>
    <p className="text-center text-gray-400 mb-6 text-sm sm:text-base">
      Sign in to access your security dashboard
    </p>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <label className="block text-gray-300 mb-1.5 text-sm sm:text-base">Email Address</label>
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
        <label className="block text-gray-300 mb-1.5 text-sm sm:text-base">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-2.5 sm:py-3 rounded-lg shadow-md text-sm sm:text-base mt-2"
      >
          {loadLogin? <div className="flex justify-center items-center"><div class="loader"></div></div>
            :"Login"}
          
      </button>
    </form>

    {/* Footer links */}
    {/* <div className="mt-4 sm:mt-6 text-center text-gray-400 text-xs sm:text-sm">
      Don't have an account?{" "}
      <span className="text-blue-400 hover:underline cursor-pointer" onClick={SignUpNavigate}>
        Sign Up
      </span>
    </div> */}
  </Motion.div>
</div>

  );
}

export default Login