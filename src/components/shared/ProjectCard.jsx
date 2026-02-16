import React from 'react'
import { motion } from 'framer-motion'
import { projectCard, badgesStagger, badge } from '../../animations/variants'

function ProjectCard({ title = 'Project', description = '', badges = [], gradient = 'from-accent-cyan to-accent-blue', liveUrl = '', githubUrl = '' }) {
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

        <div className="project-buttons mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-code text-xs sm:text-sm px-3 sm:px-4 py-2 border border-indigo-500 rounded-md text-text-primary whitespace-nowrap hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">👨‍💻 View Code</a>
          )}
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-live text-xs sm:text-sm px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md text-white whitespace-nowrap hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">🚀 Live Demo</a>
          ) : (
            <button disabled className="btn btn-live text-xs sm:text-sm px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 rounded-md text-white whitespace-nowrap opacity-50 cursor-not-allowed">🚀 Live Demo</button>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default React.memo(ProjectCard)
