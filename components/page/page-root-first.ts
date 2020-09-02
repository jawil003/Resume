class PageRootFirst extends HTMLElement {
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
        <div style="width: 100vw; ${this.getAttribute(
          "style"
        )}"><slot></slot></div>
      `;
  }
}

customElements.define(
  "page-root-first",
  PageRootFirst
);
