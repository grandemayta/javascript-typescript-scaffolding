import { html, render } from 'lit-html';
import jsImage from '../../../assets/js-logo.png';
import { Button, Header } from '../../components';
import './home.scss';

export default class Home {
  private homeEl: HTMLElement;
  private title: string;
  private href: string;

  constructor(selector: string) {
    this.homeEl = document.querySelector(selector);
    this.title = 'Home page';
    this.href = '/contacts';
  }

  public template() {
    return html`
      <app-home>
          <app-header id="header1" data-title="${this.title}"></app-header>
          <h1>${this.title}</h1>
          <img src=${jsImage}/>
          <app-button id="button1" data-text="Contacts" data-href="${
            this.href
          }"></app-button>
      </app-home>
    `;
  }

  public load() {
    render(this.template(), this.homeEl);
    new Header('#header1').load();
    new Button('#button1').load();
  }
}
