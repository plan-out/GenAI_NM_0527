
var idx = 0;

setInterval(() => {
  idx = (idx+1) % 3;
  $("#slide ul").animate({top:idx*-350},600);
}, 3000);


$(".popup_btn").click(()=>{
  $("#popup").toggle();
});
