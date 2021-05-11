function mostrarSelectProductos() {
  const divContenido = document.getElementById('contenido');

  let htmlDelDiv = '<select>';

  for (let producto of productos) {
    htmlDelDiv += `<option value="${producto.id}">${producto.nombre}</option>`;
  }

  htmlDelDiv += '</select>';

  divContenido.innerHTML = htmlDelDiv;
}

function mostrarSelectClientes() {
  const divContenido = document.getElementById('contenido');

  let htmlDelDiv = '<select>';

  for (let cliente of clientes) {
    htmlDelDiv += `<option value="${cliente.id}">${cliente.nombre}</option>`;
  }

  htmlDelDiv += '</select>';

  divContenido.innerHTML = htmlDelDiv;
}

mostrarSelectClientes();
