import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import FloatingCodeBlock from './FloatingCodeBlock'

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

function CodeTerminalScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

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
    <div 
      className="relative w-full h-96 rounded-xl overflow-hidden bg-gradient-to-br from-black/60 via-black/40 to-black/60 border border-cyan-500/10 backdrop-blur-sm"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated gradient mesh background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: isHovering 
            ? 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 217, 255, 0.3) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 50%, rgba(0, 217, 255, 0.1) 0%, transparent 70%)'
        }}
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating grid pattern */}
      <motion.svg
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
      </motion.svg>

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

export default CodeTerminalScene
