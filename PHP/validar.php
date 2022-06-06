<?php
//Validacion para la conexion a la base de datos
include('basededatos.php');
$usuario=$_POST['usuario'];
$contraseña=$_POST['contraseña'];
session_start();
$_SESSION['usuario']=$usuario;
$conexion=mysqli_connect("localhost","root","","sistemabotanico");
//Consulta a la base de datos
$consulta="SELECT*FROM usuarios 
where usuario='$usuario' and contraseña='$contraseña'";
$resultado=mysqli_query($conexion,$consulta);
$filas=mysqli_num_rows($resultado);
if($filas){
    header("location:index.html");
}else{
    ?>
    <?php
    include("login.html");
    ?>
    <h1 class="bad">ERROR DE AUTENTIFICACION.¡Usuario o contraseña incorrecta!</h1>
    <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);
