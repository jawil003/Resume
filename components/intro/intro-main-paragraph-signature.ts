class IntroMainParagraphSignature extends HTMLElement {
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
        <span style="display:block; margin-top: 0.3em; font-family: 'Dancing Script'; font-size: 2em; color: var(--blue);"><slot></slot></span>
      `;
  }
}

customElements.define(
  "intro-main-paragraph-signature",
  IntroMainParagraphSignature
);
