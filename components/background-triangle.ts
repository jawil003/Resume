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
        <div style="position: absolute; top: 0px; left: 0px; overflow: hidden; width: 100vw; height: 100vh">
        <div style="position: relative; transform: rotate(60deg); border-bottom:${this.getAttribute(
          "size"
        )} solid transparent; border-right:${this.getAttribute(
        "size"
      )} solid var(--blue); border-top: ${this.getAttribute(
        "size"
      )} solid transparent; width: 0px; height: 0px; top: -500px; left: -110px; z-index: -1; "></div></div>
      `;
  }
}

customElements.define(
  "background-triangle",
  BackgroundTriangle
);
