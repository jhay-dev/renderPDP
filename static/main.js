(function($) {
	// Navigation
	let header = $('#mobile-header');

	// Prevent default on "jump to" anchor links or buttons outside the form scope
	$(document).on('click', 'a[href^="#"]', function(e) { e.preventDefault(); });
	$(document).on('click', 'button', function(e) { if (!$(this).closest('form').length) e.preventDefault(); });

	// Product page
	$(document).on('click', 'ul.gallery-nav > li:not(.active) > a', function (e) {
		let index = $(this).parent().index(),
			target = $(this).closest('ul').next('ul.images').children('li').get(++index);
		$(this).parent('li').siblings('.active').removeClass('active');
		$(this).parent('li').addClass('active');
		console.log('index:', index);
		scrollTo(target);
	});

	// Product page
	$(document).on('click', '#ingredients > h3', function(e) {
		$(this).removeClass('.active');
		$(this).addClass('active');
	});
	
	$(document).on('click', 'button.hamburger', function(e) {
		$(this).toggleClass('is-active');
	});

	// Initialize, destroy, and trigger owl carousel on resize and scroll events
	$('.owl-carousel').each(function() {
		let carousel = $(this).owlCarousel({
			startPosition: Math.max(0, carousel.find('[data-start]').index()),
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
				},
				783: {
					items: 4
				}
			}
		});
		
		(function(c) {
			c.closest('.owl-content').find('.next').on('click', function(e) {
				c.trigger('next.owl.carousel');
			});
			c.closest('.owl-content').find('.prev').on('click', function(e) {
				c.trigger('prev.owl.carousel');
			});
		})(carousel);
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

	function getTop(target) {
		return target[0].getBoundingClientRect().y + $(window).scrollTop() - parseInt((target.css('margin-top')).replace('px', '')) - header.outerHeight();
	}

	function scrollTo(target) {
		console.log(getTop(target));
		$('html, body').animate({
			scrollTop: getTop(target)
		}, {
			easing: 'easeOutCubic',
			duration: 250
		});
	}
})(jQuery);
