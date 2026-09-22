
const main_slide = new Swiper('#main_slide', {
  spaceBetween: 10,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 5000
  }
});

const press_slide = new Swiper('#press .inner', {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});


// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

  const header = document.querySelector('header');

  ScrollTrigger.create({
    // 기준이 될 스크롤 위치 (예: 페이지 상단에서 50px 내려갔을 때)
    start: 'top -150',
    end: 99999, // 페이지 끝까지 상태 유지
    toggleClass: {
      className: 'active',
      targets: header
    }
  });

  gsap.from("#works li",{
    y:80,
    opacity:0,
    duration:0.6,
    stagger:0.1,  //요소별 시차(순차적으로 등장)
    ease: "back.out(3)",
    scrollTrigger:{
      trigger:"#works",
      start:"top 70%",
      //markers:true,
      toggleActions:"play none none reset"
    }
  });
});
