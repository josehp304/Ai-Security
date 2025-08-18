import React from 'react'
import { motion as Motion } from "framer-motion";
import { auth } from "../Auth/firebase";
import useNavigation from "../Utilities/AuthUtils";
import { BiCameraHome, BiBell, BiCog, BiLogOut, BiAnalyse } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const Layout = () => {
  const { landingNavigate } = useNavigation();
  
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      landingNavigate();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const navItems = [
    { name: "Cameras", icon: <BiCameraHome size={24} />,path:"/Cameras" },
    // { name: "Alerts", icon: <BiBell size={24}  />,path:'/Alerts' },
    { name: "Account", icon: <MdAccountCircle size={24} /> ,path:'/Accounts'},
    // {name:"Sign Out",icon:<BiLogOut size={24} />, action:()=>handleSignOut()}
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Header - Always visible */}
      <header className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 px-4 py-3 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">ThSecurity</h1>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Desktop Sidebar - Hidden on mobile */}
        <nav className="hidden md:flex flex-col fixed left-0 top-[57px] bottom-0 w-20% bg-gray-800/95 backdrop-blur-sm border-r border-gray-700">
          <div className="flex flex-col py-6 px-2 space-y-4">
            {/* {navItems.map((item) => (
              <Motion.button
                key={item.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center p-3 text-gray-400 hover:text-white transition-all rounded-lg hover:bg-gray-700/50"
              >
                <div className="h-6 w-6 grid place-items-center">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.name}</span>
              </Motion.button>
            ))} */}{navItems.map((item) => (
  item.path ? (
    <NavLink
      key={item.name}
      to={item.path}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${
          isActive ? "text-white bg-gray-700/50" : "text-gray-400 hover:text-white hover:bg-gray-700/50"
        }`
      }
      title={item.name}
    >
      <div className="h-6 w-6 grid place-items-center">
        {item.icon}
      </div>
      <span className="text-xs md:text-sm mt-1 text-center">
        {item.name}
      </span>
    </NavLink>
  ) : (
    <button
      key={item.name}
      onClick={item.action}
      className="flex flex-col items-center justify-center p-2 text-gray-400 hover:text-white transition-all rounded-lg hover:bg-gray-700/50"
      title={item.name}
    >
      <div className="h-6 w-6 grid place-items-center">
        {item.icon}
      </div>
      <span className="text-xs md:text-sm mt-1 text-center">
        {item.name}
      </span>
    </button>
  )
))}

            <Motion.button
              onClick={handleSignOut}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex  flex-col items-center  p-3 text-red-400 hover:text-red-500 transition-all rounded-lg hover:bg-gray-700/50 mt-auto"
            >
              <BiLogOut className="h-6 w-6"/>
              <span className="text-sm font-medium">Sign Out</span>
            </Motion.button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 md:ml-[150px] pb-20 md:pb-0">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700 z-50">
          <div className="flex items-center justify-around py-2 px-4">
            {navItems.map((item) => (
              <Motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center p-2 text-gray-400 hover:text-white transition-all rounded-lg hover:bg-gray-700/50"
              >
                <div className="h-6 w-6 grid place-items-center">
                  {item.icon}
                </div>
                <span className="text-xs mt-1">{item.name}</span>
              </Motion.button>
            ))}
                   {/* {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center p-2 transition-colors rounded-lg ${
                    isActive
                      ? "text-white bg-gray-700/50"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`
                }
              >
                <div className="h-6 w-6 grid place-items-center">{item.icon}</div>
                <span className="text-xs md:text-sm mt-1 text-center">
                  {item.name}
                </span>
              </NavLink>
            ))} */}


            <Motion.button
              onClick={handleSignOut}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-2 text-red-400 hover:text-red-500 transition-all rounded-lg hover:bg-gray-700/50"
            >
              <BiLogOut className="h-6 w-6"/>
              <span className="text-xs mt-1">Sign Out</span>
            </Motion.button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Layout