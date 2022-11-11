import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  useEffect(() => {
    let stateCheck = setInterval(() => {
      if (document.readyState === "complete") {
        clearInterval(stateCheck);
        var animation_elements = Array.from(
          document.getElementsByClassName("animation-element")
        );
        console.log(animation_elements);
        var web_window = window;
        console.log(web_window);

        function animationsPos() {
          var window_height = web_window.innerHeight;
          var window_top_position = document.scrollingElement.scrollTop;
          var window_bottom_position = window_top_position + window_height;
          animation_elements.forEach((element, index) => {
            var element_height = element.offsetHeight;
            var element_top_position = element.offsetTop;
            var element_bottom_position = element_top_position + element_height;

            if (
              element_bottom_position >= window_top_position &&
              element_top_position <= window_bottom_position
            ) {
              element.classList.add("in-view");
              animation_elements.splice(index, 1);
              console.log(animation_elements);
            } else {
            }
          });
        }
        var animTimer = setInterval(function anims() {
          if (animation_elements.length > 0) {
            animationsPos();
          } else {
            clearInterval(animTimer);
            console.log("cleared");
          }
        }, 500);
      } else {
      }
    }, 500);
  }, []);

  return (
    <div id="banner">
      <div>
        <h1 class="heading">RA92</h1>
        <h2 class="dnd">
          <FontAwesomeIcon icon={faFish} /> Design & Development
        </h2>
      </div>
    </div>
  );
};

export default Landing;
