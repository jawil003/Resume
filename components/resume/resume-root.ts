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
      height: 80%; display: grid; grid-template-columns: 65% 35%;
      grid-template-rows: 100%;
    ">
    <slot></slot></div>
      `;
  }
}

customElements.define("resume-root", ResumeRoot);
