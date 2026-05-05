import type { RouteObject } from 'react-router-dom';
import NotFound from '../shared/errors/NotFound';
import ServerError from '../shared/errors/ServerError';

export const errorRoutes: RouteObject[] = [
  {
    path: 'not-found',
    element: <NotFound />,
  },
  {
    path: 'server-error',
    element: <ServerError />,
  },
];
