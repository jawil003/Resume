class IntroHeading extends HTMLElement {
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
        <h1 style="font-size: 2rem; text-decoration: underline;"><slot></slot><h1>
      `;
  }
}

customElements.define("intro-heading", IntroHeading);
