/*
 * @Author: web_XL
 * @Date: 2021-07-14 11:09:42
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-16 10:19:53
 * @Description:
 */

import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { BASE_URL } from "../../config";
import { FilterProductActionType, FilterProductSuccessAction, FILTER_PRODUCT, GetProductActionType, getPRoductByIdActionType, getPRoductByIdSuccessAction, getProductSuccessAction, GET_PRODUCT, GET_PRODUCT_BY_ID, SearchProductActionType, searchProductSuccessAction, SEARCH_PRODUCT } from "../actions/product.actions";
import { Product } from "../models/product";

function* fetchProduct({ sortBy, limit, order }: GetProductActionType) {
  console.log("fetchProduc e");
  let result: {
    data: Product[]
  } = yield axios.get(`${BASE_URL}/products`, {
    params: {
      sortBy,
      limit,
      order
    }
  })

  yield put(getProductSuccessAction(sortBy, result.data))
}

// 搜索商品
function* searchProduct({ payload: { search, category } }: SearchProductActionType) {

  let result: {
    data: Product[]
  } = yield axios.get(`${BASE_URL}/products/search`, {
    params: {
      search,
      category
    }
  })

  yield put(searchProductSuccessAction(result.data))
}

// 筛选商品
function* filterProduct(actions: FilterProductActionType) {
  console.log("筛选商品 filterProduct 请求开始 sage1");
  let result: {
    data: {
      size: number;
      data: Product[];
    }
  } = yield axios.post(`${BASE_URL}/products/filter`, actions.payload)
  console.log("筛选商品 filterProduct 请求成功 sage2");

  yield put(FilterProductSuccessAction(result.data, actions.payload.skip))

  console.log("筛选商品 filterProduct  sage3");

}


function* getProductById(action: getPRoductByIdActionType) {
  const result: {
    data: Product
  } = yield axios.get(`${BASE_URL}/product/${action.payload.productId}`)
  yield put(getPRoductByIdSuccessAction(result.data))
}


export default function* productSaga() {
  console.log("productSaga");

  yield takeEvery(GET_PRODUCT, fetchProduct)
  yield takeEvery(SEARCH_PRODUCT, searchProduct)
  yield takeEvery(FILTER_PRODUCT, filterProduct)
  yield takeEvery(GET_PRODUCT_BY_ID, getProductById)
}

