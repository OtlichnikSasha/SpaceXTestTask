import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Index} from './pages/Index'
import {Contacts} from './pages/Contacts'
import {Graphic} from './pages/Graphic'
import {Technology} from './pages/Technology'
import {Warranty} from './pages/Warranty'
import {About} from "./pages/About";

export const useRoutes = () => {
        return (
            <Switch>
                <Route path='/index' exact>
                    <Index/>
                </Route>
                <Route path='/graphic' exact>
                    <Graphic/>
                </Route>
                <Route path='/contacts' exact>
                    <Contacts/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path='/warranty' exact>
                    <Warranty/>
                </Route>
                <Route path='/technology' exact>
                    <Technology/>
                </Route>
            </Switch>
        )
}