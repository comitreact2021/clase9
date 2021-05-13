const btnCargar = document.getElementById('btn-cargar');

btnCargar.addEventListener('click', cargarDatos);

function cargarDatos() {
  mostrarSelect(productos, 'productos-container', 'descripcion', 'productos');
  mostrarSelect(clientes, 'clientes-container', 'nombre', 'clientes');
}

function mostrarSelect(items, idContainer, labelKey, idSelect) {
  const divContenido = document.getElementById(idContainer);

  let htmlDelDiv = `<select id="${idSelect}"><option value="-1">Seleccione...</option>`;

  for (let item of items) {
    htmlDelDiv += `<option value="${item.id}">${item[labelKey]}</option>`;
  }

  htmlDelDiv += '</select>';

  divContenido.innerHTML = htmlDelDiv;

  document.getElementById(idSelect).addEventListener('change', function () {
    window.location = 'http://www.google.com.ar';
  });
}

function cargarDatosDesdeJsonPlaceHolder() {
  const url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url)
    .then(function (response) {
      console.log('Todo salio bien, llego la respuesta!!!');
      return response.json();
    })
    .then(function (dataJson) {
      mostrarSelect(dataJson, 'users-container', 'name', 'users');
    })
    .catch(function () {
      console.log('Algo salio mal!!!');
    })
    .finally(function () {
      console.log('La promesa termino');
    });
}

cargarDatosDesdeJsonPlaceHolder();

console.log('Algo fuera de la funcion cargarDatos...');
