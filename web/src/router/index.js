import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from '../components/header'
import Home from '../views/home'
import Car from '../views/car'
import Sell from '../views/sell'

export default function Router(){
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filter/:id" component={Car}/>
                <Route exact path="/sell" component={Sell}/>
                <Route exact path="/sell/:id" component={Sell}/>
            </Switch>
        </BrowserRouter>
    )
}