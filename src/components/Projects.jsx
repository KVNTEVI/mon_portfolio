import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import project1 from "../assets/project1.PNG";
import project2 from "../assets/project2.PNG";
import project3 from "../assets/project3.PNG";

const projects = [
  {
    title: "AgroLink Market",
    desc: "Marketplace agricole digitale",
    image: project1,
    github: "https://github.com/KVNTEVI/agrolink_market",
    demo: "", 
    tools: ["Laravel", "PHP", "Bootstrap", "MySQL"]
  },
  {
    title: "OpenMarketTogo",
    desc: "Marketplace générique pour divers produits",
    image: project2,
    github: "", 
    demo: "https://openmarkettg.infinityfree.me/",
    tools: ["WordPress", "HTML",  "CSS", "JavaScript"]
  },
  {
    title: "Lite",
    desc: "Site vitrine pour un startup de Référent Digital",
    image: project3,
    github: "", 
    demo: "https://lite.kesug.com/",
    tools: ["WordPress", "HTML",  "CSS", "JavaScript", "SEO" ]
  },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" style={{
      ...styles.section,
      padding: isMobile ? "60px 5%" : "80px 10%",
    }}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          ...styles.title,
          fontSize: isMobile ? "2rem" : "2.8rem",
          marginBottom: isMobile ? "2rem" : "3rem",
        }}
      >
        Projets
      </motion.h2>

      <div style={{
        ...styles.grid,
        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
        gap: isMobile ? "1.2rem" : "1.8rem",
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover="hover"
            whileTap="hover"
          >
            {/* Image avec zoom léger au hover */}
            <motion.img 
              src={project.image} 
              alt={project.title} 
              style={styles.image}
              variants={{ hover: { scale: 1.08 } }}
              transition={{ duration: 0.4 }}
            />

            {/* Overlay avec flou et contenu */}
            <motion.div
              variants={{ hover: { opacity: 1, backdropFilter: "blur(6px)" } }}
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                ...styles.overlay,
                background: isMobile ? "rgba(0, 0, 0, 0.82)" : "rgba(0, 0, 0, 0.78)",
              }}
            >
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.desc}</p>
              
              {/* Affichage des compétences (Tags) */}
              <div style={styles.toolsContainer}>
                {project.tools.map((tool, i) => (
                  <span key={i} style={styles.toolTag}>{tool}</span>
                ))}
              </div>
              
              {/* Boutons conditionnels */}
              <div style={styles.buttons}>
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={styles.btn}>GitHub</a>
                )}
                
                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" style={styles.btnOutline}>Demo</a>
                )}
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
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
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
    position: "relative",
    height: "280px", // Taille réduite pour plus de finesse
    borderRadius: "16px",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
    zIndex: 2,
  },
  projectTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "0.4rem",
  },
  projectDesc: {
    fontSize: "0.85rem",
    color: "#ccc",
    marginBottom: "0.8rem",
    lineHeight: "1.4",
  },
  toolsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.4rem",
    marginBottom: "1.2rem",
  },
  toolTag: {
    fontSize: "0.7rem",
    background: "rgba(59, 130, 246, 0.15)",
    color: "#22d3ee",
    padding: "3px 8px",
    borderRadius: "10px",
    border: "1px solid rgba(34, 211, 238, 0.2)",
  },
  buttons: {
    display: "flex",
    gap: "0.8rem",
  },
  btn: {
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    padding: "0.5rem 1.1rem",
    borderRadius: "50px",
    color: "#000",
    fontWeight: "bold",
    fontSize: "0.8rem",
    textDecoration: "none",
  },
  btnOutline: {
    background: "transparent",
    border: "1px solid #fff",
    padding: "0.5rem 1.1rem",
    borderRadius: "50px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.8rem",
    textDecoration: "none",
  },
};

export default Projects;