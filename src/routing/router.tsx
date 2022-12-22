import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '@/layouts/RootLayout';
import { NotFoundPage } from '@/pages/not-found/NotFound.page';
import { ProtectedRoute } from '@/routing/components/protected-route/ProtectedRoute';

import { routes } from './constants/routes';

const LoginPage = () => {
  return (
    <div>
      <h1>Log In</h1>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: routes.login,
        element: <LoginPage />,
      },
      {
        path: routes.dashboard,
        element: (
          <ProtectedRoute>
            <div>Dashboard</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
