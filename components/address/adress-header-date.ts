import dayjs from "dayjs";

class AddressHeaderDate extends HTMLElement {
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
        <span style="color: var(--blue); position: absolute; bottom: 0px; right: 0px; font-size: 1.3rem;  padding: 20px;">${dayjs().format(
          "DD.MM.YYYY"
        )}</span>
      `;
  }
}

customElements.define(
  "address-header-date",
  AddressHeaderDate
);
