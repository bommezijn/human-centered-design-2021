console.log(`Hello Humanity`)

const notify = document.querySelector('#title-block span')
const titleBlock = document.querySelector('#title-block')

notify.addEventListener('click', () => {
  notify.textContent = 'Waiting for transcript'
  console.log(notify.textContent)
})