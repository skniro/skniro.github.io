var _baseUrl = 'http://www.BakaXL.com';

$(function(){
	var _url = location.href;
	_url = _url.split(_baseUrl)[1];

	$('.navR .third li').each(function(x){
		var _link = $(this).find('a').attr('href')
		if(_url == _link){
			$(this).addClass('current')
		}
	})


	var thirdInit = function(){
		$('.navL .season .second').hover(function(){
			$('.navL ul.season li.second .icon.off').css({display:'none'})
			$('.navL ul.season li.second .icon.on').css({display:'block'})
			$('.navL ul.season li.third .icon.select').css({display:'block'})
		},function(){
			$('.navL ul.season li.second .icon.on').css({display:'none'})
			$('.navL ul.season li.second .icon.off').css({display:'block'})
			$('.navL ul.season li.third .icon.select').css({display:'block'})
		})
		$('.navL .season .first').hover(function(){
			$('.navL ul.season li.first .icon.off').css({display:'none'})
			$('.navL ul.season li.first .icon.on').css({display:'block'})
			$('.navL ul.season li.third .icon.select').css({display:'block'})
		},function(){
			$('.navL ul.season li.first .icon.on').css({display:'none'})
			$('.navL ul.season li.first .icon.off').css({display:'block'})
			$('.navL ul.season li.third .icon.select').css({display:'block'})
		})
		$('header').hover(function(){
		},function(){
			$('header').removeClass('navFirst').removeClass('navSecond').addClass('navThird');
		})

		$('.special .index li.movie').bind('click',function(){
			openMovie($(this).attr('id'))
		})
	}

	$(window).bind('load',function(){
		thirdInit();
	})
});