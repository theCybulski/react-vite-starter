import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from '@/features/auth/AuthProvider';
import { router } from '@/routing/router';

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider {...{ router }} />
    </AuthProvider>
  );
};

export default App;
