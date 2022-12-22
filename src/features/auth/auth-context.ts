import { createContext } from 'react';

import { AuthContextProps } from './types';

export const authContextDefaultValues: AuthContextProps = {
  isLoggedIn: false,
};

export const AuthContext = createContext<AuthContextProps>(authContextDefaultValues);
