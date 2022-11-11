import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Whatido = () => {
  useEffect(() => {}, []);

  return (
    <section>
      <div class="whatIDoSection inView" data-type="background" data-speed="5">
        <div class="widTitle headerDiv">
          {/* <i class="rocket-cog fa-stack fa-2x">
            <i class="fa fa-cog fa-spin fa-stack-2x" aria-hidden="true"></i>
            <i class="fa fa-wrench fa-stack-2x" aria-hidden="true"></i>
          </i> */}
          <h1>
            <FontAwesomeIcon icon={faMoon} /> what i do
          </h1>
        </div>
        <div class="widBody">
          <div class="wdCard">
            <div class="wdImg">
              <img
                class="animation-element appear"
                src="/img/front-end.png"
                alt="Devices with varying screen sizes"
                title="Responsive Design"
              />
            </div>
            <div class="wdText">
              <h1>Web Optimization</h1>
              <p class="white lead">
                With my exceptional skills in HTML CSS & JS I can help design or
                revamp your site with the latest in Analytics based User
                Experience and speed Optimization.
              </p>
            </div>
          </div>
          <div class="wdCard">
            <div class="wdText">
              <h1>Web Development</h1>
              <p class="white lead">
                Wether you want your web site / app to be React, Angular, or any
                of the other popular CMS systems, I can setup your backend, and
                have your project deployed in no time.
              </p>
            </div>
            <div class="wdImg">
              <img
                class="animation-element appear"
                src="/img/back-end.png"
                alt="Web development tool logos"
                title="Web Development"
              />
            </div>
          </div>
          <div class="wdCard">
            <div class="wdText">
              <h1>Template Modification</h1>
              <p class="white lead">
                Wether you need to customize a theme, a custom theme, or just
                help setting up or editting your site, I got you covered.
              </p>
            </div>
            <div class="wdImg">
              <img
                class="animation-element appear"
                src="/img/wordpress.png"
                alt="Wordpress development tool logos"
                title="Wordpress Development"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatido;
