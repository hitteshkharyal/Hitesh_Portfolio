import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaFilePdf, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'hiteshkharyal@gmail.com', 
      link: 'mailto:hiteshkharyal@gmail.com',
      color: 'text-red-400',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Mobile',
      value: '7876586478', 
      link: 'tel:7876586478',
      color: 'text-green-400',
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hitesh-kumar-96108220b/', 
      link: 'https://www.linkedin.com/in/hitesh-kumar-96108220b/',
      color: 'text-blue-400',
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      value: 'github.com/hiteshkharyal', 
      link: 'https://github.com/hiteshkharyal',
      color: 'text-gray-400',
    },
  ]

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Update with actual resume path
    link.download = 'Hitesh_Kumar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to Data Analyst / BI Developer opportunities
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card text-center group cursor-pointer"
              >
                <div className={`${method.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{method.label}</h3>
                <p className="text-gray-400 text-sm break-all">{method.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card text-center"
          >
            <div className="flex flex-col items-center gap-4">
              <FaFilePdf className="text-4xl text-red-400" />
              <h3 className="text-2xl font-bold text-white mb-2">Download Resume</h3>
              <p className="text-gray-400 mb-6">
                Get a copy of my resume to learn more about my experience and skills
              </p>
              <button
                onClick={downloadResume}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <FaDownload />
                Download PDF
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

