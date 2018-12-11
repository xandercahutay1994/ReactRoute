import React from 'react'
import { publicRoute, privateRoute } from '../Routes';
import {BrowserRouter, Switch,Route} from 'react-router-dom'

const CheckRoute = ({location}) => {
    const path = location.pathname
    const route = () => {
        if (path !== '/user') {
                return publicRoute.map((route,i) => (
                    <Route key={i} exact {...route}/>
                ))
        }
        
        return privateRoute.map((route,i) => (
            <Route key={i} exact {...route}/>
        ))
    }

    return route()
}

export default CheckRoute