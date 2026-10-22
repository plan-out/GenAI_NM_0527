
var n = 1;

setInterval(() => {
  $("#slide ul").animate({top:-900*n},400);
  n++; //n을 1증가
  n = n%3;  //n의 값을 3으로 나눈 나머지값(0,1,2)
}, 3000);


/*
$(".open_popup").click(()=>{
  $("#popup").show();
});

$(".close_popup").click(()=>{
  $("#popup").hide();
});
*/

$(".popup_btn").click(()=>{
  $("#popup").toggle();
});