/*
 * @Author: web_XL
 * @Date: 2021-07-21 14:10:13
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-21 16:48:16
 * @Description:
 */
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from '../../components/Layout'
import Test1 from '../../components/Test1'
import Test2 from '../../components/Test2'
import { signUpAction } from '../../store/actions/auth.actions'

export default memo(function Home(props) {
  console.log("home props", props);
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
