
var i = 0;

setInterval(() => {
  i = (i+1)%3;
  $("#slide ul").animate({left:i*-100+"%"},600);
}, 3000);


$(".popup_btn").click(()=>{
  $("#popup").toggle();
});
