const burgerBtn = document.querySelector('.burger-button')
const burgerCloseBtn = document.querySelector('.burger-close-button')

burgerBtn.addEventListener('click', () => {
  document.body.classList.add('is-menu-open')
})

burgerCloseBtn.addEventListener('click', () => {
  document.body.classList.remove('is-menu-open')
})