let stateCheck = setInterval(() => {
  if (document.readyState === "complete") {
    clearInterval(stateCheck);
    //Animations vars
    var animation_elements = Array.from(
      document.getElementsByClassName("animation-element")
    );
    console.log(animation_elements);
    var web_window = window;
    console.log(web_window);

    //Sticky Nav vars
    // var aboveHeight = document.getElementById(".glue").outerHeight();

    //update window vars on resize
    // web_window.resize(function () {
    //   aboveHeight = document.getElementById(".glue").outerHeight();
    // });

    //check to see if any animation containers are currently in view
    function animationsPos() {
      //get current window information
      var window_height = web_window.innerHeight;
      var window_top_position = document.scrollingElement.scrollTop;
      var window_bottom_position = window_top_position + window_height;

      //iterate through elements to see if its in view
      animation_elements.forEach((element, index) => {
        //get the element sinformation
        var element_height = element.offsetHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = element_top_position + element_height;

        // console.log("height: " + element_height);
        // console.log("Top: " + element_top_position);
        // console.log("Bottom: " + element_bottom_position);
        // console.log("window top: " + window_top_position);
        // console.log("window bot: " + window_bottom_position);

        // console.log(element);
        // try {
        // } catch (e) {}

        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          // alert("We're in!");
          element.classList.add("in-view");
          animation_elements.splice(index, 1);
          console.log(animation_elements);
        } else {
          //element.removeClass('in-view');
        }
      });
    }

    // function stickyNavPos() {
    //   //if scrolled down more than the header's height
    //   if (web_window.scrollTop() > aboveHeight) {
    //     // if yes, add 'fixed' class to the <nav>
    //     // add padding top to the #content (value is same as the height of the nav)
    //     document.getElementById("#sticky").addClass("fixed").css("top", "0"); //.next().css('padding-top','60px');
    //     document.getElementById(".content").addClass("pushed");
    //   } else {
    //     // when scroll up or less than aboveHeight, remove the 'fixed' class, and the padding-top
    //     document.getElementById("#sticky").removeClass("fixed").css("top", "0");
    //     document.getElementById(".content").removeClass("pushed");
    //   }
    // }

    //Animations Timer
    var animTimer = setInterval(function anims() {
      if (animation_elements.length > 0) {
        animationsPos();
      } else {
        clearInterval(animTimer);
        console.log("cleared");
      }
    }, 500);

    //Sticky Nav Timer
    // var stickyNavTimer = setInterval(function sticky() {
    //   stickyNavPos();
    // }, 100);

    //Navbar icon Timer
    // var icons = ["fa-code", "fa-headphones", "fa-coffee", "fa-music"];
    // var i = 0;
    // var first = true;
    // var navIcons = setInterval(function navCons() {
    //   if (first) {
    //     document.getElementById("#love").removeClass(icons[0]);
    //     first = false;
    //   } else {
    //     document.getElementById("#love").removeClass(icons[i]);
    //   }
    //   i++;
    //   if (i == 4) {
    //     i = 0;
    //   }
    //   document.getElementById("#love").addClass(icons[i]);
    // }, 3000);
  } else {
  }
}, 500);
