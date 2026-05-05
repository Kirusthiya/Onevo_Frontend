import type { RouteObject } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';

export const authRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <LoginPage />,
  },
  // Add other auth routes here (Forgot password, MFA, etc.)
];
