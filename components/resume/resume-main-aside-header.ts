class ResumeMainAsideHeader extends HTMLElement {
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
        <div style="text-align: center; box-sizing: border-box; padding: 7px 60px; background-color: var(--blue); 
        color: var(--white); font-weight: 500; font-size: 1.25em;">
          <slot></slot>
        </div>
      `;
  }
}

customElements.define(
  "resume-main-aside-header",
  ResumeMainAsideHeader
);
