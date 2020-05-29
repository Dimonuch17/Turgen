$(function () {

	// Preloader
	var $preloader = $('#page-preloader'),
	$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');

// Параллакс от скролла
$(window).bind('scroll',function(e){
	parallaxScroll();
});
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('.header').css('top',(0-(scrolled*0.75))+'px');
}

	// Fixed navigation
	$(window).scroll(function() {
		if ($(this).scrollTop() > 600){  
			$('nav').addClass("sticky");
		}
		else{
			$('nav').removeClass("sticky");
		}
	});

    // плавное перемещение страницы к нужному блоку
    $(".go").click(function (e) {
    	e.preventDefault();
    	elementClick = $(this).attr("href");
    	destination = $(elementClick).offset().top;
    	$("body,html").animate({scrollTop: destination }, 1000);
    });

// Animated.css
$(window).scroll(function() {
	$('.about__img img').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+750) {
			$(this).addClass("fadeInRight");
		}
	});
	$('.advan__item_left').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+550) {
			$(this).addClass("fadeInLeft");
		}
	});
	$('.advan__item_right').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+550) {
			$(this).addClass("fadeInRight");
		}
	});
	$('.appli__item').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+650) {
			$(this).addClass("fadeInUp");
		}
	});
	$('.anitab-left').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+750) {
			$(this).addClass("fadeInLeft");
		}
	});
	$('.anitab-right').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+750) {
			$(this).addClass("fadeInRight");
		}
	});
});

// Button UP

$(window).scroll(function() {
	if($(this).scrollTop() != 0) {
		$('#toTop').fadeIn();
	} else {
		$('#toTop').fadeOut();
	}
});
$('#toTop').click(function() {
	$('body,html').animate({scrollTop:0},800);
});


});

