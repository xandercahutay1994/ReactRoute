import React from "react";
import Headers from "./Pages/Headers";
import Main from "./Pages/Main";
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { publicRoute, privateRoute } from "./Routes";
import CheckRoute from "./Pages/CheckRoute";

class App extends React.PureComponent {


  render() {
    const history = createBrowserHistory()
    return(
      <BrowserRouter {...history}>
        <div>
          <Headers/>
          <Switch>
            <CheckRoute {...history}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App