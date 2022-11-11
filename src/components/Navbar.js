import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {}, []);

  return (
    <nav
      class="navbar sticky-top navbar-expand-lg bg-light"
      style={{ position: "sticky" }}
    >
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <FontAwesomeIcon icon={faFish} /> RA92
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/portfolio">
                portfolio
              </Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="../public/Resume/RobertAguilarResume.docx"
                download="RobertAguilarResume.docx"
              >
                resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
