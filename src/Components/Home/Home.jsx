// src/Pages/Home.jsx
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../PageWrapper"
import "./Home.css";

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
        <div className="container home-hero-content">
          <div className="hero-text" data-aos="fade-right">
            <h1>Multi Makmur Teknologi</h1>
            <h2 className="home-subtitle">Thriving in Technology Services</h2>
            <p className="hero-desc">
              Empowering your business with modern and scalable digital solutions — 
              from web apps to cloud systems.
            </p>
            <button className="contact-btn" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
              Get Started
            </button>
          </div>

          <div className="hero-image" data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
              alt="Product showcase" 
            />
          </div>
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

      <section id="about" className="about-section">
        <div className="about-container" data-aos="fade-up">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <p className="section-desc">
              At <strong>Multi Makmur Teknologi</strong>, we believe in empowering
              businesses through innovative and reliable digital solutions.
              Our team of passionate developers, designers, and strategists
              work together to build technology that transforms ideas into reality.
            </p>
            <ul className="about-list">
              <li>✅ Modern web and mobile development</li>
              <li>✅ Cloud and IT infrastructure solutions</li>
              <li>✅ Dedicated support and long-term partnership</li>
            </ul>
          </div>

          <div className="about-gallery" data-aos="fade-left">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80" alt="Teamwork" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80" alt="Collaboration" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1581093588401-22d3d7b3a5d1?auto=format&fit=crop&w=800&q=80" alt="Innovation" />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
