import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from '@/features/auth/utils/use-auth-context';
import { routes } from '@/routing/constants/routes';
import { UrlParamsKeys } from '@/routing/constants/url-params-keys';

export interface ProtectedRouteProps extends PropsWithChildren {
  redirectPath?: string;
}
export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  redirectPath = routes.login,
  children,
}) => {
  const { pathname, search } = useLocation();
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    const searchSuffix = search ? search.replace('?', '&') : '';
    return (
      <Navigate
        to={`${redirectPath}?${UrlParamsKeys.REDIRECT}=${pathname}${searchSuffix}
        `}
        replace
      />
    );
  }

  return <>{children}</>;
};
