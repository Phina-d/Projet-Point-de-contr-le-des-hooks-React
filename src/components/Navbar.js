import React from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-primary"}`}>
      <div className="container">
        <a className="navbar-brand" href="#">🎬 MovieApp</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Films</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              {/* Toggle mode sombre */}
              <button
                onClick={toggleDarkMode}
                className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"} ms-3`}
                title="Changer le thème"
              >
                {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
