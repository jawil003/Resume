/**
 * Represents a Job Entry in the Resume.
 * @param {string} job - The Job to describe
 * @param {string} place - The Place where the Job was/is
 * @param {string} description - What did you do at this Job
 * @param {string} timestamp - The Year when I worked there
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
          <div style="display: grid; box-sizing: border-box; padding: 5px 5px 5px 5px; border-right: 0.5px solid var(--blue); 
          justify-content: center; font-size: 1.25em; font-weight: 500; align-content: center;">${this.getAttribute(
            "timestamp"
          )}</div>
          <div style="border-left: 0.5px solid var(--blue); box-sizing: border-box; padding: 5px 5px 5px 20px ; display: grid;
          justify-content: start; justify-items: start; align-items: center;  align-content: center; 
          text-align: center; row-gap: 10px; grid-template-rows: repeat(3, auto);">
            <span style="font-size: 1.15em; font-weight: 500;">${this.getAttribute(
              "job"
            )}</span>
            <span>${this.getAttribute("place")}</span>
            <p style="text-align: justify; font-size: 0.75em; font-weight: 300; white-space: nowrap; margin: 0px;">${this.getAttribute(
              "description"
            )?.replace(/\\n/, "<br/>")}</p>
          </div>
        </div>
      `;
  }
}

customElements.define(
  "resume-main-item",
  ResumeMainItem
);
