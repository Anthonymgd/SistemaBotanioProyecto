
export function validar_formulario(){
	var usuario = document.getElementById("usuario").value;
	var Contraseña = document.getElementById("pass").value;	

	if(usuario == "grupo5@espe.edu.ec" && Contraseña == "grupo5")
	{
		alert("Usuario y Contraseña validos");
	}else{
    alert("Verifique sus credenciales");
	}
}

