import { Header, Button } from '../../components';
import template from './contacts.template.pug';
import './contacts.style.scss';

export default class Contact {
  constructor(selector) {
    this.contactsEl = document.querySelector(selector);
  }

  load() {
    this.contactsEl.innerHTML = template();
    new Header('Contacs Page').load();
    new Button('#button1').load();
  }
}
