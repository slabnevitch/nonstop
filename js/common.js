$(function() {
		
	$(document).ready(function() {
		$('.loader').removeClass('active');
		setTimeout(function() {
			$('.header-inner').addClass('loaded');
			
		}, 2000);
		if(screen.width > 768){

			setTimeout(function() {

				$('.header-menu').addClass('open');
			}, 1000);
			
			setTimeout(function() {
				$('.header-menu').addClass('menu-open');
			}, 2000);

			setTimeout(function() {
				$('.header-menu').addClass('menu-open');
				$('.header-menu').removeClass('black-line-delay');
			}, 2500);
		}
		menuClick.init();
		 $('.gallery-item__play-link').click(function(e) {
		 	e.preventDefault();
				$.showYtVideo({
                    videoId: '2nH5gGbiH6U'
                });
                return false;
			});
	});

	function Menu() {
		var __self = this;
		var $mobNav = $(".mob-nav");
		var $toggleButton = $(".toggle-mnu");

		this.init = function() {
			
				this.listeners();
		},
		this.listeners = function() {
			$toggleButton.on('click', this.toggleMenuClick);
			$(".menu-link").on('click', this.menuLinkClick);
		},
		this.toggleMenuClick = function(e) {
			$toggleButton.toggleClass("on");
			__self.openMobMenu();
			return false;
		},
		this.openMobMenu = function() {
			$mobNav.toggleClass('open');
			setTimeout(function() {
				$mobNav.find('.mob-menu').removeClass('black-line-delay');
			}, 1000);
			if(!$mobNav.hasClass('open')){
				__self.closeMobMenu();
			}
			
		},
		this.closeMobMenu = function() {
			$mobNav.addClass('return')
							.removeClass('open');
			setTimeout(function() {
				$mobNav.removeClass('return');
				$mobNav.find('.mob-menu').addClass('black-line-delay');
			}, 1000);
		},
		this.menuLinkClick = function(e) {
			e.preventDefault();
			var $th = $(this);
			if(!$(this).hasClass('menu-link--mob')){
				__self.scrollToSect($th);
			}else{
				__self.menuMobLinkClick($th);
			}

		}
		this.menuMobLinkClick = function(currentLink) {
			$toggleButton.removeClass('on');
			this.closeMobMenu();
			this.scrollToSect(currentLink);
		}
		this.scrollToSect = function(link) {
			var location = link.attr('href'); 
					sectionCoord = $(location).offset().top;
				$('html, body').animate({scrollTop: sectionCoord}, 1500);
		}
	}

	var menuClick = new Menu();
	

	// scroll to
		$('.header-scroll').click(function() {
				var sectionCoord = $('#news').offset().top;
				$('html, body').animate({scrollTop: sectionCoord}, 1000);
		});
	// end of scroll to

	// waypoints
	var linesWaypoints = $('.sect-header').waypoint({
	  handler: function(direction) {
	  	$(this.element).find('.sect-header__line').addClass('sect-header__line--width');
	  	$(this.element).find('.sect-header__title').addClass('active');
	  },
	  offset: '100%'
	});

	var footerWaypoints = $('footer').waypoint({
	  handler: function(direction) {
	  	if(direction == 'down'){
	  		$('.small-menu').fadeOut();		
	  	}
	  	if(direction == 'up'){
	  		$('.small-menu').fadeIn();	
	  		
	  	}
	  },
	  offset: '100%'
	});

	var menuWaypoints = $('header').waypoint({
	  handler: function(direction) {
	  	if(direction == 'down'){
	  		$('.small-menu').fadeIn();		
	  	}
	  	if(direction == 'up'){
	  		$('.small-menu').fadeOut();	
	  		
	  	}
	  },
	  	offset: '-100%'
	  
	});

	var subtitleWaypoints = $('.sect-name').waypoint({
	  handler: function(direction) {
	  	$(this.element).addClass('active');
		},
		offset: "100%"
	  
	});

	var newsItemWaypoints = $('.gallery-item, .gallery-item > img, .gallery-item__play-link').waypoint({
	  handler: function(direction) {
	  	$(this.element).addClass('active');
		},
		offset: "120%"
	  
	});
	var itemsWaypoints = $('.news-item, .about-item, .sect-header--about p').waypoint({
	  handler: function(direction) {
	  	$(this.element).addClass('active');
		},
		offset: '50%'
		
	  
	});

// end waypoints

});

$(window).load(function() {
		$(".loader-start").fadeOut();
});
