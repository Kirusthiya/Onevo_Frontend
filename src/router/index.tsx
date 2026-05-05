import { useRoutes, Navigate } from 'react-router-dom';
import { authRoutes } from './auth.routes';
import { dashboardRoutes } from './dashboard.routes';
import { errorRoutes } from './error.routes';
import NotFound from '../shared/errors/NotFound';

export const AppRouter = () => {
  return useRoutes([
    {
      path: '/',
      children: dashboardRoutes,
    },
    {
      path: '/auth',
      children: authRoutes,
    },
    ...errorRoutes,
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
};
