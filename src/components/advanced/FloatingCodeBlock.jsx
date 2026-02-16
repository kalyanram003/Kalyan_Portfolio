import React from 'react'
import { motion } from 'framer-motion'

function FloatingCodeBlock({ code, language, delay = 0, position = { x: 0, y: 0 } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 20px 40px rgba(0, 217, 255, 0.15)',
        borderColor: 'rgba(0, 217, 255, 0.5)'
      }}
      viewport={{ once: true }}
      className="absolute w-72 p-4 rounded-lg backdrop-blur-md border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300 bg-gradient-to-br from-black/40 to-black/20"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-cyan-400 tracking-widest">{language}</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
        </div>
      </div>
      
      <pre className="text-xs text-gray-300 overflow-hidden font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </motion.div>
  )
}

export default FloatingCodeBlock
