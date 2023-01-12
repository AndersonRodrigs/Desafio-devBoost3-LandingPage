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

  // o topo da seção chegou ou ultrapassou da linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
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
