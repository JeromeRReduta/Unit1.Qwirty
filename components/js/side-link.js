// const reset_css = `<link rel="stylesheet" href="pages/css/reset.css" />`;
const side_link_css = `<link rel="stylesheet" href="components/css/side-link.css" />`;
const side_link_html = `
    <a class="side-link" href="#">abba</a>
`;
const side_link = document.createElement("template");
side_link.innerHTML = `
    <link rel="stylesheet" href=${reset_css} />
    ${side_link_css}
    ${side_link_html}
`;
class Side_Link extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.appendChild(side_link.content);
    }
}

customElements.define("side-link", Side_Link);

// class Header extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         const shadowRoot = this.attachShadow({ mode: "closed" });
//         shadowRoot.appendChild(header.content);
//     }
// }

// const header = document.createElement("template");
// header.innerHTML = `
//     <link rel="stylesheet" href=${reset_css} />
//     <link rel="stylesheet" href=${navbars_css} />
//     ${header_html}
//     `;
// const footer = document.createElement("template");
// footer.innerHTML = `
//     <link rel="stylesheet" href=${reset_css} />
//     <link rel="stylesheet" href=${navbars_css} />
//     ${footer_html}
//     `;

// customElements.define("header-template", Header);
