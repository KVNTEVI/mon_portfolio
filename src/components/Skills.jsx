import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
// Icônes représentatives (Concepts plutôt que Logos)
import { 
  FaCode,           // Pour Frontend
  FaServer,         // Pour Backend
  FaDatabase,       // Pour Base de données
  FaMobileAlt,      // Pour Mobile
  FaTools           // Pour Outils
} from "react-icons/fa";

const skills = [
  { 
    icon: <FaCode />, 
    title: "Frontend", 
    desc: "React, HTML, CSS, JavaScript, Bootstrap",
    color: "#3b82f6" 
  },
  { 
    icon: <FaServer />, 
    title: "Backend", 
    desc: "PHP, Laravel",
    color: "#22d3ee" 
  },
  { 
    icon: <FaDatabase />, 
    title: "Base de données", 
    desc: "SQL, MySQL",
    color: "#3b82f6" 
  },
  { 
    icon: <FaMobileAlt />, 
    title: "Mobile", 
    desc: "Flutter",
    color: "#22d3ee" 
  },
  { 
    icon: <FaTools />, 
    title: "Outils", 
    desc: "Git, GitHub, WordPress, Figma, Canva, Trello",
    color: "#3b82f6" 
  },
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
  const [isMobile, setIsMobile] = useState(false);

  // Gestion du responsive
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="skills" style={{
      ...styles.section,
      padding: isMobile ? "60px 5%" : "100px 10%",
    }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          ...styles.title,
          fontSize: isMobile ? "2.2rem" : "3rem",
          marginBottom: isMobile ? "2.5rem" : "4rem",
        }}
      >
        Compétences
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
          gap: isMobile ? "1.5rem" : "2.5rem",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            style={styles.card}
            whileHover={{ 
              y: -10, 
              borderColor: skill.color, 
              boxShadow: `0 10px 30px ${skill.color}25` 
            }}
          >
            <div style={styles.iconContainer}>
              <div style={{ ...styles.icon, color: skill.color }}>
                {skill.icon}
              </div>
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
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  },
  grid: {
    display: "grid",
  },
  card: {
    background: "rgba(20, 20, 20, 0.8)",
    padding: "2.5rem 2rem",
    borderRadius: "24px",
    border: "1px solid #1f1f1f",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    position: "relative",
    overflow: "hidden",
  },
  iconContainer: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.03)",
    marginBottom: "1.5rem",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  icon: {
    fontSize: "2.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.75rem",
    letterSpacing: "-0.5px",
  },
  cardDesc: {
    color: "#a0a0a0",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    fontWeight: "300",
  },
};

export default Skills;