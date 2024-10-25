'use client'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        src="/nitro-2022.mp4" // Replace with your actual video source
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      />
      
      {/* Header with buttons */}
      <header className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
        <h1 className="text-red-600 text-2xl font-bold">Nitro Series</h1>
        <div className="space-x-4">
          <motion.button
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          >
            Buy
          </motion.button>
          <motion.button
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold shadow-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          >
            Learn More
          </motion.button>
        </div>
      </header>

      {/* Content on top of the video */}
      <div className="relative z-10 text-center mt-20">
        <motion.p
          className="text-lg mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
        </motion.p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-black text-white text-center">
        <p>Assignment by Tanzeel Khan</p>
      </footer>
    </div>
  );
}
