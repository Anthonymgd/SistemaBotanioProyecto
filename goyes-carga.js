class ProgressBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});
    // this.shadow = this.createShadowRoot(); // ShadowDOM
    this._complete = 0;
  }

  get complete() {
    return this._complete;
  }

  set complete(val) {
    this.setAttribute("complete", val);
  }

  static get observedAttributes() {
    return ["complete"];
  }

  createdCallback() {
    // The element was created
    console.log("element created");
  }

  attachedCallback() {
    // the element was inserted into the document
    console.log("element attached to stage");
  }

  detachedCallback() {
    // The element was removed from the document
    console.log("element removed from stage");
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    // Attribute was added, removed, or updated
    console.log("Attribute changed:", attr, oldVal, newVal);

    // const innerBar = this.shadow.querySelector(".c-progress-bar__inner"); // ShadowDOM
    const innerBar = this.shadowRoot.querySelector(".c-progress-bar__inner");
    switch (attr) {
      case "complete":
        this._complete = parseInt(newVal, 10) || 0;
        innerBar.style.width = this.complete + "%";
        innerBar.innerHTML = this.complete + "%";
    }
  }

  connectedCallback() {
    const style = document.createElement('style');
    style.innerHTML = `
        html {
            font-size: 14px;
        }
        .contenedor {
            display: flex;
            justify-content: center;
            align-items: center;
            height: -webkit-fill-available;
        }
        .c-progress-bar {
            font-weight: bolder;
            background-color: #354;
            border-radius: 1rem;
            color: white;
            height: 2rem;
            padding: 0.2rem;
            width: calc(100vw - 40em);
        }
        .c-progress-bar__inner {
            background: rgba(60, 250, 100, .6);
            border-radius: .9rem;
            line-height: 2rem;
            text-align: center;
            transition: width 0.25s;
        }
    `;
    const funcional = document.createElement('script');
    funcional.innerHTML = `
    // Interval to Set the Complete Value
    (function () {
        const progress = document.querySelector('progress-bar');
        let complete = 0;

        const progressInterval = setInterval(() => {
        complete += 1;

        if(complete <= 100) {
            progress.setAttribute('complete', complete);
            window.location.href = "./catalogo.html";
        } else {
            clearInterval(progressInterval);
        }
        }, 50)
        })();
    `;
    const template = document.createElement('div');
    template.setAttribute('class','contenedor');
    template.innerHTML = `<div class="c-progress-bar">
    <div class="c-progress-bar__inner">${this.complete}%</div>
    </div>`;

    this.shadowRoot.appendChild(style)
    this.shadowRoot.appendChild(template);
    this.appendChild(funcional);
  }
}

window.customElements.define("progress-bar", ProgressBar);
