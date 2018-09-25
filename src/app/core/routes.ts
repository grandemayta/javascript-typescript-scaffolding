import Navigo from 'navigo';

export default class Router {
  private root: string;
  private useHash: boolean;
  private hash: string;
  private router: Navigo;

  constructor() {
    this.root = null;
    this.useHash = true;
    this.hash = '#!';
    this.router = new Navigo(this.root, this.useHash, this.hash);
  }

  public go(url) {
    this.router.navigate(url);
  }

  public bootstrap(routes) {
    this.router.on(routes).resolve();
  }
}
