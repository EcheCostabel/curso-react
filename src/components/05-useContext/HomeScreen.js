import React, { useContext } from 'react';
import { UserCotext } from './UserContext';

export const HomeScreen = () => {

 const {user} = useContext(UserCotext);

 console.log(user)

  return (
    <>
    <h1>HomeScreen</h1>
    <hr />

    <pre >
      { JSON.stringify(user, null , 3)}
    </pre>
    </>
  )
}
