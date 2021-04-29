console.log(`Hello Darice!`)

let test = document.getElementById('notify');
let hide = document.getElementsByClassName('alert')[0];

test.addEventListener('click', () => {
  console.log('ey');
  hide.classList.toggle('hidden');
  setTimeout(hideClass, 4000)
})

function hideClass() {
    hide.classList.toggle('hidden');
}