import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  { icon: <FaReact />, title: "Frontend", desc: "React, HTML, CSS, JavaScript" },
  { icon: <FaNodeJs />, title: "Backend", desc: "Node.js, API REST" },
  { icon: <FaDatabase />, title: "Base de données", desc: "MySQL, PostgreSQL" },
  { icon: <FaMobileAlt />, title: "Mobile", desc: "Flutter" },
  { icon: <FaGitAlt />, title: "Outils", desc: "Git, GitHub" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={styles.title}
      >
        Compétences
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={styles.grid}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            style={styles.card}
            whileHover={{ 
              y: -10, 
              borderColor: "#3b82f6", 
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)" 
            }}
          >
            <div style={styles.iconContainer}>
               <div style={styles.icon}>{skill.icon}</div>
            </div>
            <h3 style={styles.cardTitle}>{skill.title}</h3>
            <p style={styles.cardDesc}>{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    padding: "100px 10%",
    backgroundColor: "#000",
    color: "#fff",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "4rem",
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2.5rem",
  },
  card: {
    background: "rgba(20, 20, 20, 0.8)", // Fond sombre translucide
    padding: "2.5rem 2rem",
    borderRadius: "20px",
    border: "1px solid #1f1f1f",
    textAlign: "center",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },
  iconContainer: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    height: "70px",
    borderRadius: "15px",
    background: "rgba(59, 130, 246, 0.1)",
    marginBottom: "1.5rem",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#3b82f6", // Bleu principal
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.75rem",
    letterSpacing: "-0.5px",
  },
  cardDesc: {
    color: "#a0a0a0",
    fontSize: "1rem",
    lineHeight: "1.5",
    fontWeight: "300",
  },
};

export default Skills;