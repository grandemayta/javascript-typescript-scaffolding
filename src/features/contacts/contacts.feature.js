import { html, render } from 'lit-html';
import Router from '../../core/routes';
import { Header } from '../../components';

export default class Contact {
  constructor() {
    this.title = 'Contacts Page';
  }

  click() {
    let home = document.querySelector('#contacts');
    let btn = home.querySelector('button');

    btn.addEventListener('click', () => {
      new Router().go('/');
    });
  }

  template() {
    return html`
            <div id="contacts">
                <app-header></app-header>
                <h1>${this.title}</h1>
                <button>Home</button>
            </div>
        `;
  }

  load() {
    render(this.template(), document.querySelector('#root'));
    new Header().load();
    this.click();
  }
}
