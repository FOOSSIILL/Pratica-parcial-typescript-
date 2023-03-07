class Profile extends HTMLElement {
    static get observedAttributes() {
        return ["name", "id", "city"]
    }

    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(){
        
    }

    render() {
       this.shadowRoot.innerHTML = `
       <link rel="stylesheet" href="./src/Components/Profile/Profile.css">
       <section>
       <h1>${this.name}</h1>
       <p>ID:${this.id}</p>
       <p><strong>From:${this.city}</strong></p>
       </section>
       `
    }
}