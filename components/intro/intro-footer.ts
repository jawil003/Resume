class IntroFooter extends HTMLElement {
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
        <footer style="grid-auto-flow: column; position: absolute; bottom: 0px; left: 0px; right: 0px; 
        background-color: var(--blue); display: grid; justify-content: space-around; align-content: space-around; padding: 20px;"><slot></slot>
            <slot></slot>
        <footer>
      `;
  }
}
customElements.define("intro-footer", IntroFooter);
