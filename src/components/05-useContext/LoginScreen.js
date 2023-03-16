import React, { useContext } from 'react';
import { UserCotext } from './UserContext';

export const LoginScreen = () => {

  const { setUser } = useContext(UserCotext)
  console.log(setUser)

  const user1 = {
    id: 123,
    name: 'popi'
  }

  return (
    <>
    <h1>LoginScreen</h1>
    <hr />


    <button className='btn btn-primary' onClick={() => setUser(user1 )}>
      Login
    </button>
    </>
  )
}
