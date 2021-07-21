/*
 * @Author: web_XL
 * @Date: 2021-07-08 14:37:23
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-14 11:09:28
 * @Description: 合并reducer
 */
import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history';
import testReduce from './test'
import authReducer, { AuthState } from './auth'
import categoryReducer, { CategoryState } from './category';
import productReducer, { ProductState } from './product';
// connected-react-router 是为了将router信息动态的存放在redux中 是的组件在props里面能拿到当前route的信息 


const createRootReducer = (history: History) => combineReducers({
  test: testReduce,
  router: connectRouter(history),
  auth: authReducer,
  category: categoryReducer,
  product: productReducer
})

export interface AppState {
  router: RouterState,
  auth: AuthState,
  category: CategoryState,
  product: ProductState
}
export default createRootReducer