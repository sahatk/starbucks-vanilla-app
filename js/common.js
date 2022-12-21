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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022