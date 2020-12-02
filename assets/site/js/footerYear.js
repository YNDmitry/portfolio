document.addEventListener('DOMContentLoaded', () => {
  const ytSpan = document.querySelector('.year-txt')
  const currentYr = new Date().getFullYear()
  ytSpan.textContent = currentYr
})