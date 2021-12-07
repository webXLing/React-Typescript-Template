/*
 * @Author: web_XL
 * @Date: 2021-07-21 13:20:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-09-09 16:06:22
 * @Description: 
 */
import React, { lazy, Suspense, FunctionComponent } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
// const Home = lazy(() => import('./pages/Home'));
// const Login = lazy(() => import('./pages/Login'));
import Home from "./pages/Home"
import Login from "./pages/Login"





const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
