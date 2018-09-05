import template from './header.pug';
import './header.scss';

export default class Header {
  constructor(title) {
    this.title = title;
  }

  load() {
    document.querySelector('app-header').innerHTML = template({ title: this.title });
  }
}
