import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if(newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubmitted(false), 3000);
    }
  };

  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center mb-4">📞 Contactez-nous</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 rounded shadow bg-light">
  <div className="mb-3">
    <label htmlFor="name" className="form-label fw-semibold">Nom</label>
    <input
      type="text"
      className="form-control"
      id="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Votre nom"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label fw-semibold">Email</label>
    <input
      type="email"
      className="form-control"
      id="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Votre email"
      required
    />
  </div>

  <div className="mb-3">
    <label htmlFor="message" className="form-label fw-semibold">Message</label>
    <textarea
      className="form-control"
      id="message"
      rows="4"
      value={formData.message}
      onChange={handleChange}
      placeholder="Votre message"
      required
    ></textarea>
  </div>

  <button type="submit" className="btn btn-primary w-100">Envoyer</button>

  {submitted && (
    <div className="alert alert-success mt-3" role="alert">
      ✅ Merci ! Votre message a été envoyé.
    </div>
  )}
</form>


          {/* Formulaire newsletter */}
          <form onSubmit={handleNewsletterSubmit} className="mt-5 p-4 rounded shadow bg-light">
            <h5>📬 Inscrivez-vous à notre Newsletter</h5>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Votre email"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                required
              />
              <button className="btn btn-success" type="submit">S'inscrire</button>
            </div>
            {newsletterSubmitted && (
              <div className="alert alert-success" role="alert">
                ✅ Merci pour votre inscription !
              </div>
            )}
          </form>
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <div className="bg-white p-4 rounded shadow text-dark mb-4">
            <h5>Informations</h5>
            <p><FaMapMarkerAlt className="me-2 text-primary" /> Dakar, Sénégal</p>
            <p><FaPhone className="me-2 text-primary" /> +221 77 000 00 00</p>
            <p><FaEnvelope className="me-2 text-primary" /> contact@filmapp.fr</p>
          </div>

          <div className="mb-4 d-flex justify-content-center gap-3 fs-4">
            {/* Réseaux sociaux */}
            <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-primary">
              <FaFacebookF />
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-info">
              <FaTwitter />
            </motion.a>
            <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-danger">
              <FaInstagram />
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="text-primary">
              <FaLinkedinIn />
            </motion.a>
          </div>

          {/* Google Maps */}
          <div className="rounded overflow-hidden shadow">
            <iframe
              title="Carte de Dakar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126831.85709670603!2d-17.543920449999998!3d14.7166771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172c3f4f2154f%3A0xe19d7dd6244a92e6!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2sfr!4v1718023456789"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
