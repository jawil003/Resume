class IntroMainParagraphIconboxIcon extends HTMLElement {
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
        <img src="${this.getAttribute(
          "src"
        )}" style="width: 30px; height: 30px;"></img>
      `;
  }
}

customElements.define(
  "intro-main-paragraph-iconbox-icon",
  IntroMainParagraphIconboxIcon
);
