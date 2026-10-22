
var idx = 0;

setInterval(() => {
  idx = (idx + 1) % 3;
  $("#slide li").eq(idx).fadeIn().siblings().fadeOut();
}, 3000);