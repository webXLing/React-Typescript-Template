import { Category } from "../models/category"

/*
 * @Author: web_XL
 * @Date: 2021-07-13 13:27:46
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-13 13:35:13
 * @Description: 添加分类
 */
export const GET_CATEGORY = "GET_CATEGORY" //获取分类
export const SET_CATEGORY = "SET_CATEGORY" //设置分类



interface getCategoryActionType {
  type: typeof GET_CATEGORY
}

interface setCategoryActionType {
  type: typeof SET_CATEGORY
  payload: Category[]
}

export const getCategoryAction = (): getCategoryActionType => ({
  type: GET_CATEGORY
})


export const setCategoryAction = (payload: Category[]): setCategoryActionType => ({
  type: SET_CATEGORY,
  payload
})



export type CategoryUnionType = getCategoryActionType | setCategoryActionType