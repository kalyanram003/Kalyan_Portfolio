import React from 'react'
import { motion } from 'framer-motion'
import { projectCard, badgesStagger, badge } from '../../animations/variants'

const iconMap = {
  'java': 'fa-code',
  'spring boot': 'fa-leaf',
  'react': 'fa-react',
  'node.js': 'fa-server',
  'mongodb': 'fa-database',
  'docker': 'fa-box',
  'jwt': 'fa-lock',
  'google maps': 'fa-map',
  'gamification': 'fa-gamepad',
  'educational': 'fa-book',
  'interactive': 'fa-computer',
  'javascript': 'fa-js',
  'html': 'fa-code',
  'rest api': 'fa-code',
  'react 18': 'fa-react',
  'tailwind css': 'fa-paintbrush',
  'axios': 'fa-network-wired',
  'react router': 'fa-route',
  'spring data jpa': 'fa-database',
  'itext': 'fa-file-pdf',
  'incident management': 'fa-exclamation-triangle',
  'ai safety': 'fa-shield'
}

const gradients = [
  'from-indigo-500 to-purple-600',
  'from-pink-500 to-red-500',
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-yellow-500',
  'from-violet-500 to-fuchsia-500'
]

function ProjectCard({ title = 'Project', description = '', badges = [], liveUrl = '', githubUrl = '', id = '' }) {
  // Determine gradient based on project id
  const gradientIndex = Math.abs(title.charCodeAt(0)) % gradients.length
  const gradientClass = gradients[gradientIndex]
  
  // Get primary icon from first badge
  const primaryIcon = iconMap[badges[0]?.toLowerCase()] || 'fa-laptop-code'

  return (
    <motion.article variants={projectCard} className="bg-card-bg p-0 rounded-xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Project Visual Section */}
      <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${gradientClass} p-6 flex items-center justify-center overflow-hidden group`}>
        {/* Floating shapes background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-32 h-32 bg-white rounded-full top-2 left-2 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-24 h-24 bg-white rounded-full bottom-4 right-8" style={{animation: 'float 4s ease-in-out infinite', animationDelay: '1s'}}></div>
        </div>

        {/* Main icon */}
        <div className="relative z-10 text-6xl sm:text-7xl text-white opacity-90 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          <i className={`fas ${primaryIcon}`}></i>
        </div>

        {/* Tech stack badges - positioned at bottom */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 z-20">
          {badges.slice(0, 3).map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 bg-white/90 backdrop-blur text-gray-900 rounded-full font-semibold shadow-md">
              {tech}
            </span>
          ))}
          {badges.length > 3 && (
            <span className="text-xs px-2 py-1 bg-white/80 backdrop-blur text-gray-900 rounded-full font-semibold">
              +{badges.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold text-text-primary">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-text-secondary flex-grow leading-relaxed">{description}</p>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 w-full">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 btn-code flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-indigo-500 rounded-lg text-text-primary font-semibold text-xs sm:text-sm whitespace-nowrap hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <i className="fab fa-github text-base"></i>
              <span>View Code</span>
            </a>
          )}
          {liveUrl ? (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 btn-live flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold text-xs sm:text-sm whitespace-nowrap hover:shadow-lg hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <i className="fas fa-external-link-alt text-base"></i>
              <span>Live Demo</span>
            </a>
          ) : (
            <button 
              disabled 
              className="flex-1 btn-live flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg text-white font-semibold text-xs sm:text-sm whitespace-nowrap opacity-50 cursor-not-allowed"
            >
              <i className="fas fa-external-link-alt text-base"></i>
              <span>Live Demo</span>
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(10deg);
          }
        }
      `}</style>
    </motion.article>
  )
}

export default React.memo(ProjectCard)
