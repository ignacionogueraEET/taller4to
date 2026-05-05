"use strict";

function calcularPromedio() {
  // Paso 1 y 2: leer y convertir
  const n1 = Number(document.getElementById('n1').value);
  const n2 = Number(document.getElementById('n2').value);
  const n3 = Number(document.getElementById('n3').value);

  // Paso 3: lógica del algoritmo
  const prom = (n1 + n2 + n3) / 3;

  // Paso 4: mostrar resultado
  document.getElementById('resultado').textContent =
    'El promedio es: ' + prom.toFixed(2);
}
