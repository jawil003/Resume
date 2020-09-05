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
        <aside style="border-left: 1px solid var(--grey); width: 100%; height: 100%; 
        padding: 50px 20px; box-sizing: border-box; display: grid; justify-content: start;
        align-content: start; row-gap: 20px;">
          <slot></slot>
        </aside>
      `;
  }
}

customElements.define("resume-aside", ResumeAside);
