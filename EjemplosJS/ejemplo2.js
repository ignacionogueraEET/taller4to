'use strict';

function verificarParidad() {
  const n = Number(document.getElementById('numero').value);

  // El operador % equivale a MOD en PSeInt
  if (n % 2 === 0) {
    document.getElementById('resultado').textContent = n + ' es PAR';
    console.log(n + ' es PAR');
  } else {
    document.getElementById('resultado').textContent = n + ' es IMPAR';
    console;
  }
}
