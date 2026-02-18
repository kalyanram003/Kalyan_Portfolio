import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './shared/ProjectCard'
import { gridContainer } from '../animations/variants'

const projects = [
  {
    id: 'track-buddy',
    title: 'Track Buddy',
    description: 'Task management with PDF generation, JWT auth, email notifications, Dockerized.',
    badges: ['Java', 'Spring Boot', 'Docker', 'JWT'],
    liveUrl: 'https://track-buddy-cyan.vercel.app/login',
    githubUrl: 'https://github.com/kalyanram003/TrackBuddy'
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    description: 'Vehicle tracking with Google Maps, Spring Data JPA, dynamic PDF reports.',
    badges: ['Java', 'Spring Data JPA', 'Google Maps', 'iText'],
    githubUrl: 'https://github.com/kalyanram003/Fleet-Management-System'
  },
  {
    id: 'ecoally',
    title: 'EcoAlly',
    description: 'Comprehensive eco-literacy platform with gamified learning experiences, interactive quizzes, real-world challenges, and social features for environmental education.',
    badges: ['React', 'Gamification', 'Educational Tech', 'Interactive'],
    githubUrl: 'https://github.com/kalyanram003/ecoally'
  },
  {
    id: 'meal-suggestion-app',
    title: 'Meal Suggestion App',
    description: 'Smart meal suggestion application built with Spring Boot backend and interactive frontend with HTML and JavaScript.',
    badges: ['Spring Boot', 'JavaScript', 'HTML', 'REST API'],
    githubUrl: 'https://github.com/kalyanram003/MealSuggestion'
  },
  {
    id: 'microcourses-lms',
    title: 'MicroCourses LMS',
    description: 'Modern React-based learning management system with course discovery, progress tracking, certificate generation, and role-based dashboards for learners, creators, and administrators.',
    badges: ['React 18', 'Tailwind CSS', 'Axios', 'React Router'],
    githubUrl: 'https://github.com/kalyanram003/LMS-Frontend'
  },
  {
    id: 'humanchain-ai-safety',
    title: 'HumanChain AI Safety Incident Log API',
    description: 'Spring Boot REST API for managing AI safety incident logs to support responsible AI development and compliance tracking.',
    badges: ['Spring Boot', 'REST API', 'Java', 'Incident Management'],
    githubUrl: 'https://github.com/kalyanram003/HumanChain-Ai-Safety'
  }
]

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Animate each card with staggered delay
          const cards = entry.target.querySelectorAll('[data-project-card]');
          cards.forEach((card, index) => {
            card.style.animation = `none`;
            setTimeout(() => {
              card.style.animation = `slideUpFade 0.6s ease-out forwards`;
            }, index * 150);
          });
        }
      });
    }, { threshold: 0.2 });

    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
        <motion.div variants={gridContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((p) => (
            <div key={p.id} data-project-card style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <ProjectCard title={p.title} description={p.description} badges={p.badges} liveUrl={p.liveUrl} githubUrl={p.githubUrl} />
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
