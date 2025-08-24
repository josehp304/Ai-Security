import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
const VIDEO_FEED_URL = `${BACKEND_URL}/video_feed`;
const STATUS_URL = `${BACKEND_URL}/api/status`;

const LiveWebcam = () => {
  const [status, setStatus] = useState({
    fps: null,
    confidence: null,
    ai_analysis: "Loading...",
    ai_in_progress: false,
    ai_enabled: false,
  });

  useEffect(() => {
    // Fetch status from backend every 2 seconds
    const fetchStatus = async () => {
      try {
        const response = await fetch(STATUS_URL);
        const data = await response.json();
        setStatus(data);
      } catch (error) {
        console.error("Error fetching status:", error);
        setStatus(prev => ({ ...prev, ai_analysis: "Error connecting to backend" }));
      }
    };

    // Initial fetch
    fetchStatus();

    // Set up polling interval
    const statusInterval = setInterval(fetchStatus, 2000);

    return () => {
      clearInterval(statusInterval);
    };
  }, []);



  return (
    <div className="flex-1 p-3 md:p-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          {/* Backend video feed */}
          <img
            src={VIDEO_FEED_URL}
            alt="Video Stream"
            className="w-full h-[calc(100vh-280px)] md:h-[calc(100vh-200px)] object-cover"
            style={{ background: "#222" }}
            onError={(e) => {
              e.target.style.display = 'none';
              console.error("Error loading video feed");
            }}
            onLoad={(e) => {
              e.target.style.display = 'block';
            }}
          />
          
          {/* Status overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${status.ai_enabled ? "bg-green-500 animate-pulse" : "bg-gray-500"}`}></div>
                <span className="text-sm md:text-base font-medium">
                  AI {status.ai_enabled ? "Enabled" : "Disabled"}
                  {status.ai_in_progress && " (Processing...)"}
                </span>
              </div>
              <span className="text-sm md:text-base font-medium">
                {new Date().toLocaleTimeString()}
              </span>
            </div>
            
            {/* AI Status Information */}
            <div className="mt-2 text-white text-xs md:text-sm">
              <div className="flex flex-wrap gap-4">
                <div>
                  <strong>FPS:</strong> {status.fps !== null ? status.fps : "--"}
                </div>
                <div>
                  <strong>Confidence:</strong> {status.confidence !== null ? status.confidence : "--"}
                </div>
              </div>
              <div className="mt-1">
                <strong>AI Analysis:</strong> 
                <span className={`ml-1 ${status.ai_in_progress ? "text-yellow-400" : "text-green-400"}`}>
                  {status.ai_analysis}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveWebcam;
