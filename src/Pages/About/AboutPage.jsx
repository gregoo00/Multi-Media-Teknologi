import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import PageWrapper from "../../Components/PageWrapper"
import "./About.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="about">
          <h2>About Us</h2>
          <p>
            Multi Makmur Teknologi berkomitmen untuk menghadirkan solusi digital 
            modern yang membantu bisnis berkembang di era digital. 
            Kami percaya teknologi adalah kunci menuju efisiensi, inovasi, 
            dan pertumbuhan yang berkelanjutan.
          </p>

          <div className="about-values">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>
                Kami selalu mencari cara baru untuk menciptakan solusi yang 
                lebih baik dan efektif.
              </p>
            </div>
            <div className="value-card">
              <h3>Commitment</h3>
              <p>
                Kami berkomitmen memberikan layanan terbaik kepada setiap klien 
                dengan sepenuh hati.
              </p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>
                Kepercayaan adalah dasar kerja kami — selalu transparan dan 
                profesional.
              </p>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
