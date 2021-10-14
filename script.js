$(document).ready(function(){
					

					// ==========Heder area Start==============//


			$(window).on('scroll',function(){
						
						if($(this).scrollTop()>100)
						{
							$('.header-area').addClass("sticky");
						}

						else{
						
							$('.header-area').removeClass("sticky");
						}
					
				});

		// ==========Heder area end==============//


/* =======================Scroll Section Start===================== */

			$(window).on('scroll',function(){
						
						if($(this).scrollTop() > 100)
						{
							$('#scroll_top').fadeIn();
						}

						else{
						
							$('#scroll_top').fadeOut();
						}


						
				});

			$('#scroll_top').click(function(){	
							
						$('html, body').animate({

							scrollTop:0

						}, 3000);

							});
					
			



/* =======================Scroll Section End===================== */

// =========================OUR MAIN COURSES Start=======================//


  $(document).ready(function() {
    $('#course_section').lightSlider({
        item:3,
        loop:true,
        auto:true,
        slideMove:2,
        slideMargin:15,
        prevHtml: '<i class="fas fa-chevron-circle-left"></i>',
        nextHtml: '<i class="fas fa-chevron-circle-right"></i>',
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:2000,
        responsive : [

        	{
                breakpoint:992,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },


            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

             {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });


// =========================OUR MAIN COURSES End=======================//


// ===========================Our Product Section Start====================== =//
  $(document).ready(function() {
    $('#product_section').lightSlider({
        item:5,
        loop:true,
        auto:false,
        slideMove:2,
        slideMargin:15,
        prevHtml: '<i class="fas fa-chevron-circle-left"></i>',
        nextHtml: '<i class="fas fa-chevron-circle-right"></i>',
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [

            {
                breakpoint:992,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:6,
                  }
            },


            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

             {
                breakpoint:600,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  
  });


// ===========================Our Product Section End====================== =//

// =========================Experienced Slider Start========================//





  $(document).ready(function() {
    $('#content-slider').lightSlider({
        item:1,
        loop:true,
        auto:true,
        slideMove:2,
        slideMargin:15,
        prevHtml: '<i class="fas fa-chevron-circle-left"></i>',
        nextHtml: '<i class="fas fa-chevron-circle-right"></i>',
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [

        	{
                breakpoint:992,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },


            {
                breakpoint:800,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

             {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });

// =========================Experienced Slider End==========================//
// =========================WHAT PEOPLE SAYS Start================================//

$(document).ready(function() {
    $('#people_says').lightSlider({
        item:2,
        loop:true,
        auto:false,
        slideMove:2,
        slideMargin:15,
        prevHtml: '<i class="fas fa-chevron-circle-left"></i>',
        nextHtml: '<i class="fas fa-chevron-circle-right"></i>',
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [

        	{
                breakpoint:992,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },


            {
                breakpoint:800,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

             {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },

            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });


// =========================WHAT PEOPLE SAYS End================================//
//==========================Button Collapse Start================================//

				

				$(".hide_1").click(function() {
					

					
					
					$(".hide-1").slideToggle(1000);
					$(".hide-5").slideUp(1000);
					$(".hide-2").slideUp(1000);
					$(".hide-3").slideUp(1000);
					$(".hide-4").slideUp(1000);
                    $(".open-1").toggle();
                    $(".close-1").toggle();
                    $(".close-2").show();
                    $(".open-2").hide();
                    $(".close-3").show();
                    $(".open-3").hide();

				});


				$(".hide_2").click(function() {
					

					$(".hide-2").slideToggle(1000);	
					$(".hide-5").slideUp(1000);
					$(".hide-1").slideUp(1000);
					$(".hide-3").slideUp(1000);
					$(".hide-4").slideUp(1000);
                    $(".open-2").toggle();
                    $(".close-2").toggle();
                    $(".open-1").hide();
                    $(".close-1").show();
                    $(".open-1").hide();
                    $(".close-3").show();
                    $(".open-3").hide();

				});

				$(".hide_3").click(function() {
					
					$(".hide-3").slideToggle(1000);	
					$(".hide-5").slideUp(1000);
					$(".hide-1").slideUp(1000);
					$(".hide-2").slideUp(1000);
					$(".hide-4").slideUp(1000);
                     $(".open-3").toggle();
                     $(".close-3").toggle();
                     $(".close-1").show();
                     $(".open-1").hide();
                     $(".close-2").show();
                     $(".open-2").hide();


				});

				$(".hide_4").click(function() {
					

					$(".hide-4").slideToggle(1000);	
					$(".hide-5").slideUp(1000);
					$(".hide-1").slideUp(1000);
					$(".hide-2").slideUp(1000);
					$(".hide-3").slideUp(1000);
				});

				$(".hide_5").click(function() {
					

					$(".hide-5").slideToggle(1000);	
					$(".hide-1").slideUp(1000);
					$(".hide-2").slideUp(1000);
					$(".hide-3").slideUp(1000);
					$(".hide-4").slideUp(1000);
				});

				//===================Button Collapse End==================//

				// ============Image Popup Start================//


				$('.test-popup-link').magnificPopup({
					
				  type: 'image'
				
					});
				
				// ============Image Popup Start================//

				
		// ==========NaveBar Scroll area==============//
		
		$('#nav').onePageNav({
			filter: ':not(.external)'
		});

			// ==========Slide area==============//


			$(document).ready(function(){
					
					  $(".owl-carousel").owlCarousel();
					  
					});


						
			$(".element").owlCarousel({
						
							items:1,
							autoplay:true,
							autoplayTimeout:2000,
							loop:true,
							
							
						
				});
						

			

					  
});