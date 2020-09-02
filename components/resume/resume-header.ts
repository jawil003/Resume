class ResumeHeader extends HTMLElement {
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
        <header><slot></slot></header>
      `;
  }
}

customElements.define("resume-header", ResumeHeader);
