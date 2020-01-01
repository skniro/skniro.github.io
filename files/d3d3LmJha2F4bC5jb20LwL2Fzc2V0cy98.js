$(function(){
	// if (Modernizr.cssanimations) {
		// $('#container .box').css({display:'block',opacity:0})
		// $('#container .box.main').css({opacity:1})
		// $('h1, #container .box.main p').css({opacity:0})
	// } else {
		// $('#container .box').css({display:'block'});
	// }
    $('#container .box').css({display:'block',opacity:0})
	$('#container .box.main').css({opacity:1})
	$('h1, #container .box.main p').css({opacity:0})
	
	var url=document.URL;
	if(url.indexOf("?top") == -1){
    	// openModal();
	}else{
	}

	var setTopContents = function(){
		$('#container .topics li').each(function(){
			if($(this).find('.txt img').length > 0){
				var _imgurl = $(this).find('.txt img').eq(0).attr('src');
				$(this).find('.image').html('<img src="'+_imgurl+'">')
			}
			var _str = $(this).find('.txt').text();
			$(this).find('.txt').html(countLength(_str,80))

			var _str = $(this).find('.title').text();
			$(this).find('.title').html(countLength(_str,35))
		})
		$('#container .topics li').bind('click',function(){
			if($(this).attr('href') != null)
			{
				window.open($(this).attr('href')); /*'./news/?article_id=' +  */
			}
		})
	}

	setTopContents();

	var _bgAnim1 = function(){
		$('.bgLogo1').css({left:0,top:0}).velocity({left:-804,top:142},10000,'linear',function(){
			_bgAnim1();
		})
	}

	var _bgAnim2 = function(){
		$('.bgLogo2').css({left:0,top:-6}).velocity({left:-1767,top:1014},15000,'linear',function(){
			_bgAnim2();
		})
	}

	var topInit = function(){
		$('#container').masonry({
			itemSelector: '.box',
			columnWidth: 250,
			isAnimated: true,
			isFitWidth: true,
			isRTL: false,
			gutterWidth: 0,
			containerStyle: { position: 'relative' },
			isResizable: true,
		});
		_bgAnim1();
		_bgAnim2();
		$('footer').css({display:'block'})

		// if (Modernizr.cssanimations) {
			// var timeline = new TimelineMax();
			// timeline.fromTo($('h1'), 0.5,
				// {scaleX:1.4,scaleY:1.4} ,
				// {scaleX:1.0,scaleY:1.0,opacity:1,ease:Back.easeOut}
			// );
			// timeline.fromTo($('.main .catch1'), 0.3,
				// {scaleX:0.6,scaleY:0.6} ,
				// {scaleX:1.0,scaleY:1.0,opacity:1,ease:Back.easeOut}
			// );
			// timeline.fromTo($('.main .catch2'), 0.3,
				// {scaleX:0.6,scaleY:0.6} ,
				// {scaleX:1.0,scaleY:1.0,opacity:1,ease:Back.easeOut,onComplete:function(){
					// $('#container .box').each(function(x){
						// if(x>0){
							// var _time = (300 + (x*30)) / 1000;
							// TweenMax.fromTo($('#container .box').eq(x), 0.5,
								// {scaleX:0.8,scaleY:0.8},
								// {scaleX:1.0, scaleY:1.0, opacity:1, delay:_time, ease: Expo.easeOut}
							// );
						// }
					// })
				// }}
			// );
		// } else {
		// }
			var timeline = new TimelineMax();
			timeline.fromTo($('h1'), 0.5,
				{scaleX:1.4,scaleY:1.4} ,
				{scaleX:1.0,scaleY:1.0,opacity:1,ease:Back.easeOut}
			);
			timeline.fromTo($('.main .catch1'), 0.3,
				{scaleX:0.6,scaleY:0.6} ,
				{scaleX:1.0,scaleY:1.0,opacity:1,ease:Back.easeOut}
			);
			timeline.fromTo($('.main .catch2'), 0.3,
				{scaleX:0.6,scaleY:0.6} ,
				{scaleX:1.0,scaleY:1.0,opacity:1,ease:Back.easeOut,onComplete:function(){
					$('#container .box').each(function(x){
						if(x>0){
							var _time = (300 + (x*30)) / 1000;
							TweenMax.fromTo($('#container .box').eq(x), 0.5,
								{scaleX:0.8,scaleY:0.8},
								{scaleX:1.0, scaleY:1.0, opacity:1, delay:_time, ease: Expo.easeOut}
							);
						}
					})
				}}
			);
			
		setTimeout(function(){$('body').css({'filter':''}).velocity("stop", true).velocity({'filter':'gray'}, {duration:250, easing:"easeOutCubic"})}, 1000);
        
        $('.box.bakaxl').bind('click',function(){
			var TempID = $(this).attr('id');
        	openModal($("#" + TempID +" img").attr('id'),$("#" + TempID +" img").attr('alt'));
        })

		$('.box.movie').bind('click',function(){
			openMovie($(this).attr('id'))
		})

	}

	$(window).bind('load',function(){
		topInit();
	})



	$('.close, .wrap_f').each(function() {
		$(this).click(function(event) {
			$(".float").animate({'opacity':0},450,function(){
				$(".float").remove();
			});	

		});
	});

});

var OpenProtocol = true;

var openModal = function(_ItemID,_ItemAlt){
	var ProtocolFrame = document.createElement("iframe");
	if (_ItemID == "NotAvaliable" || OpenProtocol == false)
	{
		$('body').append('<div id="floatMovie"><div class="floatBg"></div><div class="floatWrap"><div class="player_small"> <div class="ItemInfoPannel" style="background:#ffffff;height:100%;width:100%;-webkit-border- radius: 10px 10px 10px 10px;border-radius: 10px 10px 10px 10px;"><div style="width:100%;height:70%;background:#6cb1ff;-webkit-border- radius: 10px 10px 0px 0px;border-radius: 10px 10px 0px 0px"><br /><br /><br /><br /><br /><div class="spinner" style="margin-left:50px;"></div><br /><br /><p id="PlazaItem" style="text-align:left;color:#ffffff;font-size:23px;margin-left:50px;"></p><p style="text-align:left;color:#ffffff;font-size:32px;margin-left:50px;" data-translate="Protocol_Title_Unavaliable">此时无法使用BakaXL协议。</p></div><br /><br /><p style="text-align:center;font-size:15px;" data-translate="Protocol_Content_Unavaliable">此操作目前无法通过BakaXL协议完成，以下是可能存在的问题。<br /><br />1、此资源可能还未在BakaXL笨蛋广场内提供。<br />2、BakaXL协议服务目前不可用。</p></div> <p class="btnClose"></p></div></div></div>');
	}
	else
	{
		$('body').append('<div id="floatMovie"><div class="floatBg"></div><div class="floatWrap"><div class="player_small"> <div class="ItemInfoPannel" style="background:#ffffff;height:100%;width:100%;-webkit-border- radius: 10px 10px 10px 10px;border-radius: 10px 10px 10px 10px;"><div style="width:100%;height:70%;background:#6cb1ff;-webkit-border- radius: 10px 10px 0px 0px;border-radius: 10px 10px 0px 0px"><br /><br /><br /><br /><br /><div class="sk-cube-grid" style="margin-left:52px;"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div><br /><br /><p id="PlazaItem" style="text-align:left;color:#ffffff;font-size:23px;margin-left:50px;"></p><p style="text-align:left;color:#ffffff;font-size:32px;margin-left:50px;" data-translate="Protocol_Title">BakaXL将会处理您的请求…</p></div><br /><br /><p style="text-align:center;font-size:15px;" data-translate="Protocol_Content">您的请求将会自动跳转至BakaXL内进行处理。<br /><br />若您已开启“BakaXL协议”功能，则BakaXL将会自动启动并执行您的请求。<br />若您没有使用过BakaXL或未开启本功能，请手动进入笨蛋广场查看此资源。</p></div> <p class="btnClose"></p></div></div></div>');
		var floatwarp = document.getElementById("ItemInfoPannel");
		ProtocolFrame.src = "BakaXL://" + _ItemID + "|" + _ItemAlt;
		ProtocolFrame.style.display = "none";
		document.body.appendChild(ProtocolFrame);
		// document.getElementById("ProtocolFrame").style.display = 'none' //隐藏
	}
	
	document.getElementById("PlazaItem").innerHTML=_ItemAlt;
	$('#floatMovie').css({display:'block',opacity:0}).velocity("stop", true).velocity({opacity:1}, {duration:250, easing:"easeOutCubic",complete:function(){
		// $('.floatWrap .player_small .ItemInfoPannel .openbakadesc').html('');
	}})
	$('.floatBg, .btnClose').bind('click',function(){
		closeModal();
		document.body.removeChild(ProtocolFrame);
	})
}

var closeModal = function(){
	$('#floatMovie').velocity("stop", true).velocity({opacity:0},800,'easeOutSine',function(){
		$(this).remove();
	})
}