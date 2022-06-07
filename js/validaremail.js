export function validarEmail(usuario) {
    var usuario = document.getElementById("usuario").value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(usuario)){
        alert("La dirección de email " + usuario + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta.");
    }
}