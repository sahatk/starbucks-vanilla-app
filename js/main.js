const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener("click", () => {
  searchInputEl.focus(); //focus() : 포커스 해주게끔하는 메서드
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused'); //classList.add() : 클래스 추가
  searchInputEl.setAttribute('placeholder','통합검색'); //setAttribute() : 속성 추가
});

searchInputEl.addEventListener('blur', () => { //blur : 포커스가 해제되었을 때
  searchEl.classList.remove('focused'); //classList.remove() : 클래스 제거
  searchInputEl.setAttribute('placeholder',''); //setAttribute() : 속성 공백
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener("scroll", _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간추가)