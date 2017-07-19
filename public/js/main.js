$(document).ready(function() {

	// Cache the Window object
	var $window = $(window);

	//window and animation items
	var animation_elements = $.find('.inView');
	var web_window = $(window);

	//check to see if any animation containers are currently in view
	function check_if_in_view() {
		//get current window information
		var window_height = web_window.height();
		var window_top_position = web_window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		//iterate through elements to see if its in view
		$.each(animation_elements, function() {

			//get the element sinformation
			var element = $(this);
			var element_height = $(element).outerHeight();
			var element_top_position = $(element).offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
				$('div[data-type="background"]').each(function(){
					var $bgobj = $(this); // assigning the object

					$(window).scroll(function() {

						// Scroll the background at var speed
						// the yPos is a negative value because we're scrolling it UP!
						var yPos = -($window.scrollTop() / $bgobj.data('speed'));

						// Put together our final background position
						var coords = '50% '+ yPos + 'px';

						// Move the background
						$bgobj.css({ backgroundPosition: coords });

					}); // end window scroll
				});
			}
		});

	}

	//on or scroll, detect elements in view
	$(window).on('scroll resize', function() {
			check_if_in_view()
		})
		//trigger our scroll event on initial load
	$(window).trigger('scroll');

var icons = ['fa-code', 'fa-headphones', 'fa-coffee','fa-music'];
var i = 0;
var first = true;
var time = setInterval(function() {
	if(first){
		$('#love').removeClass(icons[0])
		first = false;
	}else{
		$('#love').removeClass(icons[i])
	}
	i++;
	if(i == 4){
		i = 0;
	}
	$('#love').addClass(icons[i]);

},5000);

});

// Parallax Backgrounds
// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
