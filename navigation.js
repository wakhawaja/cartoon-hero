$(function(){
	$('#ptext').animate({
		left:"650px",
		opacity:.5,
		fontsize:'24px'
	},1500);
	$('#errors').click(function(){
		$(this).animate({
			left:"+=50px"
		},1000);
	});


	$('.answer').hide();
	$('.question').click(
		function(){
			$(this).next('.answer').slideToggle(2000);
		});

	$('html').dblclick(function(evt){
		alert('X: '+ evt.pageX+'Y: '+evt.pageY);
	});

	$("p").click(function(){
	$(this).hide();
	});
});
$(document).ready(function(){
	$("#fadeOutBtn").click(function(){
		$("#menuBox").fadeOut(3000,function(){
			console.log("Hidden")
		});
	});
	$("#fadeInBtn").click(function(){
		$("#menuBox").fadeIn(3000,function(){
			console.log("Show")
		});
	});
	$("#fadeToggleBtn").click(function(){
		$("#menuBox").fadeToggle(2000,function(){
			console.log("Show")
		});
	});
});
$(function(){
	$("H1").mouseover(function(){
		$("H1").css("background-color", "yellow");
		$("#menuBox").hide();
	});
	$("H1").mouseout(function(){
		$("H1").css("background-color", "green");
	});
});