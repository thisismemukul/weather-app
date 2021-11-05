import React from 'react'
import { Route, Switch,Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Theme from './Components/Theme';
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/weather-app/' component={Theme} />
        <Redirect from="*" to="/weather-app/" />
      </Switch>

    </>
  )
}

export default App;
