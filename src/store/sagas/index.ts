/*
 * @Author: web_XL
 * @Date: 2021-07-09 11:04:16
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-14 11:23:18
 * @Description:合并
 */
import { all } from 'redux-saga/effects'
import authSaga from './auth.sagas'
import categorySaga from './category.sagas'
import productSaga from './product.sagas'


export default function* rootSagas() {
  yield all([authSaga(), categorySaga(), productSaga()])
}

// import { all } from "redux-saga/effects"
// import authSaga from "./auth.saga"
// import categorySaga from "./category.saga"
// import productSaga from "./product.saga"

// export default function* rootSaga() {
//   yield all([authSaga(), categorySaga(), productSaga()])
// }
