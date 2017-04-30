$(document).ready(function() {

	//navigation
	$(".more").click(function(event) {
    event.preventDefault();
		$(".dropdownTop").slideToggle();
	});

 $(".dropdown").mouseleave(function () {
    $(".dropdownTop").slideUp('slow');
});

	//carouselTop
	$(".prev-slide").click(function(){
    $("#myCarousel").carousel('prev');
  });
  $(".next-slide").click(function(){
    $("#myCarousel").carousel('next');
  });

	//carouselMiddle
	$(".prev-slide2").click(function(){
    $("#myCarousel2").carousel('prev');
  });
  $(".next-slide2").click(function(){
    $("#myCarousel2").carousel('next');
  });

	//radio buttons
	$('.radioCell').click(function() {
 	$(this).children('input').prop('checked', true);
  
  $('.radioCell').removeClass('selected');
  $(this).toggleClass('selected');
  });
});