class ResumeRoot extends HTMLElement {
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
        <div style="
      display: grid;
      grid-template-columns: 60% 40%;
      grid-template-rows: 100%;
      height: 1185px;
    "><slot></slot></div>
      `;
  }
}

customElements.define("resume-root", ResumeRoot);
