import React from 'react'
import { motion } from 'framer-motion'
import { projectCard, badgesStagger, badge } from '../../animations/variants'

function ProjectCard({ title = 'Project', description = '', badges = [], gradient = 'from-accent-cyan to-accent-blue' }) {
  return (
    <motion.article variants={projectCard} className="bg-card-bg p-0 rounded-lg overflow-hidden h-full">
      <div className={`h-32 sm:h-40 bg-gradient-to-br ${gradient} p-3 sm:p-4 flex items-end`}>{/* preview area */}</div>
      <div className="p-3 sm:p-4 flex flex-col h-full">
        <h3 className="text-base sm:text-lg font-medium">{title}</h3>
        <p className="mt-2 text-xs sm:text-sm text-text-secondary flex-grow">{description}</p>

        <motion.div variants={badgesStagger} initial="hidden" animate="show" className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
          {badges.map((b) => (
            <motion.span key={b} variants={badge} className="text-xs px-2 py-1 bg-transparent border border-border-color rounded-full">{b}</motion.span>
          ))}
        </motion.div>

        <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
          <a className="text-xs sm:text-sm px-3 py-2 bg-accent-cyan rounded-md text-black whitespace-nowrap">Live</a>
          <a className="text-xs sm:text-sm px-3 py-2 border border-border-color rounded-md text-text-secondary whitespace-nowrap">GitHub</a>
        </div>
      </div>
    </motion.article>
  )
}

export default React.memo(ProjectCard)
