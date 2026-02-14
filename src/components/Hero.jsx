import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaDownload, FaArrowRight } from 'react-icons/fa'

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      let startTime = null
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/file/d/1EpgvsGgX_bKVlBKVe0eZwXr9F19q-cXE/view?usp=sharing' 
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const stats = [
    { value: 7, suffix: '+', label: 'Dashboards Built' },
    { value: 100, suffix: '+', label: 'Students Mentored' },
    { value: 7, suffix: '+', label: 'Major Projects' },
    { value: 3, suffix: '+', label: 'Certifications (2024)' },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-primary-400 font-semibold text-lg">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="text-white">Hitesh</span>{' '}
              <span className="text-gradient">Kumar</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-6"
            >
              Data Analyst | Power BI Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 leading-relaxed"
            >
              Detail-oriented Data Analyst and Power BI Developer with hands-on experience in dashboard development, data modeling, and predictive analytics. Currently pursuing MCA (Final Semester) with strong expertise in Power BI, SQL, Python, and Excel. Skilled in DAX, ETL processes, KPI development, and business intelligence reporting.
              Passionate about transforming raw data into actionable insights to support data-driven decision-making.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToProjects}
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={downloadResume}
                className="px-8 py-4 glass border-2 border-primary-500/50 rounded-lg font-semibold text-primary-400 hover:bg-primary-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaDownload />
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

