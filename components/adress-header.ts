class AddressHeader extends HTMLElement {
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
        <div style="position: relative; width: 100vw; height: 20vh;"><slot></slot><div>
      `;
  }
}

customElements.define("address-header", AddressHeader);
