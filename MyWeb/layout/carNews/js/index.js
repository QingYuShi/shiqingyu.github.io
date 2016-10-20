$(function(){
	$('.hd_l>.sub').on('click',function(ev){
		$(this).addClass('on');
		ev.stopPropagation();
	});
	$(document).on('click',function(){
		$('.hd_l>.sub').removeClass('on');
	});
	$('.hot_top>a').on('mouseover',function(){
		$('.hot_top>a').removeClass('on');
		$('.hot_bt').removeClass('show');
		
		$(this).addClass('on');
		$('.hot_bt').eq($(this).index()).addClass('show');
	});
	$('.div_b>.p1>.a1').on('mouseover',function(){
		$('.div_b>.p1>.a1').removeClass('on');
		$('.fir_lc>.aa').removeClass('show');
		
		$(this).addClass('on');
		$('.fir_lc>.aa').eq($(this).index()).addClass('show');
	});
	$('.thi_rb>li').on('mouseover',function(){
		$('.thi_rb>li').removeClass('on');
		$(this).addClass('on');
	});
	$('.cont_at>.a1').on('mouseover',function(){
		$('.cont_ab').removeClass('show');
		$('.cont_ab').eq($(this).index()).addClass('show');
	});
	
	
});