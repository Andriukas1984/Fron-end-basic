$(document).ready(function(){
			
	$("#trigger").mouseenter(function(){
		$(".user-popup").stop().slideDown( 200 );
	});
	$("#trigger").mouseleave(function(){
		$(".user-popup").stop().slideUp( 200 );
	});	
	
	
	$("ul.lvl_1 li.lvl_1").click(function () {		
		$(this).children("ul.lvl_2").slideToggle('normal');
	});
	
	$("ul.lvl_2").mouseleave(function () {
		$(this).slideUp('normal');
	});
	
});