import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../views/home'
import Car from '../views/car'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filter/:id" component={Car}/>
            </Switch>
        </BrowserRouter>
    )
}