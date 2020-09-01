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
        <span style="margin-top: 0.8em;font-family: 'Dancing Script'; font-size: 2em;"><slot></slot></span>
      `;
  }
}

customElements.define(
  "intro-main-paragraph-signature",
  IntroMainParagraphSignature
);
