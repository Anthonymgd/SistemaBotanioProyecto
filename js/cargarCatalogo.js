window.onload = cargarCatalogo;

function cargarCatalogo() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cargarXML(this);
    }
  };
  xhr.open("GET", "data/productos.xml", false);
  xhr.send();
}

function cargarXML(xml) {
  var docXML = xml.responseXML;
  var est = docXML.getElementsByTagName("products");
  let form = '';
  for (let i = 0; i < est.length; i++) {
    form += '<form action="php/factura.php" method="post">';
    form += '<label for="equipo">Equipo: </label>';
    form += '<input readonly="readonly" type="text" name="txtEquipo" value="' +
      est[i].getElementsByTagName("productName")[0].textContent +
      '"></input>';
    form += '<label for="precio">Precio: </label>';
    form += '<input readonly="readonly" type="text" name="txtPrecio" value="' +
      est[i].getElementsByTagName("precio")[0].textContent +
      '"></input>';
    form += '<label for="almacenamiento">Almacenamiento: </label>';
    form +=
      '<input readonly="readonly" type="text" name="txtAlmacenamiento" value="' +
      est[i].getElementsByTagName("almacenamiento")[0].textContent +
      '"></input>';
    form += '<label for="procesador">Procesador: </label>';
    form +=
      '<input readonly="readonly" type="text" name="txtProcesador" value="' +
      est[i].getElementsByTagName("procesador")[0].textContent +
      '"></input>';
    form += '<label for="RAM">RAM: </label>';
    form +=
      '<input readonly="readonly" type="text" name="txtRAM" value="' +
      est[i].getElementsByTagName("RAM")[0].textContent +
      '"></input>'; 
    form += '<input type="submit" value="Comprar">';
    form += "</form>";
  }
  document.getElementById("items").innerHTML = form;
}
  