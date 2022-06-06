class Texto extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            h1{
                font-weight: 300px;
                text-align: center;
                font-size: 90px;
                line-height: 160px;
                margin-left: -10px;
                color: rgb(0, 0, 0);
                font-family: 'Work Sans', sans-serif;
                animation: back 20s linear infinite;
            }
            @keyframes back {
                100% {
                    background-position: 2000px 0;
                }
            }
        </style>

      
        <h1>¿Quienes Somos?</h1>
       
        
        `
    }

}

class Imagen extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        <style>
            .contenedor1{
                background-color: white;
                width: 30%;
                height: 50%;
                align-items: center;
                padding: 10px;
                border-radius: 10px;
            }
            .imagen{
                width: 300px;
                height: 280px;
            }
        </style>

        <div class="contenedor1">
            <img class="imagen" src="../images/plantas.png">
        </div>

        `
    }
}

class Separador extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                hr {
                    border-width: 4px;
                    border-style: dotted;
                    border-color: #32a361;
                    width: 80%;
                }

            </style>

            <hr>
            `
    }
}
window.customElements.define('texto-animado', Texto);
window.customElements.define('imagen-centro', Imagen);
window.customElements.define('hr-separador', Separador);