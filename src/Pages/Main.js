import React from "react";
import {
    Switch,
    Route
} from 'react-router-dom'
import publicRoute from "../Routes/publicRoute";
import privateRoute from "../Routes/privateRoute";
import CheckRoute from "./CheckRoute";

class Main extends React.PureComponent {
    render() {

        return(
            <Switch>
         
                {/* <CheckRoute /> */}
                {
                    publicRoute.map((route,i) => (
                        <Route key={i} exact strict {...route}/>
                    ))
                }
                {/* {
                    privateRoute.map((route,i)=> (
                        <Route key={i} exact strict {...route}/>
                    ))
                } */}
            </Switch>
        )
    }
}
export default Main