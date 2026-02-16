import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import { gridContainer } from '../animations/variants'
import { FiCode, FiServer, FiDatabase, FiBox } from 'react-icons/fi'

const data = {
  Programming: [
    { name: 'Java', icon: FiCode, level: 97 },
    { name: 'C++', icon: FiCode, level: 70 },
    { name: 'JavaScript', icon: FiCode, level: 80 }
  ],
  Backend: [
    { name: 'Spring Boot', icon: FiServer, level: 85 },
    { name: 'Node.js', icon: FiServer, level: 70 }
  ],
  'Database & Cloud': [
    { name: 'MySQL', icon: FiDatabase, level: 80 },
    { name: 'AWS', icon: FiBox, level: 75 }
  ],
  DevOps: [
    { name: 'Docker', icon: FiBox, level: 75 },
    { name: 'Maven', icon: FiBox, level: 60 }
  ]
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {Object.entries(data).map(([cat, items]) => (
            <div key={cat}>
              <h3 className="text-xl font-medium mb-4">{cat}</h3>
              <motion.div variants={gridContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-2 gap-4">
                {items.map((s) => (
                  <SkillCard key={s.name} name={s.name} icon={s.icon} level={s.level} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
