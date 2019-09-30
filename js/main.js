const accordion = document.querySelector('.accordion-container')

accordion.addEventListener('click', e => {
  const header = e.target.closest('.accordion__header')
  if (!header) return
  header.parentNode.classList.toggle('is-open')
})
