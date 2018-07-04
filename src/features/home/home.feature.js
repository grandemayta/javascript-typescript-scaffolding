import { html, render } from 'lit-html';
import Router from '../../core/routes';
import { Header } from '../../components';

export default class Home {
  constructor() {
    this.title = 'VanillaJS';
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
                <div class="row">
                    <div class="col-sm">
                        <input type="email" class="form-control">
                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="currency-secondary" class="bmd-label-floating">
                                
                            </label>
                            <select class="form-control" id="currency-secondary">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

  load() {
    render(this.template(), document.querySelector('#root'));
    new Header().load();
    this.click();
  }
}
