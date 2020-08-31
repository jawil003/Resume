class ResumeItem extends HTMLElement {
  constructor() {
    super();
    this.configure();
    this.render();
  }

  configure() {
    this.attachShadow({ mode: "open" });
  }
  render() {
    if (this.shadowRoot)
      this.shadowRoot.innerHTML = `
    <div>${this.getAttribute("title")}</div>`;
  }

  /**--------Attributes -------------- */
}

customElements.define("resume-item", ResumeItem);
