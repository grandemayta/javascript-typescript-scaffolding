import { html, render } from 'lit-html';
import jsImage from '../../../assets/js-logo.png';
import { Header } from '../../components';
import Router from '../../core/routes';
import './home.style.scss';

export default class Home {
  private title: string;

  constructor() {
    this.title = 'Home page';
  }

  public click() {
    const home = document.querySelector('app-home');
    const btn = home.querySelector('button');

    btn.addEventListener('click', () => {
      new Router().go('/contacts');
    });
  }

  public template() {
    return html`
      <app-home>
          <app-header></app-header>
          <h1>${this.title}</h1>
          <img src=${jsImage}/>
          <button>Contacts</button>
      </app-home>
    `;
  }

  public load() {
    render(this.template(), document.querySelector('#root'));
    new Header().load();
    this.click();
  }
}
