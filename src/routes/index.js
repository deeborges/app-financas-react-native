import React, { usecO, useContext } from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { AuthContext } from '../contexts/auth';

const Routes = () => {

  const { user } = useContext(AuthContext);
  return (
    user ? (
      <AppRoutes />
    ) : (
      <AuthRoutes />
    )
  )
}

export default Routes;