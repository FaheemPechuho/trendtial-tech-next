"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a13] min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Glow Effects with Motion */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Top Right Glow */}
        <motion.div
          className="absolute top-[-5%] right-[-10%] w-[600px] h-[400px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-90 blur-[100px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        {/* Middle Right Glow */}
        <motion.div
          className="absolute top-[40%] left-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[120px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8 }}
        />
        {/* Bottom Left Glow */}
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[400px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-90 blur-[100px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* GenAI Launchpad Button */}
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#15153d] via-[#00123d] to-[#0a0a13] border border-[#144180] text-white text-sm px-4 py-2 rounded-full mb-8 shadow-[0_0_24px_#004cfe] hover:shadow-[0_0_20px_#004cfe] transition-shadow duration-300"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          Tech Consultancy
          <ArrowRight className="w-4 h-4" />
        </motion.a>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Helping you integrate AI
          <br />
          with clarity & confidence
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-300 text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AI and data reshape our world at a relentless speed, yet most find themselves caught between possibility
          <br />
          and complexity. We are here to help you identify what truly gives that competitive advantage.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="bg-white text-[#0a0a13] font-extralight hover:bg-gray-200 px-8 py-3 rounded-full"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Services
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-[#15153d] via-[#00123d] to-[#0a0a13] border border-[#144180] hover:bg-gradient-to-r hover:from-[#242465] hover:via-[#001d60] hover:to-[#0a0a13] text-white font-extralight px-8 py-3 rounded-full"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Academy
          </motion.button>
        </motion.div>
      </div>

      {/* Stars Animation */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
      
    </section>
  )
}

export default HeroSection
