import '../styles/common.scss';
import Router from './core/routes';
import { Contacts, Home } from './features';

const routes = {
  '/': () => {
    new Home().load();
  },
  '/contacts': () => {
    new Contacts().load();
  }
};

new Router().bootstrap(routes);
