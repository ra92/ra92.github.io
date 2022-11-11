import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  useEffect(() => {}, []);

  return (
    <section id="aboutMe">
      <div class="aboutSection content">
        <div class="asTitle">
          <div class="headerDiv black-bg">
            <h1>
              {" "}
              <FontAwesomeIcon icon={faSailboat} /> a little about me..
            </h1>
          </div>
        </div>
        <div class="asImg">
          <img
            id="me"
            class="rounded-circle img-thumbnail shadow"
            src="/img/me.jpg"
            alt="me"
            title="me"
          />
        </div>
        <div class="specialize animation-element slide-right">
          <div class="specHeader">
            <h2>i specialize in</h2>
          </div>
          <div class="">
            <img
              class="img-fluid"
              src="/img/webtech/html.png"
              alt="HTML"
              title="HTML"
            />
          </div>
          <div class="">
            <img
              class="img-fluid"
              src="/img/webtech/javascript.png"
              alt="Javascript"
              title="Javascript"
            />
          </div>
          <div class="">
            <img
              class="img-fluid"
              src="/img/webtech/css.png"
              alt="CSS"
              title="CSS"
            />
          </div>
        </div>
        <div class="myStack animation-element slide-right">
          <div class="stackHeader">
            <h2>i build with</h2>
          </div>
          <div class="stackImg">
            <img
              class="img-fluid"
              src="https://miro.medium.com/max/1000/1*yhU3xtt7wXBtGNTJbO8G3Q.png"
              alt="MEAN Stack"
              title="MEAN Stack"
            />
          </div>
        </div>
        <div class="likes animation-element slide-right">
          <div class="likesHeader">
            <h2>i love</h2>
          </div>
          <div class="likesImg">
            <img
              class="img-fluid"
              src="/img/likes.png"
              alt="Coding, Music, and Coffee"
              title="Coding, Music, and Coffee"
            />
          </div>
        </div>
        <div class="aboutMeSummary">
          <p>
            Hey there my names Rob, I'm an experienced full stack web developer
            with a software development background. Wether you need a backend,
            frontend, or some CMS work done, I can take your project from a
            blank file to a full fledged project seemlessy with the efficiency
            and care your project deserves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
