import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PortfolioSummary = () => {
  useEffect(() => {}, []);

  return (
    <section>
      <div class="portSection">
        <div class="portTitle">
          <div class="headerDiv black-bg">
            <h1>
              <FontAwesomeIcon icon={faAnchor} /> some examples
            </h1>
          </div>
        </div>
        <div class="portBody">
          <div>
            <a href="https://myprimeclean.com/">
              <img
                class="portfolioThumbnail"
                src="/img/thumbnails/primecleaning.png"
              />
            </a>
          </div>
          <div>
            <a href="https://www.getaround.com/">
              <img
                class="portfolioThumbnail"
                src="/img/thumbnails/rentacar.png"
              />
            </a>
          </div>
          <div>
            <a href="https://recipebook.io/">
              <img
                class="portfolioThumbnail"
                src="/img/thumbnails/recipebook.jpg"
              />
            </a>
          </div>
        </div>
        <div class="portBtn">
          <h1 class="animation-element slide-left">
            <Link class="moreButton btn btn-lg btn-warning" to="/portfolio">
              portfolio <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSummary;
