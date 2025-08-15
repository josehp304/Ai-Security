// import React, { useRef, useEffect } from "react";

const LiveWebcam = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     // Request webcam access
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       })
//       .catch((err) => {
//         console.error("Error accessing webcam:", err);
//       });
//   }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 px-4">
      {/* <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-gray-700 shadow-lg shadow-blue-900/40">
        <video
        //   ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-auto object-cover"
        ></video>
        <div className="p-4 bg-black/60 text-white text-center">
          <h2 className="text-xl font-bold">Live Security Feed</h2>
          <p className="text-sm text-gray-300">
            Streaming directly from your webcam
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default LiveWebcam;
