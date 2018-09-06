import '@babel/polyfill';
import Router from './routes';
import { Home, Contacts } from '../features';
import '../../styles/common.scss';

const routes = {
  '/': () => {
    new Home('#root').load();
  },
  '/contacts': () => {
    new Contacts('#root').load();
  }
};

new Router().bootstrap(routes);
