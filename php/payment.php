<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Método de Pago | Tienda Electrónica</title>
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/payment.css">
</head>

<body>
  <nav>
    <a href="../index.html">
      <div>Home Page</div>
    </a>
    <a href="../catalogo.html">
      <div>Catálogo</div>
    </a>
    <a href="factura.php">
      <div>Facturación</div>
    </a>
    <a href="#">
      <div>Método de Pago</div>
    </a>
    <a href="../about.html">
      <div>About us</div>
    </a>
  </nav>
  <div style="background-color:'#eee';" class="cont">
    <div class="list">
      <img src="../images/tarjeta.png">
      <h3>Factura</h3>
      <ul>
        <?php
          $equipo = $_POST['txtEquipo'];
          $precio = $_POST['txtPrecio'];
          $almacenamiento = $_POST['txtAlmacenamiento'];
          $procesador = $_POST['txtProcesador'];
          $ram = $_POST['txtRAM'];
          $nombres = $_POST['txtNombre'];
          $apellidos = $_POST['txtApellido'];
          
          echo "<li>Equipo: {$equipo}</li>";
          echo "<li>Precio: {$precio}</li>";
          echo "<li>Almacenamiento: {$almacenamiento}</li>";
          echo "<li>Procesador: {$procesador}</li>";
          echo "<li>RAM: {$ram}</li>";
          echo "<li>Nombres: {$nombres}</li>";
          echo "<li>Apellidos: {$apellidos}</li>";
      ?>
      </ul>
    </div>
    <form action="conexion.php" method="post" class="form">
      <table>
        <?php
          $equipo = $_POST['txtEquipo'];
          $precio = $_POST['txtPrecio'];
          $almacenamiento = $_POST['txtAlmacenamiento'];
          $procesador = $_POST['txtProcesador'];
          $ram = $_POST['txtRAM'];
          $nombres = $_POST['txtNombre'];
          $apellidos = $_POST['txtApellido'];
          
          echo "<input type='hidden' name='txtEquipo' value='{$equipo}'>";
          echo "<input type='hidden' name='txtPrecio' value='{$precio}'>";
          echo "<input type='hidden' name='txtAlmacenamiento' value='{$almacenamiento}'>";
          echo "<input type='hidden' name='txtProcesador' value='{$procesador}'>";
          echo "<input type='hidden' name='txtRAM' value='{$ram}'>";
          echo "<input type='hidden' name='txtNombre' value='{$nombres}'>";
          echo "<input type='hidden' name='txtApellido' value='{$apellidos}'>";
      ?>
        <tr>
          <td colspan="4">
            <div class="metodo">
              <input checked type="radio" name="metodo" value="Tarjeta de Crédito">Tarjeta de Crédito
              <input type="radio" name="metodo" value="PayPal">Tarjeta de Débito
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <p type="Número de la Tarjeta:">
              <input name="txtTarjeta" required type="number" placeholder="XXXX-XXXX-XXXX-XXXX"></input>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p type="Nombre del propietario:">
              <input name='txtPropietario' required type="text" placeholder="Juanito Perez"></input>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p type="Fecha de Expiración:">
              <input class="edad" type="text" placeholder="MM/AA"></input>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p type="Número de Seguridad:">
              <input min="1" max="999" required type="number" placeholder="CVC"></input>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button>Realizar Pago</button>
          </td>
        </tr>
    </form>
  </div>

</body>

</html>