import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      {/* Halo lumineux en arrière-plan pour finir proprement le site */}
      <div style={styles.footerGlow}></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={styles.title}
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
        <a href="mailto:ton-email@exemple.com" style={styles.btn}>
          <FaEnvelope /> Envoyer un mail
        </a>

        <div style={styles.socialGroup}>
          <a href="#" style={styles.btnOutline} aria-label="GitHub">
            <FaGithub fontSize="1.5rem" />
          </a>

          <a href="#" style={styles.btnOutline} aria-label="LinkedIn">
            <FaLinkedin fontSize="1.5rem" />
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
    padding: "100px 10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // Centré pour plus d'impact
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
    fontSize: "3.5rem",
    fontWeight: "800",
    marginBottom: "1rem",
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    zIndex: 1,
  },
  subtitle: {
    color: "#a0a0a0",
    fontSize: "1.2rem",
    marginBottom: "3rem",
    maxWidth: "500px",
    fontWeight: "300",
    zIndex: 1,
  },
  buttons: {
    display: "flex",
    flexDirection: "column", // Stack mobile-friendly
    alignItems: "center",
    gap: "2rem",
    zIndex: 1,
  },
  socialGroup: {
    display: "flex",
    gap: "1.5rem",
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
    fontSize: "0.9rem",
    zIndex: 1,
  },
};

export default Contact;