import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="contact" style={{
      ...styles.section,
      padding: isMobile ? "80px 5%" : "100px 10%",
    }}>
      <div style={styles.footerGlow}></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          ...styles.title,
          fontSize: isMobile ? "2.2rem" : "3.5rem",
        }}
      >
        Parlons de votre projet
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={styles.subtitle}
      >
        Disponible pour de nouvelles opportunités ou une simple discussion.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        style={styles.buttons}
      >
        {/* Bouton Email Principal */}
        <a href="mailto:ton-email@exemple.com" style={styles.btn}>
          <FaEnvelope /> Envoyer un mail
        </a>

        {/* Groupe de réseaux sociaux avec LinkedIn en bleu */}
        <div style={{
          ...styles.socialGroup,
          flexWrap: isMobile ? "wrap" : "nowrap",
          justifyContent: "center"
        }}>

          {/* LinkedIn - Bleu */}
          <a href="https://www.linkedin.com/in/adjé-josué-tevi-9226a12b4" target="_blank" rel="noopener noreferrer" style={styles.btnLinkedin} aria-label="LinkedIn">
            <FaLinkedin fontSize="1.6rem" />
          </a>

          {/* GitHub - Blanc/Gris */}
          <a href="https://github.com/KVNTEVI" target="_blank" rel="noopener noreferrer" style={styles.btnOutline} aria-label="GitHub">
            <FaGithub fontSize="1.5rem" />
          </a>
          {/* WhatsApp - Vert */}
          <a href="https://wa.me/+22897909802" target="_blank" rel="noopener noreferrer" style={styles.btnWhatsapp} aria-label="WhatsApp">
            <FaWhatsapp fontSize="1.8rem" />
          </a>
        </div>
      </motion.div>

      <footer style={styles.footerText}>
        © {new Date().getFullYear()} — TEVI Adjé Josué
      </footer>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
  },
  footerGlow: {
    position: "absolute",
    bottom: "-150px",
    width: "600px",
    height: "300px",
    background: "rgba(59, 130, 246, 0.15)",
    filter: "blur(120px)",
    borderRadius: "50%",
    zIndex: 0,
  },
  title: {
    fontWeight: "800",
    marginBottom: "1rem",
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    zIndex: 1,
    lineHeight: 1.2,
  },
  subtitle: {
    color: "#a0a0a0",
    fontSize: "1.1rem",
    marginBottom: "3rem",
    maxWidth: "500px",
    fontWeight: "300",
    zIndex: 1,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    zIndex: 1,
  },
  socialGroup: {
    display: "flex",
    gap: "1.2rem",
  },
  btn: {
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    padding: "1rem 2.5rem",
    borderRadius: "50px",
    color: "#000",
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
    transition: "transform 0.3s ease",
  },
  btnWhatsapp: {
    border: "1px solid #25D366",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    color: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.3s ease",
    backgroundColor: "rgba(37, 211, 102, 0.05)",
  },
  btnLinkedin: {
    border: "1px solid #0077B5", // Bleu LinkedIn
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    color: "#0077B5", // Couleur LinkedIn
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.3s ease",
    backgroundColor: "rgba(0, 119, 181, 0.05)",
  },
  btnOutline: {
    border: "1px solid #333",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "all 0.3s ease",
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  footerText: {
    marginTop: "5rem",
    color: "#444",
    fontSize: "0.8rem",
    zIndex: 1,
    letterSpacing: "1px",
  },
};

export default Contact;