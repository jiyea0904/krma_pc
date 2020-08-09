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
window.onload = function(){
//하나의 li의 width값을 구해 놓는다.
var item_width = $('.slider2 li').outerWidth(true);
//맨 마지막 item을 맨 앞으로 이동시켜 놓는다.
$('.slider2 li:first').before($('.slider2 li:last'));
//늘어난 만큰 -로 위치를 설정해 준다.
$('.slider2').css('left',-item_width +'px');


//이전버튼 클릭시 
$('.prevBtn').click(function(){
    var left_indent = parseInt($('.slider2').css('left')) + item_width;
    $('.slider2').animate({'left':left_indent+'px'},400, function(){
        $('.slider2 li:first').before($('.slider2 li:last'));
        $('.slider2').css('left',-item_width+'px');
    });
});

//Next Button
$('.nextBtn').click(function(){
    var left_indent = parseInt($('.slider2').css('left')) - item_width; //
    $('.slider2').animate({'left':left_indent+'px'},400,function(){
        $('.slider2 li:last').after($('.slider2 li:first'));
        $('.slider2').css('left',-item_width+'px');
    });
});
} 

$(function(){
  $('.flexslider1').flexslider({
	animation: "slide",
	directionNav: true,
	controlNav: false,
	pausePlay:false,
	slideshow:false,
	direction:"hrozinal"
  });
});

$(function(){
  $('.flexslider2').flexslider({
	animation: "slide",
	directionNav: true,
	controlNav: false,
	pausePlay:false,
	direction:"hrozinal"
  });
});


$(function(){
  $('.flexslider3').flexslider({
	animation: "slide",
	directionNav: true,
	controlNav: false,
	pausePlay:true,
	direction:"hrozinal"
  });
});

// tab
function ocrt(num){	
	var f = $('.category_title_tab').find('li');
	console.log(num);
	for ( var i = 0; i < f.length; i++ ) {			
		if ( i == num) {			
			f.eq(i).addClass('on');	
			
			$('.tab_menu' + i ).show();
		} else {
			f.eq(i).removeClass('on');					
			$('.tab_menu' + i ).hide();
		}
	}
}


function fn_prev_tab(){

var current_tab_id = $("#current_tab").val()*1;
if(current_tab_id <= 0){
 ocrt(6);
 $("#current_tab").val(6);
}else{
ocrt(current_tab_id-1);

$("#current_tab").val(current_tab_id-1);
}

}


function fn_next_tab(){
var current_tab_id = $("#current_tab").val()*1;
if(current_tab_id >= 6){
 ocrt(0);
 $("#current_tab").val(0);
}else{
ocrt(current_tab_id+1);

$("#current_tab").val(current_tab_id+1);
}

}
// 공지사항 닫기
function closenotice(){
	$('#notice').css('display', 'none');
}


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



//20171020 박지예 추가
//tab_normal_blue
jQuery(function($){
	var tab = $('.tab_normal_blue');
	tab.removeClass('js_off');
	tab.css('height', tab.find('>ul>li>div:visible').height());
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.tab_normal_blue:first').attr('class', 'tab_normal_blue '+myClass);
		tab.css('height', t.next('div').height());
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});

//tab_normal_orange
jQuery(function($){
	var tab = $('.tab_normal_orange');
	tab.removeClass('js_off');
	tab.css('height', tab.find('>ul>li>div:visible').height());
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.tab_normal_orange:first').attr('class', 'tab_normal_orange '+myClass);
		tab.css('height', t.next('div').height());
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});

//tab_list
jQuery(function($){
	var tab = $('.tab_list');
	tab.removeClass('js_off');
	tab.css('height', tab.find('>ul>li>div:visible').height());
	function onSelectTab(){
		var t = $(this);
		var myClass = t.parent('li').attr('class');
		t.parents('.tab_list:first').attr('class', 'tab_list '+myClass);
		tab.css('height', t.next('div').height());
	}
	tab.find('>ul>li>a').click(onSelectTab).focus(onSelectTab);
});

//tabArea
$(document).ready(function(){
	$(".tabArea > ul > li > a").click(function(){
		var dl = $(this).next(".alarm_tab_contents");
		if( dl.is(":visible") ){
			$(this).removeClass("on");
			dl.slideToggle();
		}else{
			$(".tabArea > ul > li > a").removeClass("on");
			$(".alarm_tab_contents").hide();
			$(this).addClass("on");
			dl.slideToggle();
		}
	});
});


// 20171023 박지예 추가
// 제휴업체전체보기 닫기
function opendetail(){
	$('.category_contents_detail').css('display', 'block');
}
function closedetail(){
	$('.category_contents_detail').css('display', 'none');
}

function openchangepw3layerpopup(){
	$('#change_pw_3month').css('display', 'block');
}
function closechangepw3layerpopup(){
	$('#change_pw_3month').css('display', 'none');
}

