/*슬라이드 모션*/
var idx = 0;

setInterval(() => {
  idx = (idx + 1) % 3; //1 -> 2 -> 0 -> 1 순환
  $("#slide ul").animate({left:(idx*-100)+"%"},600);
}, 3000);

/*팝업창 */
$(".popup_btn").click(()=>{
  $("#popup").toggle();
});

