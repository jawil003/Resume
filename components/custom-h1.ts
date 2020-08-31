class CustomH1 extends HTMLElement {
  constructor() {
    super();
    this.config();
    this.render();
  }
  config() {
    this.attachShadow({ mode: "open" });
  }
  render() {
    if (this.shadowRoot)
      this.shadowRoot.innerHTML = `
        <h1 style="color:var(--blue)"><slot></slot><h1>
      `;
  }
}

customElements.define("custom-h1", CustomH1);
