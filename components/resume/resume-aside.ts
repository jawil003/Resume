class ResumeAside extends HTMLElement {
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
        <aside style="border-left: 0.5px solid var(--lightgrey); width: 100%; height: 100%; 
        padding: 50px 20px; box-sizing: border-box;">
          <slot></slot>
        </aside>
      `;
  }
}

customElements.define("resume-aside", ResumeAside);
