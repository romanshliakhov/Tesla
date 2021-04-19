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

// accordion start
$('.filter__header').click(function(){
	$(this).next('.filter__body').slideToggle();
})
// accordion end

// polzunok start 
$(".polzunok-5").slider({
	min: 0,
	max: 100000,
	values: [15000,80000],
	range: true,
	animate: "fast",
	slide: function (event, ui) {
	  $(".polzunok-input-5-left").val(ui.values[0]);
	  $(".polzunok-input-5-right").val(ui.values[1]);
	}
  });
  $(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
  $(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
  $(".polzunok-container-5 input").change(function () {
	var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
	  opt_left = $(".polzunok-5").slider("option", "min"),
	  where_right = $(".polzunok-5").slider("values", 1),
	  input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
	  opt_right = $(".polzunok-5").slider("option", "max"),
	  where_left = $(".polzunok-5").slider("values", 0);
	if (input_left > where_right) {
	  input_left = where_right;
	}
	if (input_left < opt_left) {
	  input_left = opt_left;
	}
	if (input_left == "") {
	  input_left = 0;
	}
	if (input_right < where_left) {
	  input_right = where_left;
	}
	if (input_right > opt_right) {
	  input_right = opt_right;
	}
	if (input_right == "") {
	  input_right = 0;
	}
	$(".polzunok-input-5-left").val(input_left);
	$(".polzunok-input-5-right").val(input_right);
	if (input_left != where_left) {
	  $(".polzunok-5").slider("values", 0, input_left);
	}
	if (input_right != where_right) {
	  $(".polzunok-5").slider("values", 1, input_right);
	}
  });
// polzunok end 






















