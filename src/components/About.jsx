import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" style={styles.section}>
      {/* Conteneur pour centrer et aligner */}
      <div style={styles.container}>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.title}
        >
          A propos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.contentWrapper}
        >
          <p style={styles.text}>
            Je suis <span style={styles.highlight}>TEVI Adjé Josué</span>, développeur passionné par la création
            d’interfaces modernes, performantes et animées.
          </p>
          <p style={styles.text}>
            Mon approche combine le <span style={styles.highlight}>design minimaliste</span> et le développement rigoureux pour construire des expériences numériques qui marquent les esprits.
          </p>
          
          {/* Un petit indicateur visuel (ligne bleue) */}
          <div style={styles.accentLine}></div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "80vh", // Un peu moins que 100 pour une transition plus naturelle
    padding: "100px 10%",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },
  container: {
    maxWidth: "900px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "2rem",
    // Dégradé bleu comme la section Hero
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  },
  contentWrapper: {
    borderLeft: "1px solid rgba(59, 130, 246, 0.3)", // Ligne fine à gauche pour le style
    paddingLeft: "2rem",
  },
  text: {
    fontSize: "1.25rem",
    color: "#a0a0a0",
    lineHeight: "1.8",
    marginBottom: "1.5rem",
    fontWeight: "300",
  },
  highlight: {
    color: "#fff",
    fontWeight: "500",
  },
  accentLine: {
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    marginTop: "2rem",
    borderRadius: "2px",
  },
};

export default About;