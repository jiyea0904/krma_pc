//table select Box
$(document).ready(function(){
	$('.inputbox').find('select').each(function() {
		var self = $(this),
			parentBox = self.parents('.inputbox'),
			change = function() {
				$(this).prev('.txt').text($(this).val());
			},
			focusin = function() {
				$(this).parents('.inputbox').addClass('selected');
			},
			focusout = function() {
				$(this).parents('.inputbox').removeClass('selected');
			};

		self.css({
			'width' : parentBox.width() + 2 + 'px',
			'height' : parentBox.height() + 'px'
		}).on({
			'change' : change,
			'focusin' : focusin,
			'focusout' : focusout
		});
	}).end().find('.txt').each(function(){
		var self = $(this);
		self.text(self.next('select').val());
	});
});



//leftmenu
$(function(){
	$(".menudepth_2").hide();
	$(".menudepth_1 li").hover(function(){
		$(this).addClass('on');
		$(".menudepth_2:not(:animated)",this).slideDown(150);


	},
	function(){
		$(".menudepth_2", this).slideUp(100); 
		$(this).removeClass('on');
	})
});


//메뉴
$(document).ready(function () {
	$('#header .btnArea .more').click(function () {
		$('#menudown').toggle();
	});
});

//개인정보
$(function(){
	$("#detail").hide();
	$(".personinfo .simple .off").click(function(){
		$(this).hide();
		$('.personinfo .simple .on').show();
		$("#detail").show();
	});	
	
	$(".personinfo .simple .on").click(function(){
		$(this).hide();
		$('.personinfo .simple .off').show();
		$("#detail").hide();
	});
});


//Q&A
$(document).ready(function(){
	$("dl.question").click(function(){
		$(".answer").slideUp();
		$("dl.question").removeClass("on");
		$(this).next(".answer").slideToggle();
		$(this).addClass("on");
	});
});

//vote
$(document).ready(function(){
	$(".voteArea > ul > li").click(function(){
		$(".vote_detail").slideUp();
		$(".voteArea > ul > li").removeClass("on");
		$(this).children(".vote_detail").slideToggle();
		$(this).addClass("on");
	});
});


