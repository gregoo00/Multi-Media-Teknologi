import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer flex">
      <div className="footer-content flex">
        <div className="footer-logo">
            <h1>
              <FaUtensils className="icon" />
              Multi Media Teknologi
            </h1>
        </div>
        <div className="footer-links flex">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/terms" className="footer-link">Terms</Link>
          <Link to="/privacy" className="footer-link">Privacy</Link>
        </div>
        <div className="footer-phone number">
            <p>021-80607944</p>
        </div>
        <div className="footer-address">
            <p>Ruko the Savoy, Jl. River Garden Boulevard No.RT18 B2 33B, RW.14, East Cakung, Cakung, East Jakarta City, Jakarta 13910</p>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Multi Media Teknologi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}