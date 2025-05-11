const reset_css = "pages/css/reset.css";
const navbars_css = "components/css/navbars.css";
const header_html = `
    <header>
        <nav id="top-left">
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
        </nav>
        <nav id="top-right">
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">CART</a>
        </nav>
    </header>
    `;
const footer_html = `
    <footer>
        <nav>
            <h1>TITLE</h1>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
        </nav>
        <nav>
            <h1>TITLE</h1>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
        </nav>
        <nav>
            <h1>TITLE</h1>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
            <a href="#">LINK</a>
        </nav>
    </footer>
`;

const header = document.createElement("template");
header.innerHTML = `
    <link rel="stylesheet" href=${reset_css} />
    <link rel="stylesheet" href=${navbars_css} />
    ${header_html}
    `;
const footer = document.createElement("template");
footer.innerHTML = `
    <link rel="stylesheet" href=${reset_css} />
    <link rel="stylesheet" href=${navbars_css} />
    ${footer_html}
    `;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "closed" });
        shadowRoot.appendChild(header.content);
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: "closed" }).appendChild(footer.content);
    }
}

customElements.define("header-template", Header);
customElements.define("footer-template", Footer);
