class ResumeHeader extends HTMLElement {
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
        <header style="width: 100%; height: 20%; 
        background-image: url(../public/pictures/resume-header-background.png);
        background-size: contain; background-repeat: no-repeat; display: grid; align-content: center;
           justify-content: center; grid-template-rows: auto; 
           grid-template-columns: auto;">
           
             <div style="padding: 7px 60px; background-color: var(--white); 
             text-align: center; display: inline-block; position: relative;">
             <span style="font-size: 2.5em; font-weight: bold; color: var(--skyblue);">
               Jannik Will
             </span>
             <div style="position:absolute; font-weight: 500; 
             bottom: calc(calc(12px + calc(1em / 2)) * (-1)); 
             right: 14px; padding: 5px 10px; 
             background-color: var(--grey); 
             color: var(--white);">
                Web Developer
              </div>
           </div>
           
        </header>
      `;
  }
}

customElements.define("resume-header", ResumeHeader);
