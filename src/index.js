import Router from './core/routes';
import { Home, Contacts } from './features';

const routes = {
  '/': () => {
    new Home().load();
  },
  '/contacts': () => {
    new Contacts().load();
  }
};

new Router().bootstrap(routes);
