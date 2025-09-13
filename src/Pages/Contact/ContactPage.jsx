import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import PageWrapper from "../../Components/PageWrapper"
import "./Contact.css";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            Hubungi kami untuk konsultasi atau kerjasama. 
            Kami siap membantu mewujudkan ide besar Anda.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Email" required />
            <textarea rows="5" placeholder="Pesan Anda" required></textarea>
            <button type="submit">Kirim Pesan</button>
          </form>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}
