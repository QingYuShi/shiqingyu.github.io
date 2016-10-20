// JavaScript Document
$(function (){
			
			/*top*/
	$('.search_c').on('click',function (ev){
		$('.s_div1').show();
		ev.stopPropagation();	
	});
	$(document).on('click',function (){
		$('.s_div1').hide();
	});
	$('.nav_l>a').on('mouseover',function (){
		$(this).addClass('show');
		
	});
	$('.nav_l>a').on('mouseout',function (){
		$(this).removeClass('show');
		
	});
	$('.top_r>a').on('mouseover',function (){
		$(this).addClass('show');
		
	});
	$('.top_r>a').on('mouseout',function (){
		$(this).removeClass('show');
		
	});
	$('.nav_c>a').on('mouseover',function(){
		$(this).addClass('show')	
	});
	$('.nav_c>a').on('mouseout',function(){
		$(this).removeClass('show')	
	});
	
	
		/*banner*/
	
	$('.banner_lt>.a1').on('mouseover',function (){
		$(this).addClass('show')	
	});
	$('.banner_lt>.a1').on('mouseout',function (){
		$(this).removeClass('show')	
	});
	$('.banner').find('li').on('mouseover',function (){
		$(this).find('.banner_divs').show();
		$(this).find('.p1').hide();
	});
	$('.banner').find('li').on('mouseout',function(){
		$(this).find('.banner_divs').hide();
		$(this).find('.p1').show();	
	});
	
	
		/*content*/-/*first*/
	$('.first_lt>a').on('mouseover',function(){
		$('.first_lt>a').removeClass('on');
		$('.first_l>ul').removeClass('show')
		
		$(this).addClass('on')
		$('.first_l>ul').eq($(this).index()-1).addClass('show');	
	});
		/*second*/
	$('.second_lt>a').on('mouseover',function(){
		$('.second_lt>a').removeClass('on');
		$('.second_lc>ul').removeClass('show');	
		
		$(this).addClass('on');
		$('.second_lc>ul').eq($(this).index()).addClass('show');
	});
		/*third*/
	$('.third_lt>a').on('mouseover',function(){
		$('.third_lt>a').removeClass('on');
		$('.third_lb').removeClass('show');	
		
		$(this).addClass('on');
		$('.third_lb').eq($(this).index()-1).addClass('show');
	});
	$('.third_rt>a').on('mouseover',function(){
		$('.third_rt>a').removeClass('on');
		$('.third_rc').removeClass('show');	
		
		$(this).addClass('on');
		$('.third_rc').eq($(this).index()).addClass('show');
	});
	$('.fourth_rt>a').on('mouseover',function(){
		$('.fourth_rt>a').removeClass('on');
		$('.fourth_rb').removeClass('show');	
		
		$(this).addClass('on');
		$('.fourth_rb').eq($(this).index()).addClass('show');
	});
	$('.as>a').on('mouseover',function(){
		$('.as>a').removeClass('on');
		$('.fifth_lb').removeClass('show');	
		
		$(this).addClass('on');
		$('.fifth_lb').eq($(this).index()).addClass('show');
	});
	$('.fifth_rt>a').on('mouseover',function(){
		$('.fifth_rt>a').removeClass('on');
		$('.fifth_rc').removeClass('show');	
		
		$(this).addClass('on');
		$('.fifth_rc').eq($(this).index()).addClass('show');
	});
	
	
	
});



















