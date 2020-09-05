class ResumeMainAsideWrapper extends HTMLElement {
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
        <div style="display: grid; grid-template-rows: 1fr auto; row-gap: 30px; width: 100%;
        margin-bottom: 30px;">
          <resume-main-aside-header>${this.getAttribute(
            "title"
          )}</resume-main-aside-header>
          <div style="display: grid; row-gap: 20px;">
            <slot></slot>
          </div>
        </div>
      `;
  }
}

customElements.define(
  "resume-main-aside-wrapper",
  ResumeMainAsideWrapper
);
