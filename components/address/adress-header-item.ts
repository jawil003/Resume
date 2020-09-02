class AddressHeaderItem extends HTMLElement {
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
        <p style="color: var(--white); position: absolute; top: 0px; left: 0px; font-size: 1.3rem;  padding: 20px;"><slot></slot></p>
      `;
  }
}

customElements.define(
  "address-header-item",
  AddressHeaderItem
);
