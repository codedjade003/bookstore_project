import React, { useState } from "react";
import { motion } from "framer-motion"; // Animations
import { Bot } from "lucide-react"; // Chatbot icon

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimer, setHoverTimer] = useState(null);

  // Open chatbot on hover after 3 seconds
  const handleMouseEnter = () => {
    setHoverTimer(setTimeout(() => setIsOpen(true), 3000));
  };

  // Prevent opening chatbot if user leaves early
  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Button */}
      {!isOpen && (
        <motion.div
          className="bg-blue-500 text-white p-3 rounded-full cursor-pointer shadow-lg flex items-center justify-center"
          style={{ width: "60px", height: "60px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Bot size={36} />
        </motion.div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-80 bg-white border shadow-lg rounded-lg fixed bottom-4 right-4"
          style={{ height: "500px" }}
        >
          <div className="p-3 border-b bg-blue-500 text-white flex justify-between">
            <span>Bookstore Chatbot</span>
            <button onClick={() => setIsOpen(false)} className="text-white">✖</button>
          </div>

          {/* ChatBase Iframe */}
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/9JrSoyTkSrTDSskfVs5Yr"
            width="100%"
            height="100%"
            style={{ border: "none", minHeight: "450px" }}
          ></iframe>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
