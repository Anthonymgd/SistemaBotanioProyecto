window.onload = function(){
    window.customElements.define('carga-animacion', class Figura extends HTMLElement {
        constructor(){
            super();
            
        }
        connectedCallback(){
            let shadowRoot = this.attachShadow({mode:'open'})
            let style = document.createElement('style');
            style.textContent = `.container {
                top: 50%;
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
            }
            .wrapper {
                position: absolute;
                top: -35px;
                transform: scale(1.5);
            }
            .loader {
                height: 25px;
                width: 1px;
                position: absolute;
                animation: rotate 3.5s linear infinite;
            }
            .loader .dot {
                height: 7px;
                width: 7px;
                background: #fff;
                border-radius: 50%;
                position: relative;
                background-color: black;
                top: 40px;
            }        @keyframes rotate {
                30% {
                    transform: rotate(220deg);
                }
                40% {
                    transform: rotate(450deg);
                    opacity: 1;
                }
                75% {
                    transform: rotate(720deg);
                    opacity: 1;
                }
                76% {
                    opacity: 0;
                }
                100% {
                    opacity: 0;
                    transform: rotate(0deg);
                }
            }
     
            .loader:nth-child(1) {
                animation-delay: 0.15s;
            }
     
            .loader:nth-child(2) {
                animation-delay: 0.3s;
            }
            .loader:nth-child(3) {
                animation-delay: 0.45s;
            }
            .loader:nth-child(4) {
                animation-delay: 0.6s;
            }
            .loader:nth-child(5) {
                animation-delay: 0.75s;
            }
            .loader:nth-child(6) {
                animation-delay: 0.9s;
            }`;
    
            shadowRoot.appendChild(style);
            let structure = document.createElement('div');
            structure.setAttribute('class','container');
            structure.innerHTML  = `
                <div class="container">
                    <div class="wrapper">
                        <div class="loader">
                            <div class="dot"></div>
                        </div>
                        <div class="loader">
                            <div class="dot"></div>
                        </div>
                        <div class="loader">
                            <div class="dot"></div>
                        </div>
                        <div class="loader">
                            <div class="dot"></div>
                        </div>
                        <div class="loader">
                            <div class="dot"></div>
                        </div>
                        <div class="loader">
                            <div class="dot"></div>
                        </div>
                    </div>
                </div>`;
                shadowRoot.appendChild(structure);
            }
    });
    setTimeout(10000);
    alert('10 segundos');
    // let componente = document.querySelector('carga-animacion');
    // document.body.remove(componente);
};