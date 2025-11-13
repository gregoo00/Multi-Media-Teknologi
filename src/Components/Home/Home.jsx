import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicrochip, FaShieldAlt, FaHeadset, FaCheckCircle } from "react-icons/fa";
import PageWrapper from "../PageWrapper";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [selectedService, setSelectedService] = useState(null);
  const [selectedTestimony, setSelectedTestimony] = useState(null);

  const serviceDetails = {
    "Web Development": "We build responsive, modern, and scalable websites tailored to your business needs.",
    "Mobile Applications": "We develop cross-platform and native mobile apps that enhance user experience.",
    "Cloud Solutions": "We offer cloud integration, deployment, and management for secure and scalable systems.",
  };

  const advantages = [
    {
      icon: <FaMicrochip />,
      title: "Solusi Teknologi Tepat Guna",
      description:
        "Kami menyediakan layanan teknologi yang dirancang sesuai kebutuhan bisnis Anda, mulai dari pengembangan aplikasi, integrasi sistem, hingga solusi berbasis cloud.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Keamanan Data Terjamin",
      description:
        "Dengan standar keamanan tinggi, data dan sistem Anda akan terlindungi dari risiko kebocoran maupun serangan siber.",
    },
    {
      icon: <FaHeadset />,
      title: "Dukungan Teknis 24/7",
      description:
        "Tim support kami siap membantu kapan saja dengan respon cepat agar operasional bisnis Anda tetap berjalan tanpa hambatan.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Efisiensi dan Produktivitas",
      description:
        "Teknologi yang kami hadirkan membantu meningkatkan efisiensi kerja, meminimalisir biaya operasional, serta mempercepat proses bisnis Anda.",
    },
  ];

  const testimonies = [
    {
      name: "Mas Arip",
      shop: "Call Money Cell",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "#f39c12",
      quote: "Pelayanan cepat dan hasil memuaskan!",
    },
    {
      name: "Bu Diah",
      shop: "Warung Ikiaka",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      color: "#bdc3c7",
      quote: "Sistemnya membantu bisnis saya lebih tertata.",
    },
    {
      name: "Meisha",
      shop: "Barokah Cell",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      color: "#f1c40f",
      quote: "Aplikasinya mudah digunakan dan responsif.",
    },
    {
      name: "Mas Ahmad",
      shop: "Alfazri Cell",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      color: "#1abc9c",
      quote: "Sangat puas dengan layanan IT consulting!",
    },
    {
      name: "Mba Rumsiyah",
      shop: "Nasya Cell",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
      color: "#a3e4d7",
      quote: "Tim sangat komunikatif dan profesional.",
    },
    {
      name: "Ibu Omih",
      shop: "Aqila Cell",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      color: "#00c3ff",
      quote: "Rekomendasi banget untuk bisnis digital.",
    },
  ];

  return (
    <PageWrapper>
      <div className="home-wrapper">
        {/* ===== HERO ===== */}
        <section className="home-hero">
          <div className="container home-hero-content">
            <div className="hero-text" data-aos="fade-right">
              <h1>Multi Makmur Teknologi</h1>
              <h2 className="home-subtitle">Thriving in Technology Services</h2>
              <p className="hero-desc">
                Empowering your business with modern and scalable digital solutions — from web apps to cloud systems.
              </p>
              <button
                className="contact-btn"
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              >
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

        {/* ===== SERVICES ===== */}
        <section id="services" className="section">
          <h2 className="section-title">Our Services</h2>
          <p className="section-desc">
            We provide innovative technology solutions tailored to your business needs.
          </p>

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
                {Object.keys(serviceDetails).map((service) => (
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
                <button className="contact-btn" onClick={() => setSelectedService(null)}>
                  Back
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ===== ADVANTAGES ===== */}
        <section className="section advantage-section">
          <h2 className="section-title">
            Keunggulan Menggunakan Jasa <span>Multi Makmur Teknologi</span>
          </h2>
          <div className="advantage-grid">
            {advantages.map((adv, i) => (
              <div key={i} className="advantage-card">
                <div className="advantage-icon">{adv.icon}</div>
                <h3>{adv.title}</h3>
                <p>{adv.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="section about-section">
          <div className="about-container" data-aos="fade-up">
            <div className="about-text">
              <h2 className="section-title">About Us</h2>
              <p className="section-desc">
                At <strong>Multi Makmur Teknologi</strong>, we believe in empowering
                businesses through innovative and reliable digital solutions.
              </p>
              <ul className="about-list">
                <li>✅ Modern web and mobile development</li>
                <li>✅ Cloud and IT infrastructure solutions</li>
                <li>✅ Dedicated support and long-term partnership</li>
              </ul>
            </div>
            <div className="about-gallery">
              <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80" alt="Teamwork" />
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80" alt="Collaboration" />
              <img src="https://images.unsplash.com/photo-1581093588401-22d3d7b3a5d1?auto=format&fit=crop&w=800&q=80" alt="Innovation" />
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIES ===== */}
        <section className="section testimony">
          <h2 className="section-title">Testimonies</h2>
          {!selectedTestimony ? (
            <div className="testimony-list">
              {testimonies.map((item, i) => (
                <div
                  key={i}
                  className="testimony-card"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setSelectedTestimony(item)}
                >
                  <img src={item.img} alt={item.name} className="testimony-img" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.shop}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="testimony-detail">
              <img src={selectedTestimony.img} alt={selectedTestimony.name} className="testimony-detail-img" />
              <h3>{selectedTestimony.name}</h3>
              <p><strong>{selectedTestimony.shop}</strong></p>
              <blockquote>"{selectedTestimony.quote}"</blockquote>
              <button className="back-btn" onClick={() => setSelectedTestimony(null)}>← Back</button>
            </div>
          )}
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
