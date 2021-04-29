console.log(`Hello Darice!`)

let test = document.getElementById('notify');
let text = document.getElementById('showText');
let hide = document.getElementsByClassName('alert')[0];
let otherMsg = document.getElementsByClassName('alert')[1];

test.addEventListener('click', () => {
  hide.classList.toggle('hidden');
  setTimeout(hideClass, 4000)
})

text.addEventListener('click', () => {
  console.log(otherMsg)
  otherMsg.classList.toggle('hidden');
  console.log('test')
  setTimeout(dirtyClass, 4000);
})


function hideClass() {
    hide.classList.toggle('hidden');
}

function dirtyClass() {
  otherMsg.classList.toggle('hidden');
}