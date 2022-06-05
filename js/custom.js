class Nose extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ``
    }

}
window.CustomElement.define('nose', Nose);