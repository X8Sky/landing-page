/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const pageHeader = document.querySelector('.page__header');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

navbarMenu.classList.add('navbar', 'navbar-dark', 'bg-dark', 'justify-content-center', 'justify-content-sm-between', 'px-3', 'py-0');
// insert page brand
navbarMenu.insertAdjacentHTML('afterbegin', `<a class="navbar-brand" href="">Landing Page</a>`)

// Scroll to anchor ID using scrollTO event

// Build menu 

navbarList.classList.add('navbar-nav');
const links = Array.from(document.getElementsByTagName("section")).map(section => {
  return `<li class="nav-item"><a class="nav-link" href="#${section.id}">${section.dataset.nav}</a></li>`
})
navbarList.insertAdjacentHTML('afterbegin', links.join(' '));

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to section on link click

// css scroll-behavior: smooth; did the trick

// Set sections as active

window.addEventListener('activate.bs.scrollspy', function (e) {
  const activeLink = navbarList.querySelector('.nav-link.active');
  const activeSection = activeLink.getAttribute('href');
  //remove previous active section class
  document.querySelector('section.active')?.classList.remove('active')
  //add active class to new section
  document.querySelector(activeSection).classList.add('active')
});

