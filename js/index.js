const btnCargar = document.getElementById('btn-cargar');

btnCargar.addEventListener('click', cargarDatos);

function cargarDatos() {
  mostrarSelect(productos, 'productos-container');
  mostrarSelect(clientes, 'clientes-container');
}

function mostrarSelect(items, idContainer) {
  const divContenido = document.getElementById(idContainer);

  let htmlDelDiv = '<select>';

  for (let item of items) {
    htmlDelDiv += `<option value="${item.id}">${item.nombre}</option>`;
  }

  htmlDelDiv += '</select>';

  divContenido.innerHTML = htmlDelDiv;
}

function cargarDatosDesdeJsonPlaceHolder() {
  const promesa = fetch('https://jsonplaceholder.typicode.com/users');

  promesa.then(function () {
    console.log('Fin de la promesa');
  });

  console.log('ALGO');

  console.log('Algo mas');
}

cargarDatosDesdeJsonPlaceHolder();
