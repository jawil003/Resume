class IntroMainParagraphIconbox extends HTMLElement {
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
        <div style="display: grid; column-gap: 10px; grid-auto-flow: column; justify-content: start; align-content: space-around; padding-top: 1em ;"><slot></slot></div>
      `;
  }
}

customElements.define(
  "intro-main-paragraph-iconbox",
  IntroMainParagraphIconbox
);
