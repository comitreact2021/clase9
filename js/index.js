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
    .then((response) => response.json())
    .then((dataJson) => {
      mostrarSelect(dataJson, 'users-container', 'name', 'users');
    })
    .catch(() => {
      console.log('Algo salio mal!!!');
    })
    .finally(() => {
      console.log('La promesa termino');
    });
}

const cargarDatosDesdeJsonPlaceHolderAsync = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const response = await fetch(url);
  const dataJson = await response.json();

  mostrarSelect(dataJson, 'users-container', 'name', 'users');
};

//cargarDatosDesdeJsonPlaceHolder();

const promesa = cargarDatosDesdeJsonPlaceHolderAsync();

promesa.then(() => {
  console.log('Termino de cargar los datos');
});

console.log('Algo fuera de la funcion cargarDatos...');

/*function sumar(a, b) {
  return a + b;
}

const sumar = function (a, b) {
  return a + b;
};*/

const sumar = (a, b) => {
  return a + b;
};

const saludar = (saludo) => saludo + '!';

console.log(saludar('Hola'));
