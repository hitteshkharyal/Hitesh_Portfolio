import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { 
  FaChartBar, 
  FaRobot, 
  FaLaptopCode, 
  FaDatabase,
  FaMicrophone,
  FaFilm,
  FaTv,
  FaCloudSun,
  FaStore
} from 'react-icons/fa'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: 'Sesame International – Sales Dashboard',
      category: 'Power BI',
      description: 'Built an end-to-end sales analytics dashboard analyzing product, region, and customer performance. Implemented DAX forecasting, star-schema modeling, RLS, and scheduled refresh.',
      tech: ['Power BI', 'DAX', 'Tabular Editor'],
      icon: <FaChartBar className="text-3xl" />,
      link: 'https://github.com/hitteshkharyal/CSI-Prpject-Power-Bi.git',
      github: 'https://github.com/hitteshkharyal/CSI-Prpject-Power-Bi.git',
    },
    {
      title: 'Railway Data Analysis – Streamlit App',
      category: 'Web Development',
      description: 'Cleaned and structured railway data (train number, origin, destination, running days). Built interactive visualizations and deployed a Streamlit analytics app.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
      icon: <FaDatabase className="text-3xl" />,
      link: 'https://railwaydataanalysisbyhitesh.streamlit.app/',
      github: 'https://github.com/hitteshkharyal/Railway_data_Analysis.git',
    },
    {
      title: 'Credit Card Default Prediction',
      category: 'Machine Learning',
      description: 'Built a predictive ML model to detect credit card default risk using classification algorithms. Performed EDA, feature engineering, and achieved strong accuracy using logistic regression and decision trees.',
      tech: ['Python', 'Scikit-learn', 'Pandas'],
      icon: <FaRobot className="text-3xl" />,
      link: 'https://github.com/hitteshkharyal/credit_card_default.git',
      github: 'https://github.com/hitteshkharyal/credit_card_default.git',
    },
    {
      title: 'Business Analytics Dashboard',
      category: 'Power BI',
      description: 'Developed interactive business analytics dashboards combining Streamlit and Power BI visualizations. Implemented KPI tracking, filtering, and trend analysis for business decision-making.',
      tech: ['Power BI', 'Python', 'Streamlit'],
      icon: <FaChartBar className="text-3xl" />,
      link: 'https://hitteshkharyal-analytics-dashboard-app-czuqo3.streamlit.app/',
      github: 'https://github.com/hitteshkharyal/Business_Analytics_Dashboard.git',
    },
    {
      title: 'Movie Booking Web Application',
      category: 'Web Development',
      description: 'Developed a full-stack movie booking platform with seat selection, booking management, and payment integration.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      icon: <FaFilm className="text-3xl" />,
      link: 'https://movie-booking-app.vercel.app/',
      github: 'https://github.com/hiteshkharyal/movie-booking-app',
    },
    {
      title: 'Voice-Controlled News Web App',
      category: 'Web Development',
      description: 'Built a voice-enabled web application integrating speech recognition and real-time news fetching using web scraping.',
      tech: ['Python', 'BeautifulSoup', 'Speech Recognition'],
      icon: <FaMicrophone className="text-3xl" />,
      link: 'https://hitteshkharyal-newsanalysis-frontend-aunxp7.streamlit.app/',
      github: 'https://github.com/hitteshkharyal/newsAnalysis.git',
    },
    {
      title: 'Netflix OTT Dashboard',
      category: 'Power BI',
      description: 'Developed an interactive OTT analytics dashboard analyzing content distribution, genre trends, ratings, and release patterns. Implemented advanced DAX calculations and dynamic filtering to visualize platform performance insights.',
      tech: ['Power BI', 'DAX', 'Data Modeling'],
      icon: <FaTv className="text-3xl" />,
      link: null,
      github: 'https://github.com/hitteshkharyal/Ott-Dashboard.git',
    },
    {
      title: 'Weather App',
      category: 'Web Development',
      description: 'Built a responsive weather forecasting web application that fetches real-time weather data using APIs. Implemented dynamic UI updates based on location search and weather conditions.',
      tech: ['React', 'API Integration', 'JavaScript', 'CSS'],
      icon: <FaCloudSun className="text-3xl" />,
      link: 'https://weatherlyhitesh.netlify.app/',
      github: 'https://github.com/hitteshkharyal/Weather_App.git',
    },
    {
      title: 'Sweet Shop Management App',
      category: 'Web Development',
      description: 'Developed a web-based management system for handling product inventory, pricing, and order management. Designed an interactive interface to streamline shop operations and improve data organization.',
      tech: ['React', 'JavaScript', 'Local Storage'],
      icon: <FaStore className="text-3xl" />,
      link: 'https://sweetsshop-hitesh.netlify.app',
      github: 'https://github.com/hitteshkharyal/Sweet_Shop_Management_App.git',
    },
  ]

  const filters = ['All', 'Power BI', 'Machine Learning', 'Web Development']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/50'
                  : 'glass text-gray-300 hover:text-primary-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group cursor-pointer h-full flex flex-col"
            >
              <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                  >
                    <FaGithub />
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

