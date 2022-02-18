let number = Math.random()
let glass1 = document.getElementsByClassName('glass1')[0]
let counter = 0
glass1.onclick = function () {
  document.getElementById('score').innerHTML = counter
  let number = Math.random()
  console.log(number)
  if (number <= 0.5) {
    glass1.style.background = "url('broken-glass.jpg')"
  }
  if (number > 0.5) {
    glass1.classList.add('active')
    counter = counter + 1
  }
  if (counter == 3) {
    document.getElementById('heading').innerText = 'Congratulations!'
    window.open('level3.html')
  } else {
    document.getElementById('heading').innerText = 'Aaah you are dead'
  }
}
let glass2 = document.getElementsByClassName('glass2')[0]
glass2.onclick = function () {
  document.getElementById('score').innerHTML = counter
  let number = Math.random()
  console.log(number)
  if (number <= 0.5) {
    glass2.style.background = "url('broken-glass.jpg')"
  }
  if (number > 0.5) {
    glass2.classList.add('active')
    counter = counter + 1
  }
}

let glass3 = document.getElementsByClassName('glass3')[0]
glass3.onclick = function () {
  document.getElementById('score').innerHTML = counter
  let number = Math.random()
  console.log(number)
  if (number <= 0.5) {
    glass3.style.background = "url('broken-glass.jpg')"
  }
  if (number > 0.5) {
    glass3.classList.add('active')
    counter = counter + 1
  }
}
