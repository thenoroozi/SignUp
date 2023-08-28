import React, { useState } from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';

import Signup from './components/Signup'
import Login from './components/Login'
function App() {

   return (
      <>
         <Switch>
            <Route path='/signup' component={Signup}></Route>
            <Route path='/login' component={Login}></Route>
            <Redirect from='/' to='/signup'></Redirect>
         </Switch>
      </>
   )
}

export default App
