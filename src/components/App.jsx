import React from "react";
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

function App(props){
  return (
    <div>
      <h3>Yes, Hello!!!!!</h3>
    <p><em>I am a react application!</em></p>
    <Switch>
      <Route exact path="/" component={Header} />
    </Switch>
    </div>
  );
}

export default App;
