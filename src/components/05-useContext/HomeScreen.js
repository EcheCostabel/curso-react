import React, { useContext } from 'react';
import { UserCotext } from './UserContext';

export const HomeScreen = () => {

 const userContext = useContext(UserCotext);

 console.log(userContext)

  return (
    <>
    <h1>HomeScreen</h1>
    <hr />
    </>
  )
}
