import { motion } from 'framer-motion'
import { 
  FaChartBar, 
  FaDatabase, 
  FaCode, 
  FaBrain,
  FaTable,
  FaChartLine,
  FaServer,
  FaPython,
  FaJs,
  FaFileCode
} from 'react-icons/fa'
import { SiTableau, SiPandas, SiNumpy } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Business Intelligence',
      icon: <FaChartBar className="text-2xl text-primary-400" />,
      skills: [
        { name: 'Power BI', icon: <FaChartBar className="text-xl" /> },
        { name: 'Tableau', icon: <SiTableau className="text-xl" /> },
        { name: 'Power BI Service', icon: <FaChartLine className="text-xl" /> },
      ],
    },
    {
      title: 'BI Concepts',
      icon: <FaTable className="text-2xl text-primary-400" />,
      skills: [
        { name: 'DAX', icon: <FaFileCode className="text-xl" /> },
        { name: 'Data Modeling', icon: <FaDatabase className="text-xl" /> },
        { name: 'ETL', icon: <FaServer className="text-xl" /> },
        { name: 'KPI Development', icon: <FaChartLine className="text-xl" /> },
        { name: 'RLS', icon: <FaFileCode className="text-xl" /> },
        { name: 'Tabular Editor', icon: <FaFileCode className="text-xl" /> },
        { name: 'Scheduled Refresh', icon: <FaServer className="text-xl" /> },
        { name: 'Paginated Reports', icon: <FaChartBar className="text-xl" /> },
      ],
    },
    {
      title: 'Programming',
      icon: <FaCode className="text-2xl text-primary-400" />,
      skills: [
        { name: 'Python', icon: <FaPython className="text-xl" /> },
        { name: 'SQL', icon: <FaDatabase className="text-xl" /> },
        { name: 'JavaScript', icon: <FaJs className="text-xl" /> },
      ],
    },
    {
      title: 'ML & Analytics',
      icon: <FaBrain className="text-2xl text-primary-400" />,
      skills: [
        { name: 'Pandas', icon: <SiPandas className="text-xl" /> },
        { name: 'NumPy', icon: <SiNumpy className="text-xl" /> },
        { name: 'Matplotlib', icon: <FaChartLine className="text-xl" /> },
        { name: 'Scikit-learn', icon: <FaBrain className="text-xl" /> },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card"
            >
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center p-4 bg-primary-500/10 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all cursor-pointer group"
                  >
                    <div className="text-primary-400 mb-2 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 text-sm text-center font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

