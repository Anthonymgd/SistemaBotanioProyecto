<?php

$servername = "localhost";
$database = "facturas";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
      die("Conexión Fallida: " . mysqli_connect_error());
}
 
echo "Conexión Exitosa";
echo "<br>";

$equipo = $_POST['txtEquipo'];
$precio = $_POST['txtPrecio'];
$almacenamiento = $_POST['txtAlmacenamiento'];
$procesador = $_POST['txtProcesador'];
$ram = $_POST['txtRAM'];
$nombres = $_POST['txtNombre'];
$apellidos = $_POST['txtApellido'];
$metodo = $_POST['metodo'];
$numTarjeta = $_POST['txtTarjeta'];
$nombrePropietario = $_POST['txtPropietario'];

 
$sql = "INSERT INTO factura VALUES('$equipo','$precio',
'$almacenamiento','$procesador','$ram','$nombres',
'$apellidos','$metodo','$numTarjeta','$nombrePropietario')";
if (mysqli_query($conn, $sql)) {
      echo "Nuevo Registros Agreagado";
      echo "<br>";
      echo "<a href='../catalogo.html'>Seguir Comprando</a>";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

    mysqli_close($conn);
?>