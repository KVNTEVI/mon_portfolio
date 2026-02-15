import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import TAJ from '../assets/TAJ.png'; 

const Hero = () => {
  // Détecter si on est sur mobile pour ajuster les styles dynamiquement
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Appel initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" style={{
      ...styles.section,
      flexDirection: isMobile ? "column-reverse" : "row",
      padding: isMobile ? "80px 5%" : "0 10%",
      textAlign: isMobile ? "center" : "left",
      justifyContent: isMobile ? "center" : "space-between",
    }}>
      
      {/* Conteneur de gauche : Texte */}
      <div style={{
        ...styles.textContainer,
        alignItems: isMobile ? "center" : "flex-start",
        display: "flex",
        flexDirection: "column"
      }}>
        <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
            ...styles.title,
            // Tailles réduites ici :
            fontSize: isMobile ? "2.2rem" : "3.5rem", 
        }}
        >
        TEVI Adjé Josué
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            ...styles.subtitle,
            fontSize: isMobile ? "1.1rem" : "1.3rem",
          }}
        >
          Référent Digital || <span style={{ color: "#fff" }}>Développeur Web & Mobile</span>
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ marginTop: isMobile ? "1.5rem" : "2.5rem" }}
        >
          <a href="#projects" style={styles.button}>
            Voir mes travaux
          </a>
        </motion.div>
      </div>

      {/* Conteneur de droite : Photo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          ...styles.imageContainer,
          marginBottom: isMobile ? "2rem" : "0",
        }}
      >
        <div style={{
          ...styles.glowEffect,
          width: isMobile ? "200px" : "300px",
          height: isMobile ? "200px" : "300px",
        }}></div>
        <img 
          src={TAJ} 
          alt="TEVI Adjé Josué" 
          style={{
            ...styles.image,
            width: isMobile ? "250px" : "380px", // Plus petit sur mobile
            height: isMobile ? "250px" : "380px",
          }} 
        />
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  textContainer: {
    flex: 1,
    zIndex: 2,
  },
  title: {
    fontWeight: "800",
    margin: 0,
    lineHeight: "1.1",
    background: "linear-gradient(90deg, #3b82f6 0%, #22d3ee 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-2px",
  },
  subtitle: {
    marginTop: "1.5rem",
    color: "#a0a0a0",
    fontWeight: "300",
    maxWidth: "500px",
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    padding: "12px 30px",
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    color: "#000", 
    textDecoration: "none",
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
    transition: "0.3s ease",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  glowEffect: {
    position: "absolute",
    backgroundColor: "rgba(59, 130, 246, 0.25)",
    filter: "blur(100px)",
    borderRadius: "50%",
  },
  image: {
    borderRadius: "2.5rem",
    objectFit: "cover",
    border: "1px solid rgba(59, 130, 246, 0.4)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    position: "relative",
    zIndex: 1,
  },
};

export default Hero;