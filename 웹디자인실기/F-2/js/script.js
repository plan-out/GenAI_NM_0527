
var n = 1;

setInterval(()=>{
  $(".view"+n).fadeOut();
  n = n % 3 + 1;
  $(".view"+n).fadeIn();
},3000);


$(".open_modal").click(()=>{
  $("#modal").show();
});

$(".close_modal").click(()=>{
  $("#modal").hide();  
});