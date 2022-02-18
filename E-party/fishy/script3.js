let player = {
  health: 100,
  power: Math.round(Math.random * 20),
}

let opponent = {
  health: 100,
  power: Math.round(Math.random * 20),
}

function attack() {
  var enemy = Math.round(Math.random() * 10)
  var you = Math.round(Math.random() * 10)

  if (enemy > you) {
    player.health = player.health - enemy
    document.getElementById('commentary').innerText =
      '666 punches you for ' + enemy + ' Damage!'
    printToScreen()
  } else if (you > enemy) {
    opponent.health = opponent.health - you
    document.getElementById('commentary').innerText =
      'You punched 666 for ' + you + ' Damage!'
    printToScreen()
  } else {
    opponent.health = opponent.health - 5
    player.health = player.health - 5
    document.getElementById('commentary').innerText =
      'You both punched at the same time dealing 5 damage each'
  }
  if (opponent.health - you <= 0) {
    document.getElementById('commentary').innerText =
      'Wow You finished FISH Game!'
    document.getElementById('commentary').classList.add('active')
    document.getElementById('opponent-health').innerText = ': ' + 0
    opponent.health = 0
    document.getElementById('attack-button').innerText = 'Reset'
  } else if (player.health - enemy <= 0) {
    document.getElementById('commentary').innerText = '666 WON. You are dead!'
    document.getElementById('player-health').innerText = ': ' + 0
    player.health = 0
    document.getElementById('attack-button').innerText = 'Reset'
  }
  if (player.health <= 0 || opponent.health <= 0) {
    document.getElementById('attack-button').onclick = function () {
      location.href = location.href
    }
  }
}

const printToScreen = () => {
  document.getElementById('opponent-health').innerText = ': ' + opponent.health
  document.getElementById('player-health').innerText = ': ' + player.health
}

printToScreen()
