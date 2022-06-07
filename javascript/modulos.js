import sheet from '../CSS/login.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];

import {validarEmail} from './validaremail.js';
let email= document.getElementById("usuario")
email.addEventListener("click",validarEmail)

import {cambia_de_pagina} from './paginahome.js';
let cambio= document.getElementById("boton")
cambio.addEventListener("click",cambia_de_pagina)

import {validar_formulario} from './formulario.js';
let validar= document.getElementById("boton")
validar.addEventListener("click",validar_formulario)
