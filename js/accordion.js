(function ($) {

	$('SUI_BODY_CLASS .sui-accordion-item').each(function () {

		$('.sui-accordion-item').on('click', function () {
			$(this).toggleClass('sui-accordion-item--open');
		});

	});

}(jQuery));
