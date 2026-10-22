/*슬라이드 제어*/
var idx = 0;

setInterval(() => {
  idx = (idx + 1) % 3; //0->1->2->0 순환
  $("#slide ul").animate({left:(idx*-100)+"%"},600);
}, 3000);

/*탭 영역 제어*/
$(".tab_menu li").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  $(".tab_item").hide().eq($(this).index()).show();
});

/*팝업 제어*/
$(".popup_btn").click(()=>{
  $("#popup").toggle();
});