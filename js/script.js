( function($) {

	var app =  {

		init: function(){
			this.browserDetector();
			this.magnificPopUpFunction();
			this.featpropFunction();
			this.scrollFunction();
		},

		browserDetector: function(){
			var browserName = bowser.name; 
			var browserNameLowerCase = browserName.toLowerCase();
			var browserNameTrim = browserNameLowerCase.replace(/\s+/g, '');
			$('html').addClass(browserNameTrim);
		},

		scrollFunction: function(){
			$('.arrows').click(function(){ 
				$("html, body").animate({ 
					scrollTop: $('#contact-id').offset().top 
				}, "slow"); 
			})

			// ===== Scroll to Top ==== 
			// $(window).scroll(function() {
			//     if ($(this).scrollTop() > 150) {        
			//         $('#return-to-top').fadeIn(200);   
			//     } else {
			//         $('#return-to-top').fadeOut(200);  
			//     }
			// });
			// $('#return-to-top').click(function() {     
			//     $('body,html').animate({
			//         scrollTop : 0       
			//     }, 500);
			// });
		},



		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		},

		featpropFunction: function(){

	        // Slick for FP Image
	        $('.featprop-holder').slick({
	            infinite: true, 
	            slidesToShow: 1, 
	            slidesToScroll: 1, 
	            arrows: true, 
	            autoplay: true, 
	            fade: true,
	            autoplaySpeed: 5000, 
	            dots: false, 
	            appendArrows: $('.featprop-arrows'),
	            prevArrow: '<div class="slick-prev fp-arrows"><i class="fas fa-arrow-left"></i></div>',
	            nextArrow: '<div class="slick-next fp-arrows"><i class="fas fa-arrow-right"></i></div>'
	        });

	        // Slick for Building Info
	        $('.bldginfo-holder').slick({
	            infinite: true, 
	            slidesToShow: 1, 
	            slidesToScroll: 1, 
	            arrows: true, 
	            autoplay: true, 
	            fade: true,
	            autoplaySpeed: 5000, 
	            dots: false, 
	            appendArrows: $('.bldginfo-arrows'),
	            prevArrow: '<div class="slick-prev fp-arrows"><i class="fas fa-arrow-left"></i></div>',
	            nextArrow: '<div class="slick-next fp-arrows"><i class="fas fa-arrow-right"></i></div>',
	            asNavFor: '.bldginfo-main-details-holder'
	        });


	        $('.bldginfo-main-details-holder').slick({
	            infinite: true, 
	            slidesToShow: 1, 
	            slidesToScroll: 1, 
	            arrows: false, 
	            autoplay: true, 
	            fade: true,
	            autoplaySpeed: 5000, 
	            dots: false,
	            asNavFor: '.bldginfo-holder'
	        });

		}


	} 

	$(document).ready( function() {
		app.init();
	});

	$(window).load(function () { 

		$('.contact-form').load('http://kmcmaggroup.com/arthaland-century-pacific-tower/ .agent-contact-form');
		
	});

	$(window).resize(function () { 

	});
	
})(jQuery);