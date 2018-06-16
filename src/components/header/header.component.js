import { html, render } from 'lit-html';

export default class Header {
    constructor() {
        this.title = 'Header';
    }

    template() {
        return html`
            <header>
                <h1>${this.title}</h1>
            </header>
        `;
    }

    load() {
        render(this.template(), document.querySelector('app-header'));
    }
}