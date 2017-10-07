
$(document).ready(function() {

	// Custom Form Styling
	//$.jStyling.createSelect($('.custom-select'));
	//$.jStyling.createRadio($('.custom-radio'));

	// Toggle menu
	$(".navclosed").click(function () {
		$(this).toggleClass("navclicked");
		$(".nav").toggleClass("nav-open");
		$(".wrapper").toggleClass("fade-opacity");
		$(".logo").toggleClass("fade-opacity");
		return false;
	});

	// open close wheel image
	$(".open-wheel").click(function () {
		$(".wheel-closed").toggleClass("wheel-open");
		return false;
	});
	$(".button-close").click(function () {
		$(".wheel-closed").toggleClass("wheel-open");
		return false;
	});

	//Tabs
	$('.tabs-btns a').click(function(){
		$('.tabs-btns a.on').removeClass('on');
		$(this).addClass('on');

		$(".slide1-pos-1").toggleClass("slide1-pos-2");
		$(".slide2-pos-1").toggleClass("slide2-pos-2");

		var target = $(this).attr('href');
		if( !$( target ).is(':visible') ){
		$('.tab-area').hide();
		$( target ).fadeIn();
		}
		return false; 
	});
	$('.tabs-btns a.on').trigger('click');

	//Tabs Second Column
	$('.tabs-btns2 a').click(function(){
		$('.tabs-btns2 a.on').removeClass('on');
		$(this).addClass('on');

		$(".slide-mid").toggleClass("slide-mid-push");
		$(".slide3-pos-1").toggleClass("slide3-pos-2");

		var target = $(this).attr('href');
		if( !$( target ).is(':visible') ){
		$('.tab-area2').hide();
		$( target ).fadeIn();
		}
		return false; 
	});
	$('.tabs-btns2 a.on').trigger('click');

	//Go Back 1
	$('.goback1 a').click(function(){
		$(".slide1-pos-1").toggleClass("slide1-pos-2");
		$(".slide2-pos-1").toggleClass("slide2-pos-2");
		return false; 
	});

	//Go Back 2
	$('.goback2 a').click(function(){
		$(".slide-mid").toggleClass("slide-mid-push");
		$(".slide3-pos-1").toggleClass("slide3-pos-2");
		return false; 
	});

	// Div name to make snap to top of page
	$(".snap").snapPoint();

	// slide down to section and switch on button
	$('.goto a').click(function() {
		$('.waypoint').waypoint('disable');

		var target = $(this.hash);
		var target2 = $(this).attr('href');
		if (target.length) {

			$('html,body').animate({
				scrollTop: target.offset().top - $('.waypoint').outerHeight()
				}, 1000, function(){
					$('.waypoint').waypoint('enable');	
			});

//			var targetColor = $(target2).next().attr('data-color');
//			console.log(targetColor);
//			$('.subnav').removeClass('light');
//			$('.subnav').removeClass('dark');
//			$('.subnav').addClass(targetColor);

			return false;

		}

	});

	$('.backtotop a').click(function() {
		// $('.waypoint').waypoint('disable');
		// $('.subnav a').removeClass('on');
		// $(this).addClass('on');			

		var target = $(this.hash);
		if (target.length) {

			$('html,body').animate({
				scrollTop: target.offset().top - $('.waypoint').outerHeight()
				}, 1000, function(){
					$('.waypoint').waypoint('enable');	
			});
			return false;
		}

	});

	//On page ready if hash is available
	if(history.pushState || location.hash) {
		$('a[href$="'+ window.location.hash +'"]').trigger('click');     
	}

	//add and remove selected class
/*	$('.waypoint').waypoint(function(direction) {
		if (direction === 'down') {
			$('.subnav a').removeClass('on');
			$('.subnav a[href="#'+$(this).attr('id')+'"]').addClass('on');                
			var target2 = $( $(this).attr('id') );
				var targetColor = $('#'+target2.selector).next().attr('data-color');
				console.log(target2.selector);
				$('.subnav').removeClass('light');
				$('.subnav').removeClass('dark');
				$('.subnav').addClass(targetColor);
			}
	}, {
		offset: '40%'
	}).waypoint(function(direction) {
			if (direction === 'up') {
				$('.subnav a').removeClass('on');
				$('.subnav a[href="#'+$(this).attr('id')+'"]').addClass('on');
				var target2 = $( $(this).attr('id') );
				var targetColor = $('#'+target2.selector).next().attr('data-color');
				console.log(target2.selector);
				$('.subnav').removeClass('light');
				$('.subnav').removeClass('dark');
				$('.subnav').addClass(targetColor);
			}
	}, {
		offset: '-40%'
	});
*/
	$('.go-clockwise').click(function(){
		var currentRotateValuePrev = $('.img-wheel').attr('data-rotate');
		var countValuePrev = parseInt( $('.img-wheel').attr('data-count') );
		countValuePrev = countValuePrev - 1
		if(countValuePrev < 1){
			countValuePrev = 14;
		}else if(countValuePrev > 14){
			countValuePrev = 1;
		}

		var valuePrev = 360/14;
		var mustGo = parseFloat(currentRotateValuePrev)+parseFloat(valuePrev);
		$('.img-wheel').css('transform', 'rotate('+ mustGo +'deg)');
		$('.img-wheel').attr( 'data-rotate', mustGo );

		var addClassHerePrev = '.rotation' + countValuePrev;
		$('.rotate-content').removeClass('active');
		$(addClassHerePrev).addClass('active');
		$('.img-wheel').attr( 'data-count', countValuePrev );
		return false;
	});

	$('.go-anti-clockwise').click(function(){
		var currentRotateValueNext = $('.img-wheel').attr('data-rotate');
		var countValueNext = parseInt( $('.img-wheel').attr('data-count') );

		countValueNext = countValueNext + 1;

		if(countValueNext < 1){
			countValueNext = 14;
		}else if(countValueNext > 14){
			countValueNext = 1;
		}

		var valueNext = 360/14;
		var mustGoNext = parseFloat(currentRotateValueNext) - parseFloat(valueNext);
		$('.img-wheel').css('transform', 'rotate('+ mustGoNext +'deg)');
		$('.img-wheel').attr( 'data-rotate', mustGoNext );

		var addClassHereNext = '.rotation' + countValueNext;
		$('.rotate-content').removeClass('active');
		$(addClassHereNext).addClass('active');
		$('.img-wheel').attr( 'data-count', countValueNext );

		return false;
	});


});
