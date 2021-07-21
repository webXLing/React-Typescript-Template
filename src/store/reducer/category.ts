/*
 * @Author: web_XL
 * @Date: 2021-07-13 13:35:34
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-13 14:08:33
 * @Description:
 */
import { Category } from '../models/category';
import { CategoryUnionType, GET_CATEGORY, SET_CATEGORY } from './../actions/category.actions'


export interface CategoryState {
  loaded: boolean
  success: boolean
  result: Category[]
}

const initialState: CategoryState = {
  loaded: false,
  success: false,
  result: []
}

export default function CategoryReducer(state = initialState, actions: CategoryUnionType) {
  switch (actions.type) {
    case GET_CATEGORY:
      return {
        ...state,
        loaded: false,
        success: false,
        result: []
      }

    case SET_CATEGORY:
      return {
        ...state,
        loaded: true,
        success: true,
        result: actions.payload
      }
    default:
      return state
  }
}