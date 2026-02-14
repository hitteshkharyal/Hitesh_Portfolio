import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/hitesh-kumar-96108220b/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/hiteshkharyal', label: 'GitHub' },
    { icon: <FaEnvelope />, href: 'mailto:hiteshkharyal@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} Hitesh Kumar. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-primary-400 transition-colors text-xl"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            Built with React + Vite + Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

