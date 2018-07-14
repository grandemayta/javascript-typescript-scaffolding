import Router from './core/routes';
import { Home, Contacts } from './features';
import '../styles/common.scss';

const routes = {
  '/': () => {
    new Home().load();
  },
  '/contacts': () => {
    new Contacts().load();
  }
};

new Router().bootstrap(routes);
