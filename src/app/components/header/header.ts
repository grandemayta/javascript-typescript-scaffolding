import { html, render } from 'lit-html';
import './header.scss';

export default class Header {
  private headerEl: HTMLElement;
  private title: string;

  constructor(selector) {
    this.headerEl = document.querySelector(selector);
    this.title = this.headerEl.getAttribute('data-title');
  }

  public template() {
    return html`
      <header>
          <h4>${this.title}</h4>
      </header>
    `;
  }

  public load() {
    render(this.template(), this.headerEl);
  }
}
