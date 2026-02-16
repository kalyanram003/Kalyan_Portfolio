import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './shared/ProjectCard'
import { gridContainer } from '../animations/variants'

const projects = [
  {
    id: 'track-buddy',
    title: 'Track Buddy',
    description: 'Task management with PDF generation, JWT auth, email notifications, Dockerized.',
    badges: ['Java', 'Spring Boot', 'Docker', 'JWT']
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    description: 'Vehicle tracking with Google Maps, Spring Data JPA, dynamic PDF reports.',
    badges: ['Java', 'Spring Data JPA', 'Google Maps', 'iText']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
        <motion.div variants={gridContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} title={p.title} description={p.description} badges={p.badges} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
