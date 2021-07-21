/*
 * @Author: web_XL
 * @Date: 2021-07-21 13:20:03
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-21 16:09:48
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'
import store from './store'
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root')
);

