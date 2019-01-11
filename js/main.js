
(function() {
	"use strict";
	
	$(document).ready(function() {	
		//menuButton
			$(".menuButton").on('click', function () {
			$(this).next('ul').slideToggle('slow');
			$(this).toggleClass('active');
		});
		$('.menu ul li.scroll a').on('click', function () {
			if ($(window).width() < 991)
			{
				if ($(this).parent().hasClass('hsChildItem'))
				{
					$(this).parent('.menu ul li.hsChildItem').toggleClass('active');
				}
				else
				{
					$('html, body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
					$(".menu ul").slideUp('slow');
					$(".menuButton").removeClass('active');
				}
			}
			else
			{
				$('html, body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
			}
			return false;
		});


		// Animated Number========================
		$('#allnumber').appear(function () {
			$('#number1').animateNumber({number: 2000}, 2000);
			$('#number2').animateNumber({number: 1095}, 2000);
			$('#number3').animateNumber({number: 3015}, 2000);
			$('#number4').animateNumber({number: 1320}, 2000);
		}, {accX: 0, accY: -200});
	});
})(jQuery);
//END DOCUMENT READY------------