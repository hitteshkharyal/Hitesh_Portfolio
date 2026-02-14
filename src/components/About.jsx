import { motion } from 'framer-motion'
import { FaChartLine, FaDatabase, FaCode, FaBrain } from 'react-icons/fa'

const About = () => {
  const expertise = [
    {
      icon: <FaChartLine className="text-3xl text-primary-400" />,
      title: 'Power BI Expertise',
      items: ['DAX, Data Modeling', 'RLS, Tabular Editor', 'Scheduled Refresh', 'Paginated Reports'],
    },
    {
      icon: <FaDatabase className="text-3xl text-primary-400" />,
      title: 'SQL & ETL',
      items: ['Database Design', 'ETL Workflows', 'Query Optimization'],
    },
    {
      icon: <FaCode className="text-3xl text-primary-400" />,
      title: 'Python & Analytics',
      items: ['Pandas, NumPy', 'Matplotlib', 'Scikit-learn', 'Data Visualization'],
    },
    {
      icon: <FaBrain className="text-3xl text-primary-400" />,
      title: 'BI Solutions',
      items: ['KPI Reporting', 'Forecasting', 'Dashboard Optimization', 'Secure Deployments'],
    },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a final semester MCA student with hands-on experience in Business Intelligence, 
              Data Analytics, and Machine Learning.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My expertise includes Power BI (DAX, Data Modeling, RLS, Tabular Editor, Scheduled Refresh, 
              Paginated Reports), SQL & ETL workflows, Python (Pandas, NumPy, Matplotlib, Scikit-learn), 
              KPI reporting & forecasting, and dashboard optimization & secure deployments.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have internship experience at <span className="text-primary-400 font-semibold">Celebal Technologies</span> where 
              I developed enterprise-level BI solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((skill, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

