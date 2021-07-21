/*
 * @Author: web_XL
 * @Date: 2021-07-14 10:57:14
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-15 09:41:48
 * @Description:
 */


import { Category } from "./category"

export interface Product {
  _id: string
  name: string
  price: number
  description: string
  category: Category
  quantity: number
  sold?: number
  photo: FormData
  shipping: boolean
  createdAt: string
}

export interface Price {
  id: number
  name: string
  array: [number?, number?]
}
