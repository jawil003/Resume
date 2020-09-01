class BackgroundTriangle extends HTMLElement {
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
        <div style="z-index: -1; border-bottom:${this.getAttribute(
          "width"
        )} solid transparent; border-left:${this.getAttribute(
        "width"
      )} solid var(--blue); border-right: ${this.getAttribute(
        "width"
      )} solid transparent; width: 0px; height: 0px; position: absolute; top: 0px; left: 0px;"></div>
      `;
  }
}

customElements.define(
  "background-triangle",
  BackgroundTriangle
);
