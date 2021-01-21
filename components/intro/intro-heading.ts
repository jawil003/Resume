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
        <h1 style="margin: 2em auto 0.75em auto; font-size: 1.8rem; 
        text-decoration: underline; text-align: left;
        color: #000;"><slot></slot></h1>
      `;
  }
}

customElements.define("intro-heading", IntroHeading);
