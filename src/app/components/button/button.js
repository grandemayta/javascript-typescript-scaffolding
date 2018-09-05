import Router from '../../core/routes';
import template from './button.pug';
import './button.scss';

export default class Header {
  constructor(selector) {
    this.btnEl = document.querySelector(`app-button${selector}`);
    this.params = {
      text: this.btnEl.getAttribute('data-text'),
      href: this.btnEl.getAttribute('data-href')
    };
  }

  click() {
    this.btnEl.addEventListener('click', () => {
      new Router().go(this.params.href);
    });
  }

  load() {
    this.btnEl.innerHTML = template(this.params);
    this.click();
  }
}
