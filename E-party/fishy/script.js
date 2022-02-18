let score = 0
let timer = 10
let choices = ['house', 'forest', 'bank']

let countdown = setInterval(() => {
  timer--
  document.getElementById('timer').innerHTML = timer
  if (timer <= 0) {
    timer = 10
  }
  document.getElementById('house').onclick = function () {
    document.getElementById('house').style.background = '#2d9e2d'
    score = score + 1
    document.getElementById('score').innerHTML = score
    if (choices[Math.floor(Math.random() * choices.length)] == 'house') {
      score = score - 2
      document.getElementById('score').innerHTML = score
      document.getElementById('house').style.background = '#eb4034'
    }
  }
  document.getElementById('forest').onclick = function () {
    document.getElementById('forest').style.background = '#2d9e2d'
    score = score + 1
    document.getElementById('score').innerHTML = score
    if (choices[Math.floor(Math.random() * choices.length)] == 'forest') {
      score = score - 2
      document.getElementById('score').innerHTML = score
      document.getElementById('forest').style.background = '#eb4034'
    }
  }
  document.getElementById('bank').onclick = function () {
    document.getElementById('bank').style.background = '#2d9e2d'
    score = score + 1
    document.getElementById('score').innerHTML = score
    if (choices[Math.floor(Math.random() * choices.length)] == 'bank') {
      score = score - 2
      document.getElementById('score').innerHTML = score
      document.getElementById('bank').style.background = '#eb4034'
    }
  }
  if (score >= 10) {
    document.getElementById('link').style.display = 'block'
  }
}, 600)
