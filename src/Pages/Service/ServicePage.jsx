import React from "react";
import PageWrapper from "../../Components/PageWrapper"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import "./Service.css";

function ServicePage() {
  return (
    <>
    <Navbar />
    <PageWrapper>
      <section className="service">
        <h2>Our Services</h2>
          <div className="service-list">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>Membangun website modern dan responsif untuk bisnis Anda.</p>
            </div>
          <div className="service-card">
            <h3>Mobile App</h3>
            <p>Mengembangkan aplikasi Android/iOS yang user-friendly.</p>
          </div>
          <div className="service-card">
            <h3>IT Consulting</h3>
            <p>Konsultasi teknologi untuk solusi bisnis digital.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
    <Footer />
    </>
  );
}

export default ServicePage;
