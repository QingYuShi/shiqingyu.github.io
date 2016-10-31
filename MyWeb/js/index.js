requirejs.config({
    baseUrl: 'js/lib',
    // paths: {
    //     app: '../app'
    // }
});

requirejs(['jquery', 'move','fillZero','fontColor','rnd','a2d'],
function   ($,move,fillZero,fontColor,rnd,a2d) {

    $(document).on("mousedown",function()
	{
		return false;
	})

	var aTime=$('#time .time')
	function date()
	{
		var d=new Date();
		var hours=fillZero(d.getHours());
		var minutes=fillZero(d.getMinutes());
		var seconds=fillZero(d.getSeconds());
		s=hours+minutes+seconds;
		for(var i = 0; i< aTime.length;i++)
		{
			aTime[i].src='images/time_Images/'+s.charAt(i)+'.png'
		}
	}
	date();
	setInterval(date,1000)


	//-----------------------------header----------------------------------------
	$('.head_box li').each(function(index)
	{
		var arr=['Banner','AboutMe','PassThrough','surRound','tabPage','youKu','xiaoMi','meiLiShuo','v360','hunSha']
		var oA=$("<a href='#"+index+"'>"+arr[index]+"</a>");
		$(this).append(oA);
	})
	$('.head_box li a').eq(0).attr('href','#');
	$('.head_box li a').eq(5).attr({href:'layout/youKu/index.html',target:'_blank'});
	$('.head_box li a').eq(6).attr({href:'layout/xiaoMi/index.html',target:'_blank'});
	$('.head_box li a').eq(7).attr({href:'layout/meiLiShuo/index.html',target:'_blank'});
	$('.head_box li a').eq(8).attr({href:'layout/v360/index.html',target:'_blank'});
	$('.head_box li a').eq(9).attr({href:'layout/hunSha/index.html',target:'_blank'});

	$('.head_box li').hover(function()
	{
		$('.head_box li a').css('color','#fff')
		$($(this).children()[0]).css('color','yellow')
		var oSpan=$("<span></span>");
		$(this).append(oSpan);
		oSpan.stop().animate({top:0})
	},function()
	{
		$('.head_box li a').css('color','#fff')
		var oSpan=$(this).children()[1];
		$(oSpan).remove();
	})

	//-----------------------------banner----------------------------------------
	function banner()
	{
		timer=null;
		timer1=null;
		var iNow=0;
		var banner_ready=true;
		var arr=['你好,我叫史庆玉,欢迎您来阅览我的博客。',
		'本人性格开朗活泼,大方乐观,积极进取,我一直认为用心,踏实是做好每一件事的基础,而热情,真诚是待人必不可少的条件,也是取得良好人际关系的必要条件。',
		'我相信世上无难事只怕有心人,积极乐观,自信细心,相信这些品质可以为我今后的工作带来些许优势,让我以更踏实地心态去完成好每一件工作。']
		clearInterval(timer1)
		timer1=setInterval(function(){$('.banner_btm .next')[0].click();},10000)
		$('.banner_btm').hover(function()
		{
			clearInterval(timer1)
		},function()
		{
			timer1=setInterval(function(){$('.banner_btm .next')[0].click();},10000)
		})
		function write(str)
		{
			$('.write').text('');
			clearInterval(timer);

			for(var i = 0; i<str.length; i++)
			{
				var oSpan=$('<span></span>')
				oSpan.text(str[i]);

				$('.write').append(oSpan)
			}
			var i=0;
			var aSpan=$('.write span');
			timer=setInterval(function()
			{
				aSpan[i].className='active';
				i++;
				if (i==aSpan.length)
				{
					clearInterval(timer)
				}
			},100)
		}
		write(arr[0]);

		$('.banner_btm span').hover(function()
		{
			$(this).addClass('over');
		},function()
		{
			$(this).removeClass('over')
		})

		$('.banner_btm .prev').on('click',function()
		{
			if (!banner_ready) return;
			banner_ready=false;
			iNow--;
			$('.bannerImg').stop().animate({opacity:0},{complete:function()
			{
				$('.bannerImg').removeClass('show'+(iNow+1));
				if(iNow<0)iNow=2;
				write(arr[iNow]);
				$('.bannerImg').eq(iNow).addClass('show'+iNow);
				$('.bannerImg').eq(iNow).stop().animate({opacity:1},{complete:function()
				{
					banner_ready=true;
				}});
				$('.banner_center span').removeClass('on');
				$('.banner_center span').eq(iNow).addClass('on');
			}})
		})

		$('.banner_btm .next').on('click',function()
		{
			if (!banner_ready)return;
			banner_ready=false;
			iNow++;
			$('.bannerImg').stop().animate({opacity:0},{complete:function()
			{
				$('.bannerImg').removeClass('show'+(iNow-1));
				if(iNow>2)iNow=0;
				write(arr[iNow]);
				$('.bannerImg').eq(iNow).addClass('show'+iNow);
				$('.bannerImg').eq(iNow).stop().animate({opacity:1},{complete:function()
				{
					banner_ready=true;
				}});
				$('.banner_center span').removeClass('on');
				$('.banner_center span').eq(iNow).addClass('on');

			}})
		})

		$('.banner_center span').on('click',function()
		{
			if (!banner_ready)return;
			banner_ready=false;

			write(arr[$(this).index()]);
			var _this=$(this);
			$('.bannerImg').stop().animate({opacity:0},{complete:function()
			{
				$('.bannerImg').removeClass('show'+iNow);
				iNow=_this.index();
				$('.bannerImg').eq(iNow).addClass('show'+iNow);
				$('.bannerImg').eq(iNow).stop().animate({opacity:1});
				$('.banner_center span').removeClass('on');
				_this.addClass('on');
				banner_ready=true;
			}})
		})
	}
	banner();
// -------------------------------------about me--------------------------------------
	function about()
	{

		var oDiv   = document.getElementById("photo");
		var oPage  = oDiv.querySelector(".page");
		var oFront = oDiv.querySelector(".front");
		var oBack  = oDiv.querySelector(".back");
		var oPage2 = oDiv.querySelector(".page2");

		var iNow = 0;
		var bReady = true;

		function isIE()
		{
		    if(window.ActiveXObject || "ActiveXObject" in window)
		    {
		    	return true;
		    }
		    else
		    {
		    	return false;
		    }
		}
		if(!isIE())
		{

			oDiv.onclick = function()
			{
				if(!bReady) return ;

				bReady = false;
				iNow++;
				oPage.style.transition = "1s all ease";
				oPage.style.transform = "perspective(800px) rotateY(-180deg)";
			};

			oPage.addEventListener("transitionend",function()
			{
				bReady = true;

				oPage.style.transition = "none";
				oPage.style.transform = "perspective(800px) rotateY(0deg)";
				oDiv.style.backgroundImage = "url(images/"+iNow%5+".jpg)";
				oFront.style.backgroundImage = "url(images/"+iNow%5+".jpg)";
				oBack.style.backgroundImage = "url(images/"+(iNow+1)%5+".jpg)";
				oPage2.style.backgroundImage = "url(images/"+(iNow+1)%5+".jpg)";
			});
		}
	}
	about();
// --------------------------------------passThrough----------------------------------

	function getDir(obj,ev)
	{
		var x = ev.pageX - (obj.offset().left + obj.width()/2)
		var y = obj.offset().top + obj.height()/2 - ev.pageY;

		return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
	}

	//Math.atan2(y,x)弧度；
	//a2d(Math.atan2(y,x)转角度;
	//a2d(Math.atan2(y,x))+180----把正负180度转成0-360度;
	//a2d(Math.atan2(y,x))+180)/90 比例缩小90倍0-4;
	//Math.round((a2d(Math.atan2(y,x))+180)/90)四舍五入;
	//Math.round((a2d(Math.atan2(y,x))+180)/90)%4;

		$('.lagou_box li').each(function()
		{
			lagou($(this))
		})

		function lagou(obj)
		{
			var oSpan=obj.children().eq(0);

			obj.on('mouseenter',function(ev)
			{
				var n = getDir(obj,ev);
				switch(n)
				{
					case 0:
						oSpan.css({left: "-3rem",top: "0"})
						break;
					case 1:
						oSpan.css({left: "0",top: "3rem"})
						break;
					case 2:
					oSpan.css({left: "3rem",top: "0"})
						break;
					case 3:
					oSpan.css({left: "0",top: "-3rem"})
						break;
				}
				$(oSpan).stop().animate({left:0,top:0});
			});

			obj.on('mouseleave',function(ev)
			{
				var n = getDir(obj,ev);
				switch(n)
				{
					case 0:
						oSpan.stop().animate({left:"-3rem",top:0});
						break;
					case 1:
						oSpan.stop().animate({left:0,top:"3rem"});
						break;
					case 2:
						oSpan.stop().animate({left:"3rem",top:0});
						break;
					case 3:
						oSpan.stop().animate({left:0,top:"-3rem"});
						break;
				}
			})
		}
// -----------------------------------img surRound--------------------------------------
	function surRound()
	{
		var len=$('.surRound ul li').length;
		var num = 4;
		$('.surRound ul li').each(function()
		{
			$(this).css('transition',"1s all ease " + (len-$(this).index())*200 +"ms");
			if ($(window).width()<780)
			{
				num = 2.8;
			}
			$(this).css("transform","rotateY("+360/len*$(this).index()+"deg) translateZ("+num+"rem)");
		})
	}
	var surRoundR=true;
	$('.surRound_btn').on('click',function()
	{
		if (surRoundR)
		{
			this.value='收起那女孩';
			surRound();
			surRoundR=false;
		}
		else
		{
			this.value='放开那妹子';
			$('.surRound ul li').each(function()
			{
				$(this).css('transition',"1s all ease " + $(this).index()*200 +"ms");
				$(this).css('transform',"rotateY(0deg) translateZ(0rem)");
				$('.surRound ul').css('transform',"perspective(800px) rotateX(-15deg) rotateY(0deg)");
			})
			surRoundR=true;
		}
	})
	function surRoundDrag()
	{
		var x=150;
		var y=0;
		var speedX = 0;
		var speedY = 0;
		var lastX = 0;
		var lastY = 0;
		var surRound_timer = null;
		var count = 0;
		$('.surRound ul').on('mousedown',function(ev)
		{
			clearInterval(surRound_timer);
			var disX=ev.pageX-y;
			var disY=ev.pageY-x;
			document.onmousemove=function(ev)
			{
				y=ev.pageX-disX;
				x=ev.pageY-disY;
				if(x > 600)
				{
					x = 600;
				}
				else if(x < -600)
				{
					x = -600;
				}
				speedX=x-lastX;
				speedY=y-lastY;

				lastX=x;
				lastY=y;
				$('.surRound ul').css('transform',"perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)");
			};
			document.onmouseup=function(ev)
			{
				document.onmousemove=document.onmouseup=null;
				clearInterval(surRound_timer);
				surRound_timer=setInterval(function()
				{
					x+=speedX;
					y+=speedY;
					speedX*=0.95;
					speedY*=0.95;

					if(Math.abs(speedX) < 1)
					{
						speedX = 0;
					}
					if(Math.abs(speedY) < 1)
					{
						speedY = 0;
					}
					if(speedX == 0&& speedY == 0)
					{
						clearInterval(surRound_timer);
					}
					$('.surRound ul').css('transform','perspective(800px) rotateX('+-x/10+'deg) rotateY('+y/10+'deg)')
				},30)
			};
			return false;
		})
	}
	surRoundDrag();
// -----------------------------------点击换页 tabPage--------------------------------------
	(function()
	{
		var oDiv=document.querySelector('.tabPage');
		var oUl=oDiv.querySelector('ul');
		var aLi=oDiv.querySelectorAll('li');
		var aImg=oDiv.querySelectorAll('img');
		var oBtn=document.querySelector('#tabPage_btn');
		var bReady=true;
		var count=0;
		var aPos=[];
		var aLiH=aLi[0].offsetHeight;
		var aLiW=aLi[0].offsetWidth;
		for(var i = 0; i < aLi.length; i++)
		{
			aPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop})
		}
		for(var i = 0; i < aLi.length; i++)
		{
			aLi[i].style.left=aPos[i].left+'px';
			aLi[i].style.top=aPos[i].top+'px';
			aLi[i].style.margin=0;
			aLi[i].style.position='absolute';
		}
		oBtn.onclick=function()
		{
			if (!bReady)return;
			bReady=false;
			count++;
			down();
		};
		function down()
		{
			var i=aLi.length-1;
			var timer=setInterval(function(){
				(function(index)
				{
					move(aLi[i],{left:oUl.offsetWidth/2,top:oUl.offsetHeight,
						width:0,height:0},
					{time:700,
						fn:function()
						{
							if (index==0)
							{
								up();
							}
						}
					});
				})(i);
				i--;
				if (i==-1)clearInterval(timer);
			},200)
		}
		function up()
		{
			var i=aLi.length-1;
			var timer=setInterval(function()
			{
				(function(index)
				{
					move(aLi[i],{left:aPos[i].left,top:aPos[i].top,
						height:aLiH,width:aLiW},
					{
						time:700,
						fn:function()
						{
							if (index==0)
							{
								bReady=true;
							}
						}
					})
				})(i)
				i--;
				if (i==-1)clearInterval(timer);
			},200)

			if (count==8)count=0;
			for (var j= 0; j < aLi.length; j++)
			{
				var oImg=aLi[j].getElementsByTagName('img')[0];
				oImg.src='images/surround/'+count+'.jpg';
			}
		}
	})()



});

