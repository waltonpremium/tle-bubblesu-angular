;(function ( $, window, document, undefined ) {
$(document).ready(function(){
	
	// detect if touch device
	var isTouch = 'ontouchstart' in window || 'onmsgesturechange' in window;
	
	// detect if mobile sized
	var isMobile = window.innerWidth < 768;
	
	// menu selectors
	var mainMenus = ".main-menu";
	var mainMenu = "#mainMenu";
	var menuCenters = "#topMenu .finder";
	var menuLinks = "#topMenu .links ul"
	var parentMenuItems = mainMenus + " .circle > ul";
	var parentMenuItem = " > li"
	var parentMenuItemLink = " > li > a";
	var activeMenuItems = parentMenuItems + parentMenuItem + " > ul > li.active";
	
	// mobile menu selectors
	var mobileMenuToggle = ".menu-toggle, .tap-out";
	
	// sticky menu
	var $stickyMenuContainer = null;
	var stickyMenuContainerId = "stickyMenuContainer";
	var stickyMainMenuId = "stickyMainMenu";
	var bubblesImage = ".circle.bubbles > a > img";
	var bubblesImageLoaded = false;
	
	// add active class to parent of active menu items
	$(activeMenuItems).parents("li").addClass("active");
	
	// trigger menu bindings on resize
	$(window).resize(function(){
		isMobile = window.innerWidth < 768;
		$(window).off("scroll.BubblesStickyMenu");
		$("body").off("click.BubblesMobileMenu").off("click.BubblesMenu");
		$(bubblesImage).off("load.BubblesStickyMenu");
		bindMenus();
	}).trigger("resize");
	
	// bind mobile toggle menu for mobile, bind sticky menu for tablet+up
	function bindMenus() {
			
		function bindStickyMenu() {
			var stickyMenuThreshold = $(mainMenu).offset().top + $(mainMenu).outerHeight();
			$(window).on("scroll.BubblesStickyMenu", function() {
				if($(this).scrollTop() < stickyMenuThreshold) {
					$(".open", $stickyMenuContainer).removeClass("open");
					$(".clicked", $stickyMenuContainer).removeClass("clicked");
					$(".dropdown-menu", $stickyMenuContainer).hide();
					$stickyMenuContainer.stop().animate({top:"-10em"}, 200);
				} else {
					$(".dropdown-menu", $stickyMenuContainer).attr("style", "");
					$stickyMenuContainer.stop().animate({top:"-2.5em"}, 200);
				}
			}).scroll();
		}
	
		// make parent menu items work on touch/mobile devices: first click shows dropdown items, second click goes to location
		if (isTouch || isMobile) {
			$("body").on('click.BubblesMenu', parentMenuItems, function(e){
				if ($(this).hasClass("clicked") || (isMobile && $(parentMenuItem, $(this)).hasClass("active"))) {
					location.href = $(parentMenuItemLink, $(this)).attr('href');
				} else {
					$(parentMenuItems).removeClass("clicked");
					$(parentMenuItem, parentMenuItems).removeClass("open").removeClass("active");
					$(this).addClass("clicked").children(parentMenuItem).addClass("open");
				}
			});
		}
		// make parent menu items work on nontouch devices: first click goes to location
		else {
			$("body").on('click.BubblesMenu', parentMenuItems, function(e){
				if (e.button === 0)
					location.href = $(parentMenuItemLink, $(this)).attr('href');
			});
		}
		
		// mobile-sized devices
		if(isMobile) {
			if($stickyMenuContainer !== null) $stickyMenuContainer.hide();
			// bind mobile menu toggle
			$("body").on('click.BubblesMobileMenu', mobileMenuToggle, function(e){
				var offset = $("body").scrollTop();
				$("body").toggleClass("menu-shown");
				$(mainMenu).addClass("box-shadow");
				if($(mainMenu).hasClass("shown")) {
					$("body").css("top", "auto").scrollTop($("body").data("offset"));
					$(mainMenu).hide("slide", {direction: "left"}, 500, function(){
						$(mainMenu).toggleClass("shown");
					});
				}
				else {
					$("body").data("offset", offset).css("top", "-"+offset+"px");
					$(mainMenu).show("slide", {direction: "left"}, 500, function(){
						$(mainMenu).toggleClass("shown");
					});
				}
			});
		}
		// tablet-sized and up devices
		else {
			$("body").removeClass("menu-shown");
			$(mainMenu).removeClass("box-shadow").removeClass("shown").attr("style", "");
			
			// create sticky menu
			if ($stickyMenuContainer === null) {
				$stickyMenuContainer = $("<div></div>").attr("id", stickyMenuContainerId).addClass("hidden-print").appendTo("body");
				// clone main menu
				$(mainMenu).clone().attr("id", stickyMainMenuId).appendTo($stickyMenuContainer);
				// clone center finder
				$(menuCenters).clone().attr("class", "finder").appendTo($stickyMenuContainer);
				// clone top menu
				$(menuLinks).parent().clone().attr("class", "links").appendTo($stickyMenuContainer);
			} else
				$stickyMenuContainer.show();
			
			// check if Bubbles image is loaded
			if (bubblesImageLoaded) {
				bindStickyMenu();
			} else {
				$(bubblesImage).on("load.BubblesStickyMenu", function(){
					bubblesImageLoaded = true;
					bindStickyMenu();
				});
			}
		}
	}

});
})( jQuery, window, document );