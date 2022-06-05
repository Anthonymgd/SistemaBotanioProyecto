class SellLabel  extends HTMLElement {
    //Aqui iria el codigo del elemento
    constructor() {
      super();
    }
    connectedCallback(){//Nuevo elememto
      let shadowRoot=this.attachShadow({mode:'open'});  //Para establecer el ShadowDom
      const t = document.querySelector('#final');
      const instancia = t.content.cloneNode(true);
      shadowRoot.appendChild(instancia); //Nodo raiz le añade un hijo (template añade a la instancia)
     }
    }
  window.customElements.define('boton-venta', SellLabel );