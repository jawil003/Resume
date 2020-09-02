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
        <aside style="background-color: var(--blue); width: 100%; height: 100%; padding: 40px; box-sizing: border-box;"><slot></slot></aside>
      `;
  }
}

customElements.define("resume-aside", ResumeAside);
