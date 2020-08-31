class IntroFooterItem extends HTMLElement {
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
        <div style="display: grid"; grid-template-rows: 30% 70%><slot><img src="${this.getAttribute(
          "src"
        )}"/></slot></div>
      `;
  }
}
customElements.define(
  "intro-footer-item",
  IntroFooterItem
);
