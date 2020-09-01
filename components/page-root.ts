class PageRoot extends HTMLElement {
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
        <div style="page-break-before: always;"><slot></slot></div>
      `;
  }
}

customElements.define("page-root", PageRoot);
