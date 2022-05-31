<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factura</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/catalogo.css">
</head>
<body>
    <nav>
        <a href="../index.html"><div>Home Page</div></a>
        <a href="../catalogo.html"><div>Catálogo</div></a>
        <a href="#"><div>Facturación</div></a>
        <a href="payment.php"><div>Método de Pago</div></a>
        <a href="../about.html"><div>About us</div></a>
    </nav>
    <main>
        <?php
        $equipo = $_POST['txtEquipo'];
        $precio = $_POST['txtPrecio'];
        $almacenamiento = $_POST['txtAlmacenamiento'];
        $procesador = $_POST['txtProcesador'];
        $ram = $_POST['txtRAM'];
        
        echo '<form class="formFactura" style="width: 400px; margin: 0 auto;" action="payment.php" method="post">';
        echo '<fieldset>';
        echo '<legend>Datos del Producto</legend>';
        echo '<label for="equipo">Equipo: </label>';
        echo "<input readonly='readonly' type='text' name='txtEquipo' value={$equipo}>";
        echo '<label for="precio">Precio: </label>';
        echo "<input readonly='readonly' type='text' name='txtPrecio' value={$precio}>";
        echo '<label for="almacenamiento">Almacenamiento: </label>';
        echo "<input readonly='readonly' type='text' name='txtAlmacenamiento' value={$almacenamiento}>";
        echo '<label for="procesador">Procesador: </label>';
        echo "<input readonly='readonly' type='text' name='txtProcesador' value={$procesador}>";
        echo '<label for="ram">RAM: </label>';
        echo "<input eadonly='readonly' type='text' name='txtRAM' value={$ram}>";
        echo '</fieldset>';
        echo '<fieldset>';
        echo '<legend>Datos del Cliente</legend>';
        echo '<div class="person">';
        echo '<img src="../images/person-icon.png" alt="person-icon">';
        echo '</div>';
        echo '<label for="nombres">Nombres: </label>';
        echo '<input required type="text" name="txtNombre" value="">';
        echo '<label for="apellidos">Apellidos: </label>';
        echo '<input required type="text" name="txtApellido" value="">';
        echo '<input type="submit" value="Método de Pago">';
        echo '</fieldset>';
        echo '</form>';
        ?>
    </main>
</body>
</html>