/*
 * @Author: web_XL
 * @Date: 2021-07-21 14:10:13
 * @LastEditors: web_XL
 * @LastEditTime: 2021-09-09 16:09:36
 * @Description:
 */
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, RouterProps, Switch } from "react-router-dom"

import Layout from '../../components/Layout'
import Test1 from '../../components/Test1'
import Test2 from '../../components/Test2'
import { signUpAction } from '../../store/actions/auth.actions'



export default memo(function Home(props: RouterProps) {
    console.log("home props", props);
    const history = props.history
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(signUpAction({
            email: "",
            password: "string",
            name: ""
        }))
    }, [dispatch])

    return (
        <Layout>
            Home
            <div onClick={() => {
                history.push("/login")
            }}>tologin</div>
            <div onClick={() => {
                history.push("/home/test1")
            }}>/home/test1</div>
            <BrowserRouter>
                <Switch>
                    <Route path="/home" exact component={Test1} />
                    <Route path="/home/test1" component={Test1} />
                    <Route path="/home/test2" component={Test2} />
                </Switch>
            </BrowserRouter>
        </Layout>
    )
})
