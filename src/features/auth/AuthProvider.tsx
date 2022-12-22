import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { AuthContext } from './auth-context';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      isLoading,
    }),
    [isLoggedIn],
  );

  return <AuthContext.Provider {...{ value }}>{children}</AuthContext.Provider>;
};
