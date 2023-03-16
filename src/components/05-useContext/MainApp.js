import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserCotext } from './UserContext';

export const MainApp = () => {

 const [user, setUser] = useState({});

  return (
    // con esto proveemos el valor de user a todo lo que se encuentra dentro del provider
    <UserCotext.Provider value={{
      user,
      setUser,
    }}> 

       <AppRouter />

    </UserCotext.Provider>
    
  )
}
