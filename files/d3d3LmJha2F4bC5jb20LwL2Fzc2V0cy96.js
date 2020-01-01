$(function(){
	if(navigator.userAgent.indexOf("MSIE") != -1) {
		$('img').each(function() {
			if($(this).attr('src').indexOf('.png') != -1) {
				$(this).css({
					'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' +
					$(this).attr('src') +
					'", sizingMethod="scale");'
				});
			}
		});
	}

	var commonInit = function(){
		$('header').hover(function(){
			$('header').removeClass('navOff').addClass('navOn')
			$('header').velocity("stop", true).velocity({width:120},200,'easeOutSine');
			$('header .navL').velocity("stop", true).velocity({width:120},200,'easeOutSine');
			$('header .navL .season li').velocity("stop", true).velocity({height:120},200,'easeOutSine');
			$('header .navL .season li .icon').velocity("stop", true).velocity({width:82,height:60},200,'easeOutSine');
			$('header .navL .season li .txt').css({display:'block',opacity:0}).velocity("stop", true).velocity({opacity:1},200,'easeOutSine');
			$('header .navL .share').velocity("stop", true).velocity({width:90,left:15},200,'easeOutSine');
			$('header .navL .arrow img').velocity("stop", true).velocity({top:14},200,'easeOutSine');
		},function(){
			$('header').removeClass('navOn').addClass('navOff')
			$('header').velocity("stop", true).velocity({width:90},200,'easeOutSine');
			$('header .navL').velocity("stop", true).velocity({width:90},200,'easeOutSine');
			$('header .navL .season li').velocity("stop", true).velocity({height:89},200,'easeOutSine');
			$('header .navL .season li .icon').velocity("stop", true).velocity({width:65,height:48},200,'easeOutSine');
			$('header .navL .season li .txt').velocity("stop", true).velocity({opacity:0},200,'easeOutSine',function(){
				$(this).css({display:'none'})
			});
			$('header .navL .share').velocity("stop", true).velocity({width:36,left:27},200,'easeOutSine');
			$('header .navL .arrow img').velocity("stop", true).velocity({top:0},200,'easeOutSine');
		})

		$('.alphaBtn').hover(function(){
			$(this).stop().velocity({opacity:0.5},200,'linear')
		},function(){
			$(this).stop().velocity({opacity:1},200,'linear')
		});

		$('.btnPagetop').bind('click',function(){
			scrollTo(0,600)
		})

		$('a[href^=#]').click(function() {
			var speed = 800;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top -10;
			$('body,html').animate({scrollTop:position}, speed, 'easeOutSine');
			return false;
		});
	}
	
	$(window).bind('load',function(){
		commonInit();
	})

	$(window).exScrollEvent(function(evt,param){
		if(param.scroll.left > 0){
			$('header').css({'left': -param.scroll.left});
		}else{
			$('header').css({'left': 0});
		}
	})
});

var scrollTo = function(postop,speed){
	$('body,html').animate({scrollTop:postop}, speed, 'easeOutQuad');
}

var countLength = function(str,cut) {
	var r = 0;
	var title = '';
	for (var i = 0; i < str.length; i++) {
		var c = str.charCodeAt(i);
		var t = str.charAt(i);
		if ( (c >= 0x0 && c < 0x81) || (c == 0xa0) || (c >= 0xa1 && c < 0xe0) || (c >= 0xfd && c < 0x100)) {
			r += 1;
		} else {
			r += 2;
		}

		if(r > cut) {
			title += '...';
			return title;
		}
		title += t;
	}
	return title;
}

var openMovie = function(_movId){
	$('body').append('<div id="floatMovie"><div class="floatBg"></div><div class="floatWrap"><div class="player"></div><p class="btnClose"></p></div></div>')
	$('#floatMovie').css({display:'block',opacity:0}).velocity("stop", true).velocity({opacity:1}, {duration:250, easing:"easeOutCubic",complete:function(){
		$('.floatWrap .player').html('<embed height="100%" width="100%" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=3869775&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>')
	}})
	$('.floatBg, .btnClose').bind('click',function(){
		closeMovie();
	})
}

var closeMovie = function(){
	$('#floatMovie').velocity("stop", true).velocity({opacity:0},800,'easeOutSine',function(){
		$(this).remove();
	})
}