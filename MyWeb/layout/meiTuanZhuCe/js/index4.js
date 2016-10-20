// JavaScript Document
$(function(){
	$('.shouji').on('click',function(){
		$('.cellphonesignup').show();
		$('.sss').hide();	
	});	
	$('.email').on('click',function(){
		$('.cellphonesignup').hide();
		$('.sss').show();	
	});	
	$('.shouji').on('mouseover',function(){
		$(this).addClass('on');
			
	});	
	$('.email').on('mouseover',function(){
		$(this).addClass('on');	
	});	
	
});



		