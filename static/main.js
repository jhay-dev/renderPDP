(function($) {
	// Navigation
	let header = $('header.main'),
		carousels = $('.carousel'),
		direction = false,
		wintop = $(window).scrollTop(),
		winbtm = $(window).scrollTop() + $(window).height();

	// Extend jQuery's selector object
	$.extend($.expr[':'], {
		// Make it convenient to check if an element is within the viewport
		inview: function(el) {
			let eltop = $(el).offset().top,
				elbtm = $(el).offset().top + $(el).outerHeight();
			return (wintop - header.outerHeight() <= elbtm && winbtm >= eltop && direction == 'up') || (winbtm - header.outerHeight() >= eltop && wintop - header.outerHeight() <= elbtm && direction == 'down');
		},
		topinview: function(el) {
			let eltop = $(el).offset().top,
				elbtm = $(el).offset().top + $(el).outerHeight();
			return winbtm >= eltop && wintop - header.outerHeight() <= elbtm && direction == 'down';
		},
		bottominview: function(el) {
			let eltop = $(el).offset().top,
				elbtm = $(el).offset().top + $(el).outerHeight();
			return wintop - header.outerHeight() <= elbtm && winbtm >= eltop && direction == 'up';
		},
		mostinview: function(el, i, a) {
			console.log('el, i, a', el, i, a);
			// TODO: extend this to allow return of element MOST in view (more height within viewport than others in view)
			let els = el;
			$(el).each(function(k, v) {

			});
			return el;
		}
	});

	// Prevent default on "jump to" anchor links or buttons outside the form scope
	$(document).on('click', 'a[href^="#"]', function(e) { e.preventDefault(); });
	$(document).on('click', 'button', function(e) { if (!$(this).closest('form').length) e.preventDefault(); });

	// Product page
	$(document).on('click', '.gallery-nav > ul > li:not(.active) > a', function (e) {
		console.log('clicked nav item');
		let target = $(this).closest('.gallery-nav').siblings('.gallery-images').find('li:eq(' + $(this).parent().index() + ')');
		$(this).parent('li').siblings('.active').removeClass('active');
		$(this).parent('li').addClass('active');
		console.log('target:', target);
		$('html, body').stop().animate({
			scrollTop: parseInt(target.offset().top) - header.outerHeight()
		}, 500, 'easeInOutQuart');
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

	// Initialize, destroy, and trigger owl carousel on resize and scroll events
	function init_carousels() {
		console.log('init_carousels()');
		if ($(window).width() < 768) {
			// Initialize carousel
			carousels.each(function(i) {
				console.log('carousel index: ', i);
				carousels[i] = $(this).addClass('owl-carousel').owlCarousel({
					startPosition: 0,
					center: false,  
					loop: true,
					margin: 0,
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
					c.siblings('.gallery-nav').find('li.nav-item > a').on('click', function(e) {
						c.trigger('to.owl.carousel', $(this).closest('.nav-item').index());
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

	// Set active gallery
	function active_nav_item() {
		console.log('carousels length', carousels.length);
		console.log('------');
		carousels.each(function(c) {
			let items = $(this).find('li:inview');
			// console.log('.......');
			// console.log('most in view: ', items);
			// console.log('.......');
			if (items.length) {
				items.each(function(i) {
					if (direction == 'down') {

					} else {

					}
					// console.log('checking nav item: ', i);
					// let eltop = $(this).offset().top,
					// 	elbtm = $(this).offset().btm,
					// 	prevel = carousels[c][i - 1] ?? false,
					// 	nextel = carousels[c][i + 1] ?? false,
					// 	active = 1;

					// if (direction == 'down') {
					// 	console.log('== scrolling DOWN');
					// 	if (winbtm >= eltop) {
					// 		if (!nextel || (nextel && nextel.offset().top > winbtm)) {
					// 			return $(this);
					// 		} else if (nextel && (winbtm >= (nextel.offset().top + nextel.outerHeight() / 2) && i + 1 == carousels.length)) {
					// 			return nextel;
					// 		}
					// 		return active;
					// 	}
					// } else {
					// 	console.log('== scrolling UP');
					// 	if (wintop <= elbtm) {
					// 		if (!prevel || (prevel && prevel.offset().bottom < wintop)) {
					// 			return $(this);
					// 		} else if (prevel && (wintop <= (prevel.offset().btm + prevel.outerHeight() / 2) && i + 1 == carousels.length)) {
					// 			return prevel;
					// 		}
					// 	}
					// }
				});	
			}
		});
		console.log('------');
	}

	function scroll() {
		direction = wintop < $(window).scrollTop() ? 'down' : 'up';
		wintop = $(window).scrollTop();
		winbtm = wintop + $(window).height();
		console.log(active_nav_item());
	}

	function resize() {
		init_carousels();
	}

	function init() {
		init_carousels();
	}

	$(window).on('scroll', scroll);
	$(window).on('resize', resize);
	init();
})(jQuery);
