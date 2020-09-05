class ResumeAsidePhoto extends HTMLElement {
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
        
        <img src="${this.getAttribute(
          "src"
        )}" style="width: 100%; border-radius: 50%;"></img>`;
  }
}

customElements.define(
  "resume-aside-photo",
  ResumeAsidePhoto
);
