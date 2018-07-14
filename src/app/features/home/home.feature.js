import Router from '../../core/routes';
import { Header } from '../../components';
import template from './home.template.pug';
import './home.style.scss';
import jsImage from '../../../assets/js-logo.png';

export default class Home {
  constructor() {
    this.title = 'Home page';
  }

  click() {
    let home = document.querySelector('app-home');
    let btn = home.querySelector('button');

    btn.addEventListener('click', () => {
      new Router().go('/contacts');
    });
  }

  load() {
    document.querySelector('#root').innerHTML = template({ title: this.title, jsImage });
    new Header().load();
    this.click();
  }
}
