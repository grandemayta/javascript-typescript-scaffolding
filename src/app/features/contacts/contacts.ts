import { html, render } from 'lit-html';
import { Button, Header } from '../../components';
import './contacts.scss';

export default class Contact {
  private contacsEl: HTMLElement;
  private title: string;
  private href: string;

  constructor(selector: string) {
    this.contacsEl = document.querySelector(selector);
    this.title = 'Contacts Page';
    this.href = '/';
  }

  public template() {
    return html`
      <app-contacts>
          <app-header id="header1" data-title="${this.title}"></app-header>
          <h1>${this.title}</h1>
          <app-button id="button1" data-text="Home" data-href="${
            this.href
          }"></app-button>
      </app-contacts>
    `;
  }

  public load() {
    render(this.template(), this.contacsEl);
    new Header('#header1').load();
    new Button('#button1').load();
  }
}
