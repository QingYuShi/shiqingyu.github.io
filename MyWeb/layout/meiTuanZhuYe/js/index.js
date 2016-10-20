// JavaScript Document
$(function(){
	$('.csh_li>.p1').on('mouseover',function(){
		$(this).find('.a1').addClass('on');
		$(this).find('.a2').addClass('on')	
	});	
	$('.csh_li>.p1').on('mouseout',function(){
		$(this).find('.a1').removeClass('on');
		$(this).find('.a2').removeClass('on')	
	});	
	$('.csh_li>.a5').on('mouseover',function(){
		$(this).addClass('on');	
	});
	$('.csh_li>.a5').on('mouseout',function(){
		$(this).removeClass('on');	
	});
	$('.csh_title_r>a').on('mouseover',function(){
		$(this).addClass('on');	
	});
	$('.csh_title_r>a').on('mouseout',function(){
		$(this).removeClass('on');	
	});
	$('.ninth_top>a').on('mouseover',function(){
		$('.ninth_top>a').removeClass('on');
		$('.ninth_bt').removeClass('show');
		
		$(this).addClass('on');
		$('.ninth_bt').eq($(this).index()).addClass('show');
		
	});
	$('.ninth_bt>a').on('mouseover',function(){
		$(this).addClass('on')	
	});
	$('.ninth_bt>a').on('mouseout',function(){
		$(this).removeClass('on')	
	});
	$('.aaa').on('mouseover',function(){
		$(this).addClass('on');	
	});
	$('.aaa').on('mouseout',function(){
		$(this).removeClass('on');	
	});
	$('.footernav').find('a').on('mouseover',function(){
		$(this).addClass('on');	
	});
	$('.footernav').find('a').on('mouseout',function(){
		$(this).removeClass('on');	
	});
	
});











