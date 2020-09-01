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
        <p style="margin-bottom: 20px;"><slot></slot><p>
      `;
  }
}
