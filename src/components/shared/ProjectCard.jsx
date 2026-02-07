import React from 'react'
import { motion } from 'framer-motion'
import { projectCard, badgesStagger, badge } from '../../animations/variants'

function ProjectCard({ title = 'Project', description = '', badges = [], gradient = 'from-accent-cyan to-accent-blue' }) {
  return (
    <motion.article variants={projectCard} className="bg-card-bg p-0 rounded-lg overflow-hidden">
      <div className={`h-40 bg-gradient-to-br ${gradient} p-4 flex items-end`}>{/* preview area */}</div>
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-text-secondary">{description}</p>

        <motion.div variants={badgesStagger} initial="hidden" animate="show" className="mt-3 flex flex-wrap gap-2">
          {badges.map((b) => (
            <motion.span key={b} variants={badge} className="text-xs px-2 py-1 bg-transparent border border-border-color rounded-full">{b}</motion.span>
          ))}
        </motion.div>

        <div className="mt-4 flex items-center gap-3">
          <a className="text-sm px-3 py-2 bg-accent-cyan rounded-md text-black">Live</a>
          <a className="text-sm px-3 py-2 border border-border-color rounded-md text-text-secondary">GitHub</a>
        </div>
      </div>
    </motion.article>
  )
}

export default React.memo(ProjectCard)
