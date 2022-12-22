import { Link, Outlet } from 'react-router-dom';

import { routes } from '@/routing/constants/routes';

export const RootLayout = () => {
  return (
    <div>
      <h1>React Vite Starter</h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.root}>Home</Link>
          </li>
          <li>
            <Link to={routes.login}>Log in</Link>
          </li>
          <li>
            <Link to={routes.dashboard}>Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
