import ProductPage from './ProductPage';
import NotFound from './NotFound';

const ROUTES = [
    {
      path: '/',
      exact: true,
      component: ProductPage
    },
    {
      path: '*',
      exact: false,
      component: NotFound
    }
  ];

  export default ROUTES;