const btnMobile = document.querySelector('#btn-mobile')
const navLinks = document.querySelectorAll('.menu-links li')

const buttonMenu = document.querySelector('.btn-menu .btn-primary')

console.log(buttonMenu)
const nav = document.querySelector('#nav')
const body = document.querySelector('body')

function toggleMenu() {
  nav.classList.toggle('active')
  body.classList.toggle('active')
  animatedLinks()
}

function animation(element, temp) {
  element.style.animation
    ? (element.style.animation = '')
    : (element.style.animation = `navLinkFade .5s ease forwards .${temp + 1}s`)
}

function animatedLinks() {
  navLinks.forEach((link, index) => {
    animation(link, index)
  })
  animation(buttonMenu, 5)
}

function closeMenu() {
  body.classList.remove('active')
  nav.classList.remove('active')
  animatedLinks()
}

btnMobile.addEventListener('click', toggleMenu)
