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
        <h1 style="margin: 0px auto 2em auto; font-size: 1.8rem; text-decoration: underline; text-align: left;"><slot></slot></h1>
      `;
  }
}

customElements.define("intro-heading", IntroHeading);
