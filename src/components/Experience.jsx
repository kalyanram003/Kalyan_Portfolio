import React from 'react'
import { motion } from 'framer-motion'
import TimelineItem from './TimelineItem'
import { lineGrow, timelineItemLeft, timelineItemRight, pulse } from '../animations/variants'

const experienceItems = [
  { date: 'Nov 2024', title: 'Fleet Management System', desc: 'Vehicle tracking with Google Maps and Spring Data JPA' },
  { date: 'Aug 2025', title: 'Track Buddy', desc: 'Task management with PDF generation and Dockerized deployment' },
  { date: 'Jul 2024', title: 'AWS Training', desc: 'Completed AWS training and certifications' }
]

const educationItems = [
  { date: '2022-2026', title: 'Lovely Professional University', location: 'Computer Science and Engineering, Jalandhar, Punjab', desc: 'Currently pursuing B.Tech in Computer Science' },
  { date: '2020-2022', title: 'Sasi Educational Institutes', location: 'Mandapeta, Andhra Pradesh', desc: 'Senior Secondary Education' },
  { date: '2019-2020', title: 'Mandapeta Public School', location: 'Mandapeta, Andhra Pradesh', desc: 'Secondary Education' }
]

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Experience & Education</h2>
        
        <div className="mt-8 sm:mt-12 timeline-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Education Section - LEFT */}
          <div className="timeline-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-accent-cyan">Education</h3>
            <div className="space-y-6 sm:space-y-8 relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle">
                <motion.div className="origin-top w-full bg-accent-cyan" initial="hidden" whileInView="show" variants={lineGrow} />
              </div>
              
              {educationItems.map((item, i) => (
                <div key={item.title} className="relative">
                  {/* Dot */}
                  <motion.span className="absolute left--3.5 top-1 block w-3 h-3 rounded-full bg-accent-cyan border-2 border-background-black" variants={pulse} initial="hidden" animate="show" />
                  
                  <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={timelineItemLeft} className="bg-glass p-3 sm:p-4 rounded-lg ml-2">
                    <div className="text-xs sm:text-sm text-accent-cyan font-semibold">{item.date}</div>
                    <h4 className="mt-2 font-semibold text-sm sm:text-base">{item.title}</h4>
                    <div className="mt-1 text-text-secondary text-xs sm:text-sm">{item.location}</div>
                    <div className="mt-2 text-text-secondary text-xs sm:text-sm">{item.desc}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section - RIGHT */}
          <div className="timeline-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-accent-cyan">Experience</h3>
            <div className="space-y-6 sm:space-y-8 relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border-subtle">
                <motion.div className="origin-top w-full bg-accent-cyan" initial="hidden" whileInView="show" variants={lineGrow} />
              </div>
              
              {experienceItems.map((item, i) => (
                <div key={item.title} className="relative">
                  {/* Dot */}
                  <motion.span className="absolute left--3.5 top-1 block w-3 h-3 rounded-full bg-accent-cyan border-2 border-background-black" variants={pulse} initial="hidden" animate="show" />
                  
                  <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={timelineItemRight} className="bg-glass p-3 sm:p-4 rounded-lg ml-2">
                    <div className="text-xs sm:text-sm text-accent-cyan font-semibold">{item.date}</div>
                    <h4 className="mt-2 font-semibold text-sm sm:text-base">{item.title}</h4>
                    <div className="mt-2 text-text-secondary text-xs sm:text-sm">{item.desc}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
