import template from './header.template.pug';
import './header.style.scss';

export default class Header {
  constructor() {
    this.title = 'Header component';
  }

  load() {
    document.querySelector('app-header').innerHTML = template({ title: this.title });
  }
}
