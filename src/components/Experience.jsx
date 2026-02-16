import React from 'react'
import { motion } from 'framer-motion'
import TimelineItem from './TimelineItem'
import { lineGrow, timelineItemLeft, timelineItemRight, pulse } from '../animations/variants'

const items = [
  { date: 'Nov 2024', title: 'Fleet Management System', desc: 'Vehicle tracking with Google Maps and Spring Data JPA' },
  { date: 'Aug 2025', title: 'Track Buddy', desc: 'Task management with PDF generation and Dockerized deployment' },
  { date: 'Jul 2024', title: 'AWS Training', desc: 'Completed AWS training and certifications' }
]

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Experience & Timeline</h2>
        <div className="mt-8 sm:mt-12 relative md:pl-8 sm:pl-4 lg:pl-12 lg:pr-12">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-subtle transform -translate-x-1/2">
            <motion.div className="origin-top h-full bg-accent-cyan" initial="hidden" whileInView="show" variants={lineGrow} />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {items.map((it, i) => (
              <div key={it.title} className={`md:flex md:items-start md:justify-between ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <TimelineItem side={i % 2 === 0 ? 'left' : 'right'} date={it.date} title={it.title} variants={i % 2 === 0 ? timelineItemLeft : timelineItemRight}>
                  {it.desc}
                </TimelineItem>
                <div className="hidden md:flex md:w-6 md:items-center md:justify-center">
                  <motion.span className="block w-4 h-4 rounded-full bg-accent-cyan" variants={pulse} initial="hidden" animate="show" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
