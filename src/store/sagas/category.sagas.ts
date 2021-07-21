/*
 * @Author: web_XL
 * @Date: 2021-07-13 13:44:09
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-14 11:36:44
 * @Description:
 */
import { takeEvery, put } from 'redux-saga/effects'
import { GET_CATEGORY, setCategoryAction } from '../actions/category.actions'
import axios from 'axios'
import { Category } from '../models/category';
import { BASE_URL } from '../../config';

function* fetchCategory() {
  console.log("fetchCategory");
  try {
    const res: {
      data: Category[]
    } = yield axios.get(`${BASE_URL}/categories`)
    yield put(setCategoryAction(res.data))
  } catch (error) {
    console.log("fetchCategory error", error.response.data.error);
  }
}


export default function* categorySaga() {
  yield takeEvery(GET_CATEGORY, fetchCategory)
}