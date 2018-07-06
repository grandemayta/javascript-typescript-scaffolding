import { html, render } from 'lit-html';
import Router from '../../core/routes';
import { Header } from '../../components';

export default class Home {
  constructor() {
    this.title = 'Home page';
  }

  click() {
    let home = document.querySelector('#home');
    let btn = home.querySelector('button');

    btn.addEventListener('click', () => {
      new Router().go('/contacts');
    });
  }

  template() {
    return html`
            <div id="home">
                <app-header></app-header>
                <h1>${this.title}</h1>
                <button>Contacts</button>
            </div>
        `;
  }

  load() {
    render(this.template(), document.querySelector('#root'));
    new Header().load();
    this.click();
  }
}
