import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Section active

  const menuItems = [
    { name: 'A propos', id: 'about' },
    { name: 'Compétences', id: 'skills' },
    { name: 'Projets', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  // 1. Détection du format mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Logique du Scroll Spy (Détection de la section active)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Déclenche quand la section est au milieu de l'écran
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // On observe chaque section par son ID
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={styles.nav}
      >
        <motion.div 
          style={styles.logo}
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span style={styles.logoText}>T.A.J</span>
        </motion.div>

        {!isMobile ? (
          <ul style={styles.links}>
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <li key={index} style={{ position: "relative" }}>
                  <a 
                    href={`#${item.id}`} 
                    style={{
                      ...styles.link,
                      color: isActive ? "#22d3ee" : "#a0a0a0",
                    }}
                  >
                    {item.name}
                    
                    {/* Barre de soulignement animée */}
                    {isActive && (
                      <motion.div 
                        layoutId="underline"
                        style={styles.underline}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <div onClick={() => setIsOpen(!isOpen)} style={styles.hamburger}>
            <div style={{...styles.line, transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"}}></div>
            <div style={{...styles.line, opacity: isOpen ? 0 : 1}}></div>
            <div style={{...styles.line, transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"}}></div>
          </div>
        )}
      </motion.nav>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            style={styles.mobileMenu}
          >
            {menuItems.map((item, index) => (
              <motion.a 
                key={index} 
                href={`#${item.id}`} 
                onClick={() => setIsOpen(false)}
                style={{
                    ...styles.mobileLink,
                    color: activeSection === item.id ? "#22d3ee" : "#fff"
                }}
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
    padding: "0.8rem 10%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    zIndex: 2000,
  },
  logo: {
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "0 12px", height: "38px", borderRadius: "10px",
    background: "rgba(59, 130, 246, 0.05)", border: "1px solid rgba(59, 130, 246, 0.2)",
    cursor: "pointer",
  },
  logoText: {
    fontWeight: "900", fontSize: "1.05rem",
    background: "linear-gradient(135deg, #fff 0%, #3b82f6 50%, #22d3ee 100%)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    fontFamily: "'Inter', sans-serif", letterSpacing: "1.5px",
  },
  links: {
    display: "flex",
    gap: "2.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    fontSize: "0.85rem",
    fontWeight: "600",
    transition: "color 0.3s ease",
    letterSpacing: "0.5px",
    position: "relative",
    padding: "5px 0",
  },
  underline: {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: "2px",
    background: "#22d3ee",
    borderRadius: "2px",
    boxShadow: "0 0 8px rgba(34, 211, 238, 0.6)",
  },
  hamburger: {
    display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer", zIndex: 3000,
  },
  line: {
    width: "22px", height: "2px", background: "#fff", transition: "0.3s ease",
  },
  mobileMenu: {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
    background: "rgba(0, 0, 0, 0.98)", backdropFilter: "blur(15px)",
    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
    gap: "2.5rem", zIndex: 1500,
  },
  mobileLink: {
    fontSize: "1.8rem", textDecoration: "none", fontWeight: "800",
    textTransform: "uppercase", letterSpacing: "2px", transition: "color 0.3s ease",
  },
};

export default Navbar;