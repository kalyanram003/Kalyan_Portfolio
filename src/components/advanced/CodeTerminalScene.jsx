import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// FloatingCodeBlock Component
function FloatingCodeBlock({ code, language, delay = 0, position = { x: 0, y: 0 } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 20px 40px rgba(0, 217, 255, 0.15)',
        borderColor: 'rgba(0, 217, 255, 0.5)'
      }}
      className="absolute w-56 sm:w-72 p-3 sm:p-4 rounded-lg backdrop-blur-md border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300 bg-gradient-to-br from-black/40 to-black/20"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <span className="text-xs font-medium text-cyan-400 tracking-widest">{language}</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
        </div>
      </div>
      
      <pre className="text-xs text-gray-300 overflow-hidden font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </motion.div>
  )
}

// CodeTerminalScene Display Component
function CodeTerminalSceneDisplay() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const codeSnippets = [
    {
      language: 'JAVA',
      code: `@SpringBootApplication
public class Application {
  public static void main(
    String[] args) {
    SpringApplication.run(
      Application.class, args);
  }
}`,
      position: { x: 5, y: 10 },
      delay: 0.2
    },
    {
      language: 'SPRING BOOT',
      code: `@RestController
@RequestMapping("/api")
public class UserController {
  @GetMapping("/users/{id}")
  public User getUser(
    @PathVariable Long id) {
    return userService.find(id);
  }
}`,
      position: { x: 65, y: 15 },
      delay: 0.4
    },
    {
      language: 'REACT',
      code: `function Dashboard() {
  const [data, setData] = 
    useState(null);
  
  return (
    <div className="flex">
      <Component data={data} />
    </div>
  );
}`,
      position: { x: 35, y: 45 },
      delay: 0.6
    },
    {
      language: 'SQL',
      code: `SELECT u.id, u.name, 
       COUNT(t.id) as tasks
FROM users u
LEFT JOIN tasks t 
  ON u.id = t.user_id
GROUP BY u.id
ORDER BY tasks DESC;`,
      position: { x: 10, y: 60 },
      delay: 0.8
    },
    {
      language: 'DOCKER',
      code: `FROM openjdk:17-slim
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar",
  "app.jar"]`,
      position: { x: 60, y: 65 },
      delay: 1.0
    }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-black/60 via-black/40 to-black/60 border border-cyan-500/10 backdrop-blur-sm">
      {/* Animated gradient mesh background */}
      <motion.div
        className="absolute inset-0 opacity-20 sm:opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 217, 255, 0.3) 0%, transparent 50%)`
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>

      {/* Floating code blocks */}
      {codeSnippets.map((snippet, index) => (
        <FloatingCodeBlock
          key={index}
          code={snippet.code}
          language={snippet.language}
          delay={snippet.delay}
          position={snippet.position}
        />
      ))}

      {/* Animated accent glow */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Corner accent lights */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl" />
    </div>
  )
}

// ASCII Logo Data
const ASCII_LOGOS = [
  {
    name: 'JAVA',
    art: `
    ██╗ █████╗ ██╗   ██╗ █████╗ 
    ██║██╔══██╗██║   ██║██╔══██╗
    ██║███████║██║   ██║███████║
    ██║██╔══██║╚██╗ ██╔╝██╔══██║
    ██║██║  ██║ ╚████╔╝ ██║  ██║
    ╚═╝╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝
    `,
    color: 'text-orange-400',
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    name: 'SPRING',
    art: `
    ███████╗██████╗ ██████╗ ██╗███╗   ██╗ ██████╗ 
    ██╔════╝██╔══██╗██╔══██╗██║████╗  ██║██╔════╝ 
    ███████╗██████╔╝██████╔╝██║██╔██╗ ██║██║  ███╗
    ╚════██║██╔═══╝ ██╔══██╗██║██║╚██╗██║██║   ██║
    ███████║██║     ██║  ██║██║██║ ╚████║╚██████╔╝
    ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
    `,
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    name: 'DOCKER',
    art: `
    ██████╗  ██████╗  ██████╗██╗  ██╗███████╗██████╗ 
    ██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗
    ██║  ██║██║   ██║██║     █████╔╝ █████╗  ██████╔╝
    ██║  ██║██║   ██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
    ██████╔╝╚██████╔╝╚██████╗██║  ██╗███████╗██║  ██║
    ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
    `,
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    name: 'SQL',
    art: `
    ███████╗ ██████╗ ██╗     
    ██╔════╝██╔═══██╗██║     
    ███████╗██║   ██║██║     
    ╚════██║██║▄▄ ██║██║     
    ███████║╚██████╔╝███████╗
    ╚══════╝ ╚══▀▀═╝ ╚══════╝
    `,
    color: 'text-purple-400',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    name: 'CLOUD',
    art: `
     ██████╗██╗      ██████╗ ██╗   ██╗██████╗ 
    ██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗
    ██║     ██║     ██║   ██║██║   ██║██║  ██║
    ██║     ██║     ██║   ██║██║   ██║██║  ██║
    ╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝
     ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ 
    `,
    color: 'text-indigo-400',
    gradient: 'from-indigo-500/20 to-blue-500/20'
  }
]

// Main Component
function CodeTerminalScene() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [fadeState, setFadeState] = useState('visible')

  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setFadeState('fading')
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ASCII_LOGOS.length)
        setFadeState('visible')
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering])

  const currentLogo = ASCII_LOGOS[currentIndex]

  return (
    <div 
      className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg sm:rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* ASCII Logo Background */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          isHovering ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      >
        <div className={`relative ${fadeState === 'fading' ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentLogo.gradient} blur-3xl`}></div>
          
          {/* ASCII Art */}
          <pre className={`relative font-mono text-xs sm:text-sm md:text-base lg:text-lg ${currentLogo.color} whitespace-pre leading-tight px-2`}>
            {currentLogo.art}
          </pre>
          
          {/* Technology name */}
          <div className="text-center mt-3 sm:mt-6">
            <span className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light tracking-widest">
              {currentLogo.name}
            </span>
          </div>
        </div>
      </div>

      {/* Code Terminal Scene (shown on hover) */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ${
          isHovering ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm pointer-events-none'
        }`}
      >
        <CodeTerminalSceneDisplay />
      </div>

      {/* Progress indicators */}
      <div className={`absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 transition-opacity duration-300 ${
        isHovering ? 'opacity-0' : 'opacity-100'
      }`}>
        {ASCII_LOGOS.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                : 'w-1 bg-slate-700'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default CodeTerminalScene
