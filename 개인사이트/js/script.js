const video = document.getElementById('back');
const main_inner = document.getElementById('main_inner');
// 영상 재생이 끝났을 때 이벤트 발생
video.addEventListener('ended', () => {
  main_inner.classList.add('active');
});



const gnb_swiper = new Swiper('#gnb', {
  wrapperClass:"menu", //슬라이드를 감싸는 영역의 클래스
  slideClass:"btn", //각 슬라이드영역의 클래스
  slidesPerView:"auto", //버튼의 갯수만큼 설정
});

const wrap_swiper = new Swiper('#wrap', {
  wrapperClass:"container", //슬라이드를 감싸는 영역의 클래스
  slideClass:"section", //각 슬라이드영역의 클래스
  direction: "vertical",
  speed: 600,
  thumbs:{
    swiper:gnb_swiper,
    slideThumbActiveClass:"active",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev"
  },
  pagination: {
    el: ".pager",
    clickable: true,
    bulletActiveClass:'active',
  },
  mousewheel: true
});


const works_swiper = new Swiper('#works_inner', {
  wrapperClass:"list", //슬라이드를 감싸는 영역의 클래스
  slideClass:"item", //각 슬라이드영역의 클래스
  slidesPerView: "auto",
  spaceBetween: 120,
  speed: 600,
  nested:true, //내부 swiper에게 설정
  mousewheel: true
});


const works_swiper2 = new Swiper('#works_inner2', {
  wrapperClass:"list_box", //슬라이드를 감싸는 영역의 클래스
  slideClass:"list", //각 슬라이드영역의 클래스
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 120,
  speed: 600,
  nested:true, //내부 swiper에게 설정
  mousewheel: true
});

