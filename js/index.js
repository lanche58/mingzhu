function initBox() {
};
initBox();
$(window).resize(function () {
	initBox();
});
$(function(){

	
	
	/* if(w_width>861){
		$('.bannerSlide').bxSlider({
			//auto: true, 
			pause: 5000,
			speed: 1000,
			nextSelector: '.banner .ba-next',
	        prevSelector: '.banner .ba-prev',
			onSliderLoad:function(currentIndex){
				$('.bannertxts').eq(currentIndex+1).find('.transY').addClass('transShow');
      	   	},onSlideAfter: function($slideElement, oldIndex, newIndex) {
				$('.bannertxts .transY').removeClass('transShow');
      	   		$('.bannertxts').eq(newIndex+1).find('.transY').addClass('transShow');
      		}
		});
	}else{
		$('.bannerSlide').bxSlider({
			auto: true, 
			pause: 5000,
			speed: 500,
			nextSelector: '.banner .ba-next',
	        prevSelector: '.banner .ba-prev'
		});
	};  */
	/*function ixproBox(){
		var processC=$('.ixproslide').hasClass('slick-slider');
		if(w_width<=861&&processC==false){
			$('.ixproslide').slick({
				arrows: false,
				dots: true,
				customPaging: function(slider, i){
					return $('<a data-role="none" role="button" tabindex="0"></a>').html('<i class="bg"></i>'+'<p class="txx">'+$('.ixproslide .item').eq(i+1).attr('data-title')+'</p>');
				}
			});
		}else if(w_width>861&&processC==true){
			$('.ixproslide').slick('unslick');
		}else{
			return;
		}
	};
	ixproBox();
	$(window).resize(function () {
        initBox();
		ixproBox();
    });*/
	/*var banenrLen=$bannerSlide.find('.item').length;
	$('.banner .anum').html(banenrLen);
	$bannerSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.banner .cnum').html(nextSlide+1);
	});*/
	/*$('.probox1 .ip-prev').click(function(e){
		e.preventDefault();
		$('.probox1 .proslide').slick('slickPrev');
	});
	$('.probox1 .ip-next').click(function(e){
		e.preventDefault();
		$('.probox1 .proslide').slick('slickNext');
	});
	$('.probox1 .proslide').slick({
		dots: false,
		fade: true,
		responsive: [
			{
				breakpoint: 861,
				settings: {
					fade: false,
					dots: true,
					arrows: false,
				}
			}
		]
	});*/
	/* $(".i3 .works a").each(function(i,o){
		$(this).css({"transition":"700ms "+(i*200+300)+"ms"});
	});  */
	
	
})