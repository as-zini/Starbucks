const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener("click", function (){
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

// 배지 애니메이션 적용
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function (){
  if(window.scrollY > 500){
    // 자바스크립트 애니메이션 적용 라이브러리 사용법
    // gsap.to(적용할요소, 지속시간(초단위), 옵션);
    gsap.to( badgeEl, .6, {
      opacity: 0, 
      display: 'none' 
      // 자바스크립트의 객체 데이터에서는 문자는 무조건 ''로 처리되어야함
    });
    gsap.to(toTopEl,.2, {  //페이지 상단 이동 버튼을 숨기는 애니메이션 적용
      x: 0
    })
  } else {
    console.log("scroll");
    gsap.to( badgeEl, .6, {
      opacity: 1, 
      display: 'block'
    })
    gsap.to(toTopEl,.2, {
      x: 100

    });
  }
},300))


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0  //화면의 위치를 0인지점으로 옮겨주는 옵션
  })
})


// visual fade-in 애니메이션 구현
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
}); 

// swiper 사용법 new Swiper(지정해줄 선택자, {옵션})
new Swiper('.notice-line .swiper', {
   direction: 'vertical',
   autoplay: true,
   loop: true //반복재생여부
 });

new Swiper('.promotion .swiper',{
  slidesPerView: 3, //한번에 보이는 슬라이드 갯수
  spaceBetween: 10, //슬라이드들 사이 여백
  centeredSlides: true, //첫번째 슬라이드가 가운데에 보이게
  loop:true,
  autoplay: {
    delay: 5000 //밀리세컨드 단위
  },
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자를 찾아 페이지 번호 기능 적용
    clickable: true //사용자가 페이지 번호 요소를 직접 클릭해서 제어할수있는지 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //슬라이드 넘김 요소를 찾아 그 요소에 슬라이드 넘김 기능 적용
    nextEl: '.promotion .swiper-next'
  }
 })

 new Swiper('.awards .swiper',{
  autoplay:true,
  loop:true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})

 const promotionEl = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion');
 let isHidePromotion = false;
 
 promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
      promotionEl.classList.add('hide');
    } else{
      promotionEl.classList.remove('hide');
    }
 })

 function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

 //둥둥 떠다니는 애니메이션 구현
 function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
      y: size,//y축으로 얼마만큼 움직이면서 애니메이션 처리를 할것인가
      repeat: -1, //무한반복
      yoyo: true, //내려오면 다시 위로 올라가는 애니메이션을 만들어주는 속성
      ease: Power1.easeInOut,
      delay:random(0,delay)
    })
 }

 floatingObject('.floating1', 1, 15);
 floatingObject('.floating2', .5, 15);
 floatingObject('.floating3', 1.5, 20); //gsap 함수는 선택자를 넣으면 알아서 html에서 찾아주기 때문에 굳이 querySelector로 안찾아도됨

// SCROLLMAGIC 스크롤 위치를 계산하여 애니메이션을 적용하는 파트
 const spyEls = document.querySelectorAll('section.scroll-spy')
 spyEls.forEach(function (spyEl){
  // ScrollMagic.Scene이라는 메소드는 ScrollMagic 라이브러리를 통해 특정한 요소를 감시하는 옵션을 지정해주는 메소드
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소들을 지정
      triggerHook: .8  //내가 감시하고 있는 요소가 뷰포트의 어느 지점에서 감시되었음을 판단할것인가를 정해주는 속성(뷰포트 상단이 0 가장 하단이 1)
    }) //Scene메소드에서 요소가 화면에 보여짐이 감지되면 밑의 메소드 실행
    .setClassToggle(spyEl, 'show') //보여짐이 감지되면 클래스를 넣을 요소와 추가할 클래스를 적어줌
    .addTo(new ScrollMagic.Controller())  //메소드 체이닝
 })

//  footer의 올해년도 표기
 const thisYear = document.querySelector('.this-year')
 thisYear.textContent = new Date().getFullYear 

