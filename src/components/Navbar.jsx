import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Détection du format mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: 'A propos', id: 'about' },
    { name: 'Compétences', id: 'skills' },
    { name: 'Projets', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={styles.nav}
      >
        {/* Logo */}
        <motion.div 
          style={styles.logo}
          whileHover={{ scale: 1.05 }}
        >
          <span style={styles.logoText}>T.A.J</span>
        </motion.div>

        {/* Liens Desktop */}
        {!isMobile ? (
          <ul style={styles.links}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.id}`} 
                  style={styles.link}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#22d3ee";
                    e.target.style.textShadow = "0 0 10px rgba(34, 211, 238, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#a0a0a0";
                    e.target.style.textShadow = "none";
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          /* Bouton Hamburger sur Mobile */
          <div onClick={() => setIsOpen(!isOpen)} style={styles.hamburger}>
            <div style={{...styles.line, transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none"}}></div>
            <div style={{...styles.line, opacity: isOpen ? 0 : 1}}></div>
            <div style={{...styles.line, transform: isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none"}}></div>
          </div>
        )}
      </motion.nav>

      {/* Menu Mobile Fullscreen */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={styles.mobileMenu}
          >
            {menuItems.map((item, index) => (
              <motion.a 
                key={index} 
                href={`#${item.id}`} 
                onClick={() => setIsOpen(false)}
                style={styles.mobileLink}
                whileHover={{ scale: 1.1, color: "#3b82f6" }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0, left: 0, width: "100%",
    padding: "1.2rem 10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    zIndex: 2000,
    boxSizing: "border-box",
  },
  logo: {
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "0 15px", height: "45px", borderRadius: "12px",
    background: "rgba(59, 130, 246, 0.05)", border: "1px solid rgba(59, 130, 246, 0.2)",
    cursor: "pointer",
  },
  logoText: {
    fontWeight: "900", fontSize: "1.2rem",
    background: "linear-gradient(135deg, #fff 0%, #3b82f6 50%, #22d3ee 100%)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    fontFamily: "'Inter', sans-serif", letterSpacing: "2px",
  },
  links: {
    display: "flex",
    gap: "3rem", 
    listStyle: "none", 
    margin: 0, 
    padding: 0,
  },
  link: {
    textDecoration: "none", 
    color: "#a0a0a0", 
    fontSize: "0.9rem",
    fontWeight: "600", 
    transition: "all 0.3s ease", 
    letterSpacing: "1px",
  },
  hamburger: {
    display: "flex", 
    flexDirection: "column", 
    gap: "6px", 
    cursor: "pointer", 
    zIndex: 3000,
  },
  line: {
    width: "25px", 
    height: "2px", 
    background: "#fff", 
    transition: "0.3s ease",
  },
  mobileMenu: {
    position: "fixed", 
    top: 0, left: 0, 
    width: "100%", 
    height: "100vh",
    background: "rgba(0, 0, 0, 0.95)", 
    backdropFilter: "blur(10px)",
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center", 
    gap: "2.5rem", 
    zIndex: 1500,
  },
  mobileLink: {
    fontSize: "1.8rem", 
    color: "#fff", 
    textDecoration: "none", 
    fontWeight: "800",
    textTransform: "uppercase", 
    letterSpacing: "2px",
  },
};

export default Navbar;