var turno = 1;

var pikachu = {
  vida: 100,
  ataque: 55,
  win: function () {
  alert('Ha ganado Pikachu');
  }
}

var jigly = {
  vida: 100,
  ataque: 45,
  win: function() {
    alert('Ha ganado Jigly');
  }
}

while (pikachu.vida > 0 && jigly.vida > 0) {
  if (turno == 1) {
    jigly.vida = jigly.vida - pikachu.ataque;
    turno = 2;
    console.log('Ahora Jigly tiene ' + jigly.vida + ' puntos de vida');
  } else {
    pikachu.vida = pikachu.vida - jigly.ataque;
    turno = 1;
    console.log('Ahora Pikachu tiene '+ pikachu.vida + ' puntos de vida');
  }
}

if (pikachu.vida <= 0) {
  jigly.win();
} else {
  pikachu.win();
}
