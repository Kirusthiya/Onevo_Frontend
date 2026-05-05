import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/dashboard/HomePage';

export const dashboardRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
  // Add other dashboard routes here (Employees, Leave, etc.)
];
