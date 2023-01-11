window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNav()
  showBtnToTop()
  console.log('scrool')
}

function showNav() {
  const navShow = document.querySelector(' .container-menu')
  if (scrollY > 0) {
    navShow.classList.add('nav-menu')
  } else {
    navShow.classList.remove('nav-menu')
  }
}

function showBtnToTop() {
  console.log("asasa")
  const btnToTop = document.querySelector('#btn-back-to-top')
  if (scrollY > 450) {
    btnToTop.classList.add('show-btn')
  } else {
    btnToTop.classList.remove('show-btn')
  }
}
