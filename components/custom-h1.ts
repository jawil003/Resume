class CustomH1 extends HTMLHeadingElement {
  constructor() {
    super();
  }
  config() {
    this.attachShadow({ mode: "open" });
  }
  render() {
    if (this.shadowRoot)
      this.shadowRoot.innerHTML = `
        <h1 style="color:blue">${this.getAttribute("innerHtml")}<h1>
      `;
  }
}

customElements.define("h1", CustomH1);
