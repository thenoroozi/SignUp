import React from 'react';
import { Route, Routes,Navigate} from 'react-router-dom';

import Signup from './components/Signup'
import Login from './components/Login'
function App() {

   return (
      <>
         <Routes>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/' element={<Navigate to="/signup"/>}></Route>
         </Routes>
      </>
   )
}

export default App
