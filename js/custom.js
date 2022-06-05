class Texto extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            h1{
                font-weight: 400px;
                text-align: center;
                font-size: 120px;
                line-height: 160px;
                margin-left: -10px;
                color: transparent;
                -webkit-text-stroke: 1px #fff;
                background: url(../images/back.png);
                -webkit-background-clip: text;
                animation: back 20s linear infinite;
            }
            @keyframes back {
                100% {
                    background-position: 2000px 0;
                }
            }
        </style>

      
        <h1>Botánica</h1>
       
        
        `
    }

}
window.customElements.define('texto-animado', Texto);