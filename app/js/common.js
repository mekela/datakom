$(document).ready(function() {
	//tab
	$('.tab_links li a, .mobile_tab_link li a').click(function(event){
		event.preventDefault();
		$('.tab_links li, .mobile_tab_link li').removeClass('active');
		$(this).parent(' li ').addClass('active');
		$('.tab_form, .mobile_tab_wrap').hide();
		$($(this).attr('href')).show();
	});

	//slider
	$('.rev_slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 990,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});