window.addEventListener('scroll', onScroll)

const btnToTop = document.querySelector('#btn-back-to-top')
const navShow = document.querySelector('.container-menu')

onScroll()
function onScroll() {
  showNav()
  showBtnToTop()

  activateMenuSection(home)
  activateMenuSection(benefits)
  activateMenuSection(about)
  activateMenuSection(testimonials)
}

function showNav() {
  if (scrollY > 0) {
    navShow.classList.add('nav-menu')
  } else {
    navShow.classList.remove('nav-menu')
  }
}

function showBtnToTop() {
  if (scrollY > 550) {
    btnToTop.classList.add('show-btn')
  } else {
    btnToTop.classList.remove('show-btn')
  }
}

function activateMenuSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  console.log(sectionHeight)

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `#menu .menu-links li a[href*=${sectionId}]`
  )

  menuElement.classList.remove('active-link')
  if (sectionBoundaries) {
    menuElement.classList.add('active-link')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '90px',
  duration: 700,
  delay: 200
}).reveal(`
#home,
#home .img-content,
#benefits .container,
#benefits .container .card,
#about .container,
#about .container .video-about,
#testimonials .container,
#testimonials .container .card-testimony`)
