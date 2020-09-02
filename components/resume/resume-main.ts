class ResumeMain extends HTMLElement {
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
        <main style="width: 100%; height: 100%; padding: 20px; box-sizing: border-box;"><slot></slot></main>
      `;
  }
}

customElements.define("resume-main", ResumeMain);
