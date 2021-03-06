/**
 * Represents a Job Entry in the Resume.
 * @param {string} job - The Job to describe
 * @param {string} place - The Place where the Job was/is
 * @param {string} description - What did you do at this Job
 * @param {string} timestamp - The Year when I worked there
 * @param {string} href - The Link of the Place.
 */
class ResumeMainItem extends HTMLElement {
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
        <div style="display: grid; grid-template-rows: 1fr auto;
        grid-template-columns: 20% 80%; grid-template-rows: 100%; color: var(--blue); justify-self: start;">
          <div style="display: grid; box-sizing: border-box; padding: 5px; border-right: 1px solid var(--blue); 
          justify-content: center; font-size: 1.25em; font-weight: 500; align-content: center;">${this.getAttribute(
            "timestamp"
          )
            ?.split(/\\n/)
            .join("<br/>")}</div>
          <div style="border-left: 1px solid var(--blue); box-sizing: border-box; padding: 5px 5px 5px 20px ; display: grid;
          justify-content: start; justify-items: start; align-items: start;  align-content: start; 
          text-align: left; row-gap: 10px; grid-template-rows: repeat(3, auto);">
            <span style="font-size: 1.15em; font-weight: 500;">${this.getAttribute(
              "job"
            )
              ?.split(/\\n/)
              .join("<br/>")}</span>
            <a style="color: var(--blue); text-decoration: none;" href="${this.getAttribute(
              "href"
            )}"><span>${this.getAttribute(
        "place"
      )}</span></a>
            <p style="text-align: justify; font-size: 0.75em; font-weight: 300; white-space: nowrap; margin: 0px;">${this.getAttribute(
              "description"
            )
              ?.split(/\\n/)
              .join("<br/>")}</p>
          </div>
        </div>
      `;
  }
}

customElements.define(
  "resume-main-item",
  ResumeMainItem
);
