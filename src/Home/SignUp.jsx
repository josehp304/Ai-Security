// import { useState } from "react";
// import useNavigation from "../Utilities/AuthUtils";
// import { Navigate } from "react-router-dom";
// import { motion as Motion  } from "framer-motion";
// import useAuth from "../Auth/Auth";
// // import { div } from "framer-motion/client";

// function SignUp() {
//    const {loginNavigate,afterAuth}=useNavigation();
//    const [loadSignUp,setSignUp]=useState(false)
//      const { signUp } = useAuth();
   




//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSignUp(true);
//     try{
//     const user = await signUp(formData.email, formData.password);
//     if (user) {
  
//     afterAuth();
//       // You can also send the UID + name to your backend here
//       // navigate("/dashboard"); // redirect after sign up
//     }
//     }
//     finally {
//     setSignUp(false); 
//   };
// }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 px-4">
//       <Motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="btext-white bg-gray-800/90 rounded-2xl p-6 sm:p-8 shadow-lg w-full max-w-[min(90%,400px)] border border-gray-700 mx-auto my-auto"
//       >
//         {/* Heading */}
//         <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2 sm:mb-4">
//           Create an Account
//         </h1>
//         <p className="text-center text-gray-400 mb-6 text-sm sm:text-base">
//           Sign up to start using your AI Security Dashboard
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3">
//           <div>
//             <label className="block text-gray-300 mb-2">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-300 mb-2">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-300 mb-2">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-2.5 sm:py-3 rounded-lg shadow-md text-sm sm:text-base mt-2"
//           >
      
//             {loadSignUp? <div className="flex justify-center items-center"><div class="loader"></div></div>
//             :"Sign Up"}
          
//           </button>
//         </form>

//         {/* Footer links */}
//         <div className="mt-2 sm:mt-4 text-center text-gray-400 text-sm">
//           Already have an account?{" "}
//        <span  className="text-blue-400 hover:underline cursor-pointer" onClick={loginNavigate}>
//             Login
//           </span>
//         </div>
//       </Motion.div>
//     </div>
//   );
// }

// export default SignUp;
