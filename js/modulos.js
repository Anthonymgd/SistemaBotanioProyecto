import { registrar } from "./codigo.js";

import { crearTabla } from "./codigo.js";

import { mostrarModal} from "./codigo.js";

import { cerrarModal} from "./codigo.js";
// registrar();
crearTabla();
// mostrarModal();
// cerrarModal();

  let mostrarModal1=document.getElementById("mostrar1")
  mostrarModal1.addEventListener("click",mostrarModal)
  
  let registro=document.getElementById("enviar1")
  registro.addEventListener("click",registrar)
   let cierre=document.getElementById("cerrar")
   cierre.addEventListener("click",cerrarModal)
