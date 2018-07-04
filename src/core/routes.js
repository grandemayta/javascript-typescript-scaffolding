import Navigo from 'navigo';

export default class Router {
  constructor() {
    this.root = null;
    this.useHash = true;
    this.hash = '#!';
    this.router = new Navigo(this.root, this.useHash, this.hash);
  }

  go(url) {
    this.router.navigate(url);
  }

  bootstrap(routes) {
    this.router.on(routes).resolve();
  }
}
