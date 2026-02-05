import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap } from "react-icons/fa";

const About = () => {
  const formations = [
    {
      etablissement: "Académie Digitale du Numérique (ADN Golfe1)",
      diplome: "Formation de Référent Digital & Développeur Web",
      periode: "Mars 2025 - Decembre 2025",
      description: "Spécialisation en développement fullstack et transformation numérique."
    },
    {
      etablissement: "Université de Lomé",
      diplome: "Licence Fondamentale en Sciences de Gestion",
      specialite: "Organisation et Gestion des Ressources Humaines",
      periode: "2018 - 2022",
      description: "Apprentissage des structures organisationnelles et management humain."
    }
  ];

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* Titre principal */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.title}
        >
          À propos
        </motion.h2>

        {/* Description Profil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.contentWrapper}
        >
          <p style={styles.text}>
            Je suis <span style={styles.highlight}>TEVI Adjé Josué</span>, Référent Digital et Développeur Web, passionné par l’innovation et la résolution de problématiques complexes.
          </p>
          <p style={styles.text}>
            J’accompagne les entreprises et les équipes dans la conception et le déploiement de solutions digitales <span style={styles.highlight}>performantes</span>, créatrices de valeur et adaptées aux enjeux de la transformation numérique.
          </p>
        </motion.div>

        {/* Section Parcours / Formation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={styles.formationContainer}
        >
          <h3 style={styles.subTitle}>Parcours Académique</h3>
          
          <div style={styles.timeline}>
            {formations.map((f, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.dot}></div>
                <div style={styles.timelineContent}>
                  <span style={styles.date}>{f.periode}</span>
                  <h4 style={styles.school}>{f.etablissement}</h4>
                  <p style={styles.degree}>
                    {f.diplome} {f.specialite && <><br /><span style={styles.specialite}>{f.specialite}</span></>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Actions (Bouton CV) */}
        <div style={styles.actions}>
          <motion.a 
            href="/TEVI Adjé Josué CV.pdf" 
            download="CV_TEVI_Josue.pdf"
            style={styles.cvButton}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload size={18} /> Télécharger mon CV
          </motion.a>
          <div style={styles.accentLine}></div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    padding: "100px 10%",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  container: {
    maxWidth: "900px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "2rem",
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  },
  contentWrapper: {
    borderLeft: "2px solid rgba(59, 130, 246, 0.3)",
    paddingLeft: "2rem",
    marginBottom: "3rem",
  },
  text: {
    fontSize: "1.1rem",
    color: "#a0a0a0",
    lineHeight: "1.7",
    marginBottom: "1rem",
    fontWeight: "300",
  },
  highlight: {
    color: "#fff",
    fontWeight: "500",
  },
  subTitle: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    color: "#fff",
    fontWeight: "600",
  },
  formationContainer: {
    marginBottom: "3rem",
  },
  timeline: {
    borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
    marginLeft: "10px",
    paddingLeft: "25px",
    position: "relative",
  },
  timelineItem: {
    position: "relative",
    marginBottom: "2rem",
  },
  dot: {
    position: "absolute",
    left: "-31px",
    top: "5px",
    width: "11px",
    height: "11px",
    backgroundColor: "#3b82f6",
    borderRadius: "50%",
    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
  },
  date: {
    fontSize: "0.85rem",
    color: "#3b82f6",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  school: {
    fontSize: "1.2rem",
    margin: "5px 0",
    color: "#fff",
  },
  degree: {
    fontSize: "1rem",
    color: "#a0a0a0",
    lineHeight: "1.4",
  },
  specialite: {
    fontSize: "0.9rem",
    color: "#22d3ee",
    fontStyle: "italic",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    marginTop: "1rem",
    flexWrap: "wrap",
  },
  cvButton: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 24px",
    border: "1px solid #3b82f6",
    borderRadius: "50px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "0.3s ease",
    cursor: "pointer",
  },
  accentLine: {
    width: "60px",
    height: "4px",
    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
    borderRadius: "2px",
  },
};

export default About;