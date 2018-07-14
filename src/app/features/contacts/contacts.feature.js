import Router from '../../core/routes';
import { Header } from '../../components';
import template from './contacts.template.pug';
import './contacts.style.scss';

export default class Contact {
  constructor() {
    this.title = 'Contacts Page';
  }

  click() {
    let home = document.querySelector('app-contacts');
    let btn = home.querySelector('button');

    btn.addEventListener('click', () => {
      new Router().go('/');
    });
  }

  load() {
    document.querySelector('#root').innerHTML = template();
    new Header().load();
    this.click();
  }
}
