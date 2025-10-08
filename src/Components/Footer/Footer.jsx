import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>HOSTING</h3>
          <ul>
            <li>Web hosting</li>
            <li>Hosting untuk WordPress</li>
            <li>VPS hosting</li>
            <li>Email hosting</li>
            <li>Cloud hosting</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>DOMAIN</h3>
          <ul>
            <li>Cari domain murah</li>
            <li>Gratis domain</li>
            <li>WHOIS</li>
            <li>Transfer domain</li>
            <li>Beli domain</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>TOOL</h3>
          <ul>
            <li>Website Builder</li>
            <li>AI Website Builder</li>
            <li>AI Logo Generator</li>
            <li>Link in Bio</li>
            <li>API Hostinger</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>INFORMASI</h3>
          <ul>
            <li>Harga</li>
            <li>Review</li>
            <li>Program Afiliasi</li>
            <li>Penghargaan</li>
            <li>Status Sistem</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>BANTUAN</h3>
          <ul>
            <li>Tutorial</li>
            <li>Pengetahuan Dasar</li>
            <li>Hubungi Kami</li>
            <li>Lapor Penyalahgunaan</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <h2>Multi Makmur Teknologi</h2>
        </div>

        <div className="footer-social">
          <FaLinkedin />
          <FaWhatsapp />
          <FaEnvelope />
          <FaYoutube />
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Multi Makmur Teknologi. Semua Hak Dilindungi.
        </p>
      </div>
    </footer>
  );
}
