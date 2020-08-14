/**
 * NAME    : 서브메뉴 slideDown-slideUp JQuery
 * AUTHOR  : 조재청
 * CONTACT : nick2615@naver.com
 */

$(function(){
	//처음로딩시 drop-menu는 보이지 않게 설정
	$("#drop-menu").hide();
	var check=true; 
	//gnb클릭시 토글처리...
	$("#gnb").click(function(){
		if(check){
   			$("#drop-menu").slideDown(500);
			check=false;
			$(this).css("background-color","#000");
			$(".bar").css("border-color", "#fff");
			
		}else{
			$("#drop-menu").slideUp(500);
			check=true;
			$(this).css("background-color","#fff");
			$(".bar").css("border-color", "#000");
		}
  	});
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
