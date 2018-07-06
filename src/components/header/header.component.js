import { html, render } from 'lit-html';

export default class Header {
  constructor() {
    this.title = 'Header component';
  }

  template() {
    return html`
            <header>
                <h4>${this.title}</h4>
            </header>
        `;
  }

  load() {
    render(this.template(), document.querySelector('app-header'));
  }
}
