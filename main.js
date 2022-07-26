'use strict';

//Make navabr transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
    ScrollIntoView(link);
  }
});

// Handle click on "contact me " button on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  ScrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up " button when scrolling down
const arrowBtn = document.querySelector('.arrow--up');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add('visible');
  } else {
    arrowBtn.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button  
arrowBtn.addEventListener('click', ()=> {
  ScrollIntoView('#home');
})

function ScrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
