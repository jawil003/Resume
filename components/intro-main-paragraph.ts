class IntroMainParagraph extends HTMLElement {
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
        <p style="margin: 1em 0px;"><slot></slot></p>
      `;
  }
}

customElements.define(
  "intro-main-paragraph",
  IntroMainParagraph
);
