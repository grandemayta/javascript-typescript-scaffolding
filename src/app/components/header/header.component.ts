import { html, render } from 'lit-html';
import './header.style.scss';

export default class Header {
  private title: string;

  constructor() {
    this.title = 'Header component';
  }

  public template() {
    return html`
      <header>
          <h4>${this.title}</h4>
      </header>
    `;
  }

  public load() {
    render(this.template(), document.querySelector('app-header'));
  }
}
