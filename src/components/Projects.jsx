import { motion } from "framer-motion";
import React from 'react';
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    title: "AgroLink Market",
    desc: "Marketplace agricole digitale",
    image: project1,
  },
  {
    title: "Portfolio Animé",
    desc: "Portfolio React moderne",
    image: project2,
  },
  {
    title: "App Mobile Flutter",
    desc: "Application mobile performante",
    image: project3,
  },
];

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={styles.title}
      >
        Projets
      </motion.h2>

      <div style={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover="hover"
          >
            {/* Image de fond avec transition au survol */}
            <motion.img 
              src={project.image} 
              alt={project.title} 
              style={styles.image}
              variants={{
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Overlay qui apparaît au survol */}
            <motion.div
              variants={{
                hover: { opacity: 1, backdropFilter: "blur(5px)" },
              }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={styles.overlay}
            >
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.desc}</p>
              
              <div style={styles.buttons}>
                <a href="#" style={styles.btn}>GitHub</a>
                <a href="#" style={styles.btnOutline}>Demo</a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    padding: "100px 10%",
    backgroundColor: "#000",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2.5rem",
  },
  card: {
    position: "relative",
    height: "250px", // Hauteur fixe pour l'uniformité
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.7)", // Fond sombre sur l'image
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  projectDesc: {
    fontSize: "1rem",
    color: "#a0a0a0",
    marginBottom: "1.5rem",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
  },
  btn: {
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    padding: "0.6rem 1.4rem",
    borderRadius: "50px",
    color: "#000",
    fontWeight: "bold",
    fontSize: "0.9rem",
    textDecoration: "none",
    transition: "0.3s ease",
  },
  btnOutline: {
    background: "transparent",
    border: "1px solid #fff",
    padding: "0.6rem 1.4rem",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.9rem",
    textDecoration: "none",
    transition: "0.3s ease",
  },
};

export default Projects;