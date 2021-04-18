$(function(){
    $('.stock__slider-inner').slick({
		prevArrow: '.stock__arrow-prev',        
		nextArrow: '.stock__arrow-next',				       
        autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		// variableWidth: true   
    });   
});

$(function(){
    $('.latest__slider-inner').slick({
		prevArrow: '.latest__arrow-prev',        
		nextArrow: '.latest__arrow-next',	        		       
        autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,  
		// adaptiveHeight: true,
		// variableWidth: true         	  
    });   
});

$(function(){
    $('.carsnews__slider-inner').slick({
		prevArrow: '.carsnews__arrow-prev',        
		nextArrow: '.carsnews__arrow-next',	        		       
        autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,  
		// adaptiveHeight: true,
		// variableWidth: true  	  
    });   
});

// tabs start
$(function () {	
	$('.galery__tab').on('click', function(e){
	  e.preventDefault();
	  $('.galery__tab').removeClass('galery__tab-active');
	  $('.galery__content').removeClass('galery__tab--active');
  
	  $(this).addClass('galery__tab-active');
	  $($(this).attr('href')).addClass('galery__tab--active');
	});	
  });
// tabs end























