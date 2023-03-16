import React from 'react';
import { AppRouter } from './AppRouter';
import { UserCotext } from './UserContext';

export const MainApp = () => {

  const user = {
    id: 1234,
    name: 'Exequiel',
    email: 'exequielcostabel@gmail.com'
  }

  return (
    <UserCotext.Provider value={user}>

       <AppRouter />

    </UserCotext.Provider>
    
  )
}
