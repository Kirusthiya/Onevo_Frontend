import { useRoutes } from 'react-router-dom';
import { authRoutes } from './auth.routes';
import { dashboardRoutes } from './dashboard.routes';
import { errorRoutes } from './error.routes';
import NotFound from '../shared/errors/NotFound';

export const AppRouter = () => {
  return useRoutes([
    {
      path: '/',
      children: [
        ...dashboardRoutes,
        { path: '*', element: <NotFound /> }
      ],
    },
    {
      path: '/auth',
      children: [
        ...authRoutes,
        { path: '*', element: <NotFound /> }
      ],
    },
    ...errorRoutes,
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
};
