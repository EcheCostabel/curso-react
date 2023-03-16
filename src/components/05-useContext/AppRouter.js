import React from 'react';
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
  return (

<BrowserRouter>
        <div>
            <NavBar />
            <div className='container'>

                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/about' element={<AboutScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    
                </Routes>
            </div>
        </div>
</BrowserRouter>

  )
}
