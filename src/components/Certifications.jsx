import { motion } from 'framer-motion'
import { FaCertificate, FaCalendarAlt, FaAward } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: 'AI & ML, Junior Data Analyst',
      issuer: 'ICEI & Ministry of Electronics & IT',
      year: '2024',
      icon: <FaAward className="text-3xl" />,
    },
    {
      title: 'Python & Data Science',
      issuer: '9i Technologies',
      year: '2024',
      icon: <FaCertificate className="text-3xl" />,
    },
    {
      title: 'Web Development',
      issuer: 'NSDC',
      year: '2023',
      icon: <FaCertificate className="text-3xl" />,
    },
  ]

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card text-center group"
            >
              <div className="text-primary-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-3 text-sm">
                <FaCalendarAlt />
                <span>{cert.year}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

