let contenedorTabla = document.getElementById('biblioteca-section')

document.addEventListener("DOMContentLoaded", function () {
    let tabla = document.getElementById('tabla');
  
    tabla.innerHTML =  `
      <tr>
        <th>Biologia</th>
        <th>Calculo</th>
        <th>Fisica</th>
        <th>Gases</th>
        <th>Quimica</th>
      </tr>
      <tr>
        <th>Mecanica</th>
        <th>Ecologia</th>
        <th>Programacion</th>
        <th>Algebra Lineal</th>
        <th>Mercadotecnia</th>
      </tr>
    `;
  });
  