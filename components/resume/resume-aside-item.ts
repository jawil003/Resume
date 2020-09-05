/**
 * An Item in the Aside of the Resume.
 * @param {string} key - The Name of the Displayed Value
 * @param {string} value - The Value of the Key
 * @param {string} href - The Link when the Element is clicked
 * @param {any} slot - An alternative Value when no Key should be displayed
 */
class ResumeAsideItem extends HTMLElement {
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
      ${
        this.getAttribute("href")
          ? `<a style="text-decoration: none; color: var(--grey);" target="_blank" href="${this.getAttribute(
              "href"
            )}">`
          : ""
      }<span style="display: block; margin: auto; text-align: center; font-size: 1.15em; 
      font-weight: 300; color: var(--grey);">${
        this.getAttribute("key") &&
        this.getAttribute("value")
          ? `${this.getAttribute(
              "key"
            )} | ${this.getAttribute("value")}`
          : ""
      } <slot></slot></span>${
        this.getAttribute("href") ? `</a">` : ""
      }`;
  }
}

customElements.define(
  "resume-aside-item",
  ResumeAsideItem
);
