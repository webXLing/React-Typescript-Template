/*
 * @Author: web_XL
 * @Date: 2021-07-08 14:36:40
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-21 16:12:36
 * @Description:
 */

import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension"
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
// import reducer from './reducer'
import createRootReducer from './reducer'
import rootSagas from './sagas'

export const history = createBrowserHistory()

// createSagaMiddleware 是一个函数 创建一个中间件
const SagaMiddleware = createSagaMiddleware()

const applyFn = applyMiddleware(routerMiddleware(history), SagaMiddleware)
const enhancers = process.env.NODE_ENV === "development" ? composeWithDevTools(applyFn) : applyFn

// 创建store 传入reducer
// createStore 第一个参数是reducer 第二个参数是enhancer 增强器
const store = createStore(
  createRootReducer(history),
  enhancers
  // composeWithDevTools(applyMiddleware(routerMiddleware(history), SagaMiddleware))
)

SagaMiddleware.run(rootSagas)

export default store