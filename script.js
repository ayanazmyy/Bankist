'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal__modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// -------------------------- cookie message --------------------------------------

const header = document.querySelector('.header')

const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookies for improved functionality and analytics
    <button class="btn btn--close-cookie">Got it!</button>`;

header.after(message);

const cookieCloseBtn = document.querySelector('.btn--close-cookie');

cookieCloseBtn.addEventListener('click', function () {
  message.remove();
});


//====================================================================================

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' })
})


// ==================== Operations section ===========================================

const tabs = document.querySelectorAll('.operation__tab');
const tabsContainer = document.querySelector('.operation-btns');
const tabsContent = document.querySelectorAll('.op__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operation__tab');

  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active');

  const content = document.querySelector(`.operation-content__${clicked.dataset.tab}`);
  tabsContent.forEach(el => el.style.display = 'none')
  content.style.display = 'block';
})

// ===================== change navbar opacity with scrolling =========================

const nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  const sec1_coordinates = section1.getBoundingClientRect();
  if (window.scrollY > sec1_coordinates.top) {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
  } else {
    nav.style.backgroundColor = '#f3f3f3'
  }
});

// ===================== lazy loading ======================================

const features = document.querySelectorAll('.features .col-md-6 img');

window.addEventListener('scroll', function () {
  features.forEach((img) => {
    let img_coordinates = img.getBoundingClientRect();
    if (window.scrollY > img_coordinates.top) {
      img.classList.remove('lazy-img');
      const src = img.dataset.src;
      img.setAttribute('src', src)
    }
  })
})

// ================== slider ==================================================

const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const slide = document.querySelectorAll('.slide');
let current = 0;

arrowRight.addEventListener('click', function () {
  current++;
  if(current > 2){
    current = 0
  }
  slide.forEach((s, i) => {
    if(current == i) {
      s.style.opacity = '1';
      s.style.zIndex = '99999'
    } else {
      s.style.zIndex = '0';
      s.style.opacity = '0'
    }
  })
  
});

arrowLeft.addEventListener('click', function () {
  current--;
  if(current < 0){
    current = 2
  }
  slide.forEach((s, i) => {
    if(current == i) {
      s.style.opacity = '1';
      s.style.zIndex = '99999'
    } else {
      s.style.zIndex = '0';
      s.style.opacity = '0'
    }
  }) 
});


// ========================= loading ==========================
const loadingScreen = document.querySelector('.center');

const loadingTimeOut = setTimeout(()=>{
  loadingScreen.style.display = 'none'
  document.body.style.overflowY= 'auto'
}, 1500)
