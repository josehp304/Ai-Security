import React, { useRef, useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
// import { auth } from "../Auth/firebase";
// import { div } from "framer-motion/client";
// import useNavigation from "../Utilities/AuthUtils";
// import { BiCameraHome, BiBell, BiCog, BiLogOut,BiAnalyse } from "react-icons/bi";
// import { MdAccountCircle } from "react-icons/md";


const LiveWebcam = () => {
  // const { loginNavigate } = useNavigation();
  // const [activeCamera, setActiveCamera] = useState("cam1");
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  // const cameraOptions = [
  //   { id: "cam1", name: "Camera 1" },
  //   { id: "cam2", name: "Camera 2" },
  //   { id: "cam3", name: "Camera 3" },
  // ];



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



  return (

    
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
                      {/* {cameraOptions.find((cam) => cam.id === activeCamera)?.name} */}
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


  );
};

export default LiveWebcam;
