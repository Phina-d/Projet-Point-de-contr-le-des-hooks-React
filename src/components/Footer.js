import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`text-center py-3 mt-auto ${darkMode ? "bg-dark text-light" : "bg-primary text-white"}`}>
      <div className="container">
        <p className="mb-1">Phina. &copy; 2025 MovieApp. Tous droits réservés.</p>
        <div>
          <a href="https://facebook.com" className={`me-3 ${darkMode ? "text-light" : "text-white"}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://twitter.com" className={`me-3 ${darkMode ? "text-light" : "text-white"}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://instagram.com" className={`me-3 ${darkMode ? "text-light" : "text-white"}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.paypal.com" className={`me-3 ${darkMode ? "text-light" : "text-white"}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-paypal fa-lg"></i>
          </a>
          <a href="mailto:contact@monsite.com" className={darkMode ? "text-light" : "text-white"}>
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
