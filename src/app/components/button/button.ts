import { html, render } from 'lit-html';
import Router from '../../core/routes';
import './button.scss';

export default class Header {
  private btnEl: HTMLElement;
  private text: string;
  private href: string;
  private router: Router;

  constructor(selector) {
    this.btnEl = document.querySelector(selector);
    this.text = this.btnEl.getAttribute('data-text');
    this.href = this.btnEl.getAttribute('data-href');
    this.router = new Router();
  }

  public click() {
    this.btnEl.addEventListener('click', e => {
      e.preventDefault();
      this.router.go(this.href);
    });
  }

  public template() {
    return html`
      <button>
          <h4>${this.text}</h4>
      </button>
    `;
  }

  public load() {
    render(this.template(), this.btnEl);
    this.click();
  }
}
