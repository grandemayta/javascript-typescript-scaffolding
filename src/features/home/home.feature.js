import { html, render } from 'lit-html';
import { Header } from '../../components';

export default class Home {
    constructor() {
        this.title = 'VanillaJS';
    }

    template() {
        return html`
            <div>
                <app-header></app-header>
                <h1>${this.title}</h1>
            </div>
        `;
    }

    load() {
        render(this.template(), document.querySelector('#root'));
        new Header().load();
    }
}