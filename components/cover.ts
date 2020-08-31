class ImageCover extends HTMLElement {
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
        <div style="display: flex; justify-content: center; width: 100vw; height: 20vh; position: absolute; top: 0px; left: 0px;"><img width="100%" height="100%" src="${this.getAttribute(
          "src"
        )}" /></div>
      `;
  }
}

customElements.define("image-cover", ImageCover);
