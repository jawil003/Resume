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
        <div style="color: var(--white); display: grid; column-gap: 10px; grid-template-columns: 30% 70%; justify-items: center; align-items: center;"><img width="30px" height="30px" src="${this.getAttribute(
          "src"
        )}"></img><a style="color: inherit;" href=${this.getAttribute(
        "href"
      )}><slot></slot></a></div>
      `;
  }
}
customElements.define(
  "intro-footer-item",
  IntroFooterItem
);
