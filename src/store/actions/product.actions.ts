/*
 * @Author: web_XL
 * @Date: 2021-07-14 10:51:18
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-16 10:01:11
 * @Description: 商品搜索相关
 */

import { Product } from "../models/product"

export const GET_PRODUCT = "GET_PRODUCT"
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"

export interface GetProductActionType {
  type: typeof GET_PRODUCT
  sortBy: string,
  order: string
  limit: number
}

interface GetProductSuccessActionType {
  type: typeof GET_PRODUCT_SUCCESS
  sortBy: string,
  payload: Product[]
}

/**
 * 发送请求
 * @param sortBy 
 * @param order 
 * @param limit 
 * @returns 
 */
export const getProductAction = (
  sortBy: string,
  order: string = "desc",
  limit: number = 10
): GetProductActionType => ({
  type: GET_PRODUCT,
  sortBy,
  order,
  limit
})


/**
 * 设置 payload
 * @param sortBy 
 * @param payload 
 * @returns 
 */
export const getProductSuccessAction = (
  sortBy: string,
  payload: Product[]
): GetProductSuccessActionType => ({
  type: GET_PRODUCT_SUCCESS,
  sortBy,
  payload
})


// =======搜索产品=======
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS"

export interface SearchProductActionType {
  type: typeof SEARCH_PRODUCT,
  payload: {
    category: string
    search: string
  }
}

export interface SearchProductActionSuccessType {
  type: typeof SEARCH_PRODUCT_SUCCESS,
  payload: Product[]
}

export const searchProductAction = (
  category: string,
  search: string
): SearchProductActionType => ({
  type: SEARCH_PRODUCT,
  payload: {
    category,
    search
  }
})

export const searchProductSuccessAction = (payload: Product[]): SearchProductActionSuccessType => ({
  type: SEARCH_PRODUCT_SUCCESS,
  payload
})



/**
 * 和筛选相关的action
 */

export const FILTER_PRODUCT = "FILTER_PRODUCT"
export const FILTER_PRODUCT_SUCCESS = "FILTER_PRODUCT_SUCCESS"

export interface FilterPayload {
  order?: string
  sortBy?: string
  limit?: number
  skip: number   // 分页的start
  filters?: {
    category: string[]
    price: number[]
  }
}

export interface FilterProductActionType {
  type: typeof FILTER_PRODUCT
  payload: FilterPayload
}

export interface FilterProductSuccessActionType {
  type: typeof FILTER_PRODUCT_SUCCESS
  payload: {
    size: number
    data: Product[]
  }
  skip: number // 分页的start
}

export const FilterProductAction = (payload: FilterPayload): FilterProductActionType => {
  console.log("FilterProductAction");
  return {
    type: FILTER_PRODUCT,
    payload
  }
}


export const FilterProductSuccessAction = (
  payload: {
    size: number,
    data: Product[]
  },
  skip: number
): FilterProductSuccessActionType => {
  console.log("FilterProductSuccessAction 1");
  return {
    type: FILTER_PRODUCT_SUCCESS,
    payload,
    skip
  }
}


// 通过id查询商品
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
export const GET_PRODUCT_BY_ID_SUCCESS = "GET_PRODUCT_BY_ID_SUCCESS"

export interface getPRoductByIdActionType {
  type: typeof GET_PRODUCT_BY_ID,
  payload: {
    productId: string
  }
}

export interface getPRoductByIdActionSuccessType {
  type: typeof GET_PRODUCT_BY_ID_SUCCESS
  payload: Product
}

export const getPRoductByIdAction = (productId: string): getPRoductByIdActionType => ({
  type: GET_PRODUCT_BY_ID,
  payload: {
    productId
  }
})

export const getPRoductByIdSuccessAction = (payload: Product) => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  payload
})

export type ProductUnionAction =
  GetProductActionType |
  GetProductSuccessActionType |
  SearchProductActionType |
  SearchProductActionSuccessType |
  FilterProductSuccessActionType |
  FilterProductActionType |
  getPRoductByIdActionType |
  getPRoductByIdActionSuccessType
