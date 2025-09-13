// src/Pages/Home.jsx
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../PageWrapper"
import "./Home.css"; // jika ada styling khusus halaman

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [selectedService, setSelectedService] = useState(null);

  const serviceDetails = {
    "Web Development": "We build responsive, modern, and scalable websites tailored to your business needs.",
    "Mobile Applications": "We develop cross-platform and native mobile apps that enhance user experience.",
    "Cloud Solutions": "We offer cloud integration, deployment, and management for secure and scalable systems."
  };

  return (
    <PageWrapper>
      <section className="home-hero">
        <div className="container">
          <h1 data-aos="fade-up">Multi Makmur Teknologi</h1>
          <h2 data-aos="fade-up" className="home-subtitle">Thriving in Technology Services</h2>
        </div>
      </section>

      <section id="services" className="company-section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-desc">We provide innovative technology solutions tailored to your business needs.</p>

        <AnimatePresence mode="wait">
          {!selectedService ? (
            <motion.div
              key="cards"
              className="service-cards"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {Object.keys(serviceDetails).map((service, idx) => (
                <motion.div
                  key={service}
                  className="service-card"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedService(service)}
                >
                  <h3>{service}</h3>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              className="service-detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <h3>{selectedService}</h3>
              <p>{serviceDetails[selectedService]}</p>
              <button className="contact-btn" onClick={() => setSelectedService(null)}>Back</button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="about" className="company-section alt-bg">
        <h2 className="section-title">About Us</h2>
        <p className="section-desc">Multi Makmur Teknologi is committed to delivering modern digital solutions that help businesses grow and thrive in the digital era.</p>
      </section>

      <section id="contact" className="company-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-desc">Let’s work together on your next big idea.</p>
        <button className="contact-btn" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Get in Touch</button>
      </section>
    </PageWrapper>
  );
};

export default Home;
