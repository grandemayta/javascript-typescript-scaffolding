import { html, render } from 'lit-html';
import { Header } from '../../components';
import Router from '../../core/routes';
import './contacts.style.scss';

export default class Contact {
  private title: string;

  constructor() {
    this.title = 'Contacts Page';
  }

  public click() {
    const home = document.querySelector('app-contacts');
    const btn = home.querySelector('button');

    btn.addEventListener('click', () => {
      new Router().go('/');
    });
  }

  public template() {
    return html`
      <app-contacts>
          <app-header></app-header>
          <h1>${this.title}</h1>
          <button>Home</button>
      </app-contacts>
    `;
  }

  public load() {
    render(this.template(), document.querySelector('#root'));
    new Header().load();
    this.click();
  }
}
