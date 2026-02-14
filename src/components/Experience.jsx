import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Power BI Intern',
      company: 'Celebal Technologies',
      period: '2025',
      location: 'Remote',
      achievements: [
        'Built 5+ interactive dashboards',
        'Developed 20+ DAX measures and KPIs',
        'Implemented RLS and scheduled refresh',
        'Designed optimized star-schema models',
      ],
    },
    {
      title: 'Python & Data Science Trainer',
      company: '9i Technologies',
      period: '2024',
      location: 'Remote',
      achievements: [
        'Mentored 100+ students',
        'Designed 10+ analytics & ML projects',
        'Conducted sessions on Python, SQL, ML & Power BI',
      ],
    },
    {
      title: 'Data Science Trainee',
      company: '9i Technologies',
      period: '2023–2024',
      location: 'Remote',
      achievements: [
        'Performed EDA on 10k+ records',
        'Built ML models (75–85% accuracy)',
        'Created Excel & Power BI reports',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-primary-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-100 transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-primary-400 font-semibold text-lg mb-2">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start gap-2">
                          <span className="text-primary-400 mt-1.5">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

