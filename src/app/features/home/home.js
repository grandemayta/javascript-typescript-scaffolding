import { Header, Button } from '../../components';
import template from './home.pug';
import './home.scss';
import jsImage from '../../../assets/js-logo.png';

export default class Home {
  constructor(selector) {
    this.homeEl = document.querySelector(selector);
  }

  load() {
    this.homeEl.innerHTML = template({ title: this.title, jsImage });
    new Header('Header component').load();
    new Button('#button1').load();
  }
}
