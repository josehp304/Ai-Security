import React, { useRef, useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { auth } from "../Auth/firebase";
import useNavigation from "../Utilities/AuthUtils";
import { BiCameraHome, BiBell, BiCog, BiLogOut,BiAnalyse } from "react-icons/bi";

const LiveWebcam = () => {
  const { loginNavigate } = useNavigation();
  const [activeCamera, setActiveCamera] = useState("cam1");
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  const cameraOptions = [
    { id: "cam1", name: "Camera 1" },
    { id: "cam2", name: "Camera 2" },
    { id: "cam3", name: "Camera 3" },
  ];

  const navItems = [
    { name: "Cameras", icon: <BiCameraHome size={24} /> },
    { name: "Analytics", icon: <BiAnalyse size={24} /> },
    { name: "Alerts", icon: <BiBell size={24} /> },
    { name: "Settings", icon: <BiCog size={24} /> },
  ];

  useEffect(() => {
    const initializeCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
        setIsLoading(false);
      }
    };

    initializeCamera();
    return () => {
      const stream = videoRef.current?.srcObject;
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      loginNavigate();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-screen bg-gray-900 relative pb-16 md:pb-0 md:flex-row"
    >
      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full md:w-auto">
        {/* Camera Controls */}
        <div className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 p-2 md:p-3 sticky top-0 z-10">
    <div className="text-white text-2xl">ThSecurity</div>
        </div>

        {/* Camera Feed */}
        <div className="flex-1 p-3 md:p-6 bg-gray-900">
          <div className="max-w-4xl mx-auto ">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                </div>
              )}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-[calc(100vh-280px)] md:h-[calc(100vh-200px)] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex justify-between items-center text-white">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm md:text-base font-medium">
                      {cameraOptions.find((cam) => cam.id === activeCamera)?.name}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-medium">
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

              <div className="max-w-3xl mx-auto flex justify-center space-x-2 md:space-x-4 overflow-x-auto mb-15 md:mb-10">
            {cameraOptions.map((camera) => (
              <Motion.button
                key={camera.id}
                whileHover={{ scale: 1.00 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCamera(camera.id)}
                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap text-sm md:text-base font-medium ${
                  activeCamera === camera.id
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-700/80 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {camera.name}
              </Motion.button>
            ))}
          </div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 md:relative md:w-20 bg-gray-800/95 backdrop-blur-sm border-t md:border-t-0 md:border-r border-gray-700 z-50">
        <div className="md:sticky md:top-0">
          <div className="flex md:flex-col items-center justify-around md:justify-start md:space-y-8 py-2 md:py-8">
            {navItems.map((item) => (
              <Motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400  hover:text-white transition-colors rounded-lg hover:bg-gray-700/50"
                title={item.name}
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </Motion.button>
            ))}
            <Motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSignOut}
              className="p-3 text-red-400 hover:text-red-500 transition-colors rounded-lg hover:bg-gray-700/50"
              title="Sign Out"
            >
              <BiLogOut size={24} />
            </Motion.button>
          </div>
        </div>
      </nav>
    </Motion.div>
  );
};

export default LiveWebcam;
