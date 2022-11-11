import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div>
      <Navbar />
      <div id="portfolioBody">
        <div id="portfolioHeader" class="headerSection">
          <h1>Portfolio</h1>
        </div>
        <div class="portfolioExp">
          <div class="pxBody">
            <div class="projectCard animation-element slide-left">
              <div class="projectTitle">
                <div class="headerDiv green-bg">
                  <h1>Prime Cleaning</h1>
                </div>
              </div>
              <div class="projectImg">
                <a href="https://myprimeclean.com/" target="_blank">
                  <img
                    class="portfolioThumbnail"
                    src="/img/thumbnails/primecleaning.png"
                  />
                </a>
              </div>
              <div class="projectBody">
                <p>
                  Prime CPAP Cleaning Solutions was a commissioned site for a
                  local commercial CPAP cleaning company. The site was built
                  using bootstrap, then modified to work with WordPress as its
                  CMS.
                </p>
              </div>
              <div class="projectTools">
                <div class="myH2">Tools Used:</div>
                <p class="lead">
                  Linux Apache Mysql Php Bootstrap Wordpress SuperSlides
                  Underscore
                </p>
              </div>
              <div class="projectFooter centered">
                <a
                  class="btn btn-lg btn-warning"
                  href="https://myprimeclean.com/"
                  target="_blank"
                >
                  Visit Site
                </a>
              </div>
            </div>

            <div class="projectCard animation-element slide-right">
              <div class="projectTitle">
                <div class="headerDiv rentacar-bg">
                  <h1>Getaround</h1>
                </div>
              </div>
              <div class="projectImg">
                <a href="https://www.getaround.com/" target="_blank">
                  <img
                    class="portfolioThumbnail"
                    src="/img/thumbnails/rentacar.png"
                  />
                </a>
              </div>
              <div class="projectBody">
                <p>
                  This project was an expedia style website for renting cars. It
                  allows users to post cars they want to rent out or rent a car.
                  I was incharge of redesigning their existing UI and insuring
                  cross compatability.
                </p>
              </div>
              <div class="projectTools">
                <div class="myH2">Tools Used:</div>
                <p class="lead">
                  MongoDB Express NodeJS Momentjs Passport Bootstrap
                </p>
              </div>
              <div class="projectFooter centered">
                <a
                  class="btn btn-lg btn-warning"
                  href="https://www.getaround.com/"
                  target="_blank"
                >
                  Visit Site
                </a>
                <a
                  class="btn btn-lg btn-warning"
                  href="https://github.com/ra92/rentacar"
                  target="_blank"
                >
                  <i class="fa fa-github fa-lg" aria-hidden="true"></i> Git Hub
                </a>
              </div>
            </div>

            <div class="projectCard animation-element slide-left">
              <div class="projectTitle">
                <div class="headerDiv black-bg">
                  <h1>Recipe Book</h1>
                </div>
              </div>
              <div class="projectImg">
                <a href="https://recipebook.io/" target="_blank">
                  <img
                    class="portfolioThumbnail"
                    src="/img/thumbnails/recipebook.jpg"
                  />
                </a>
              </div>
              <div class="projectBody">
                <p>
                  Recipe Book is a MEAN stack single page application project.
                  its a recipe website that allows users to post and browse
                  other's recipes. It also a shopping list tab that lets users
                  add ingredients to their shopping list manually, or by
                  importing them from a listed recipe. Learning and getting used
                  to Angular was the most challenging part of this project, but
                  once I got the hang of it I really came to appreciate a lot of
                  things about it such as two-way data binding and the way it
                  works with forms.
                </p>
              </div>
              <div class="projectTools">
                <div class="myH2">Tools Used:</div>
                <p class="lead">
                  MongoDB Express AngularJS NodeJS Firebase Bootstrap
                </p>
              </div>
              <div class="projectFooter centered">
                <a
                  class="btn btn-lg btn-warning"
                  href="https://recipebook.io/"
                  target="_blank"
                >
                  Visit Site
                </a>
                {/* <!-- <a class="btn btn-lg btn-warning" href="https://github.com/ra92/recipebook" target="_blank"><i class="fa fa-github fa-lg" aria-hidden="true"></i> Git Hub</a> --> */}
              </div>
            </div>

            <div class="projectCard animation-element slide-right">
              <div class="projectTitle">
                <div class="headerDiv white-bg">
                  <h1>Wordpress Theme</h1>
                </div>
              </div>
              <div class="projectImg">
                <img
                  class="portfolioThumbnail"
                  src="/img/thumbnails/treeSite.jpg"
                />
              </div>
              <div class="projectBody">
                <p>
                  This is a custom Wordpress Theme. It is a simple but flexible
                  design. The backend of this theme is very easy to understand
                  and gives the user a lot of flexibility when it comes to
                  deciding what and how to display what they want. Using
                  Advanced Custom Fields and Custom Post Types made creating the
                  CMS user experience a breeze and allowed me to give the user a
                  lot of control.
                </p>
              </div>
              <div class="projectTools">
                <div class="myH2 black">Tools Used:</div>
                <p class="lead">Wordpress Bootstrap Underscore Php CPT AFC</p>
              </div>
              <div class="projectFooter centered">
                <a
                  class="btn btn-lg btn-warning"
                  href="https://github.com/ra92/treesite/archive/ff3e8b4e13bbb75aa71f7d55c6dd06ba33100440.zip"
                  target="_blank"
                >
                  <i class="fa fa-download fa-lg" aria-hidden="true"></i>{" "}
                  Download
                </a>
                {/* <!-- <a class="btn btn-lg btn-warning" href="https://github.com/ra92/treesite" target="_blank"><i class="fa fa-github fa-lg" aria-hidden="true"></i> Git Hub</a> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
