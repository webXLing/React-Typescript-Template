/*
 * @Author: web_XL
 * @Date: 2021-07-12 13:44:41
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-12 15:44:37
 * @Description:
 */


interface User {
  email: string
  name: string
  role: number
  _id: string
}

export interface Jwt {
  token: string
  user: User
}