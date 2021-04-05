(function($) {
	// Navigation
	let header = $('header.main'),
		carousels = $('.carousel');

	// Prevent default on "jump to" anchor links or buttons outside the form scope
	$(document).on('click', 'a[href^="#"]', function(e) { e.preventDefault(); });
	$(document).on('click', 'button', function(e) { if (!$(this).closest('form').length) e.preventDefault(); });

	// Product page
	$(document).on('click', 'ul.gallery-navigation > li:not(.active) > a', function (e) {
		console.log('clicked nav item');
		let target = $(this).closest('ul').next('ul.images').children('li:eq(' + $(this).parent().index() + ')');
		$(this).parent('li').siblings('.active').removeClass('active');
		$(this).parent('li').addClass('active');
		console.log('target.offset().top:', target.offset().top);
		$('html, body').animate({
			scrollTop: parseInt(target.offset().top) - header.outerHeight()
		}, 350, 'easeInOutQuart');
	});

	// Product page
	$(document).on('click', '#ingredients > h3', function(e) {
		$(this).removeClass('.active');
		$(this).addClass('active');
	});
	
	// Menu toggle
	$(document).on('click', 'button.hamburger', function(e) {
		$(this).toggleClass('is-active');
	});

	// Initialize, destroy, and trigger owl carousel on resize and scroll events
	function init_carousels() {
		if ($(window).width() < 768) {
			// Initialize carousel
			carousels.each(function(i) {
				console.log('carousel index: ', i);
				carousels[i] = $(this).addClass('owl-carousel').owlCarousel({
					startPosition: 0,
					center: false,  
					loop: true,
					margin: 25,
					lazyLoad: true,
					nav: false,
					dots: false,
					navText: ['',''],
					rewindNav: true,
					autoWidth: false,
					responsive: {
						0: {
							items: 1
						}
					}
				});

				// Carousel navigation
				(function(c) {
					c.prev('.gallery-nav').find('li.nav-item > a').on('click', function(e) {
						c.trigger('to.owl.carousel', $(this).parent().index());
					});
				})(carousels[i]);
			});
		} else {
			carousels.each(function(i) {
				if (typeof carousels[i].destroy == 'function') carousels[i].destroy();
			});
			carousels = $('.carousel');
		}
	}
	init_carousels();
	$(window).on('resize', init_carousels);

	// Build star ratings
	console.log('stars start'); // TODO: fix this into Vue component :(
	let stars = setInterval(function() {
		if (!$('#stars-whole').length) return;
		// Append solid stars
		console.log('appending solid stars');
		$('#stars-whole').html(
			$('<i class="fa fa-star" aria-hidden="true"></i>'.repeat(
				parseInt($('#stars-whole').text())
			))
		);
		// Append solid stars
		console.log('appending half stars');
		$('#stars-half').html(
			$('<i class="fa fa-star-half" aria-hidden="true"></i>'.repeat(
				parseInt($('#stars-half').text())
			))
		);
		// Append solid stars
		console.log('appending solid stars');
		$('#stars-gray').html(
			$('<i class="fa fa-star" aria-hidden="true"></i>'.repeat(5))
		);
		clearInterval(stars);
	}, 100);

	// Build star ratings
	console.log('sentence case start'); // TODO: fix this into Vue component :(
	let cases = setInterval(function () {
		if (!$('#features').length) return;
		console.log('swapping sentence case');
		// Swap features with sentence case
		$('#features > li > h3').each(function () {
			$(this).text(sentence($(this).text()));
		});
		clearInterval(cases);
	}, 100);

	// Pluck Ingredients from features list
	console.log('ingredients list start'); // TODO: fix this into Vue component :(
	let ingredients = setInterval(function () {
		if (!$('#ingredients').length) return;
		console.log('binding to ingredients list');
		// Swap features with sentence case
		$('#ingredients > li > h3').each(function () {
			$(this).text(sentence($(this).text()));
		});
		clearInterval(ingredients);
	}, 100);

	function sentence(str) {
		let result = str.replace(/([A-Z])/g, ' $1');
		return result.charAt(0).toUpperCase() + result.slice(1);
	}
})(jQuery);
