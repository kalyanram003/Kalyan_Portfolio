import React from 'react'
import { motion } from 'framer-motion'
import { skillCard } from '../animations/variants'

export default function SkillCard({ icon: Icon = null, name, level }) {
  return (
    <motion.div variants={skillCard} whileHover="hover" className="bg-glass p-4 rounded-lg flex items-center space-x-4">
      <div className="w-10 h-10 rounded-md bg-card-bg flex items-center justify-center">{Icon ? <Icon /> : <span className="text-sm">{name[0]}</span>}</div>
      <div>
        <div className="text-sm font-medium">{name}</div>
        {level && <div className="mt-1 h-1 bg-surface rounded-full overflow-hidden"><div className="h-full bg-accent-cyan" style={{ width: `${level}%` }} /></div>}
      </div>
    </motion.div>
  )
}
