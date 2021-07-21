/*
 * @Author: web_XL
 * @Date: 2021-07-09 10:47:57
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-21 16:40:52
 * @Description:用户注册相关的saga
 */
import { takeEvery, put, takeLatest } from 'redux-saga/effects'
import {
  SIGNUP,
  signUpActionType,
  signUpSuccessAction,
  signUpFailAction,
  signInActionType,
  signInSuccessAction,
  signInFailAction,
  SIGNIN
} from '../actions/auth.actions'
import axios from 'axios'
import {
  BASE_URL as API
} from './../../config'
import { Jwt } from '../models/auth';
import { getTestApi } from '../../service/api/recommend';


export interface signInApi {
  data: Jwt
}


// 注册
function* fetchSignUp(action: signUpActionType) {
  console.log("fetchSignUp 注册----------------", action);
  // put 相当于dispatch
  try {
    // yield axios.post(`${API}/signup`, action.payload)
    yield getTestApi()
    yield put(signUpSuccessAction())
  } catch (error) {
    yield put(signUpFailAction(error.response.data.error))
  }
}


// 登录
function* fetchSignIn(action: signInActionType) {
  console.log("fetchSignIn 登录----------------", action);
  // put 相当于dispatch
  try {
    let response: signInApi = yield axios.post(`${API}/signin`, action.payload)
    console.log(response, "signin========");
    localStorage.setItem("jwt", JSON.stringify(response.data))
    yield put(signInSuccessAction())
  } catch (error) {
    yield put(signInFailAction(error.response.data.error))
  }
}


export default function* authSaga() {
  yield takeEvery(SIGNUP, fetchSignUp)
  yield takeLatest(SIGNIN, fetchSignIn)
}