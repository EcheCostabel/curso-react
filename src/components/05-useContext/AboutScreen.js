import React, { useContext } from 'react';
import { UserCotext } from './UserContext';

export const AboutScreen = () => {

  const { user, setUser } = useContext(UserCotext)

  const handleClick = () => {
    setUser({});
  }


  return (
    <>
    <h1>AboutScreen</h1>
    <hr />

    <pre>
        { JSON.stringify(user, null, 3)}
    </pre>

    <button className='btn btn-warning' onClick={handleClick}>
      Logout
    </button>
    </>
  )
}
