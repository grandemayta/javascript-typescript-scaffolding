import '../styles/common.scss';
import Router from './core/routes';
import { Contacts, Home } from './features';

const routes = {
  '/': () => {
    new Home('#root').load();
  },
  '/contacts': () => {
    new Contacts('#root').load();
  }
};

new Router().bootstrap(routes);
