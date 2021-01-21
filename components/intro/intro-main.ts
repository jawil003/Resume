class IntroMain extends HTMLElement {
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
        <main style="color: #000; font-family: Open Sans; 
        padding: 2px; overflow: hidden;"><slot></slot><main>
      `;
  }
}

customElements.define("intro-main", IntroMain);
