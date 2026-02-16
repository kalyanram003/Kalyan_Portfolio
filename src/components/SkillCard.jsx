import React from 'react'
import { motion } from 'framer-motion'
import { skillCard } from '../animations/variants'

function SkillCard({ icon: Icon = null, name, level }) {
  return (
    <motion.div variants={skillCard} whileHover="hover" className="bg-glass p-3 sm:p-4 rounded-lg flex items-center space-x-2 sm:space-x-4 h-full">
      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-md bg-card-bg flex items-center justify-center flex-shrink-0 text-sm sm:text-base">{Icon ? <Icon /> : <span className="text-xs sm:text-sm">{name[0]}</span>}</div>
      <div className="min-w-0 flex-1">
        <div className="text-xs sm:text-sm font-medium truncate">{name}</div>
        {level && <div className="mt-1 h-1 bg-surface rounded-full overflow-hidden"><div className="h-full bg-accent-cyan" style={{ width: `${level}%` }} /></div>}
      </div>
    </motion.div>
  )
}

export default React.memo(SkillCard)
