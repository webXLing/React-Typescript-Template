/*
 * @Author: web_XL
 * @Date: 2021-07-08 13:44:53
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-08 13:51:21
 * @Description: 配置ajax BASE_URL
 */
export let BASE_URL: string;

if (process.env.NODE_ENV === 'production') {
  // 相当于 as string 断言
  BASE_URL = process.env.REACT_APP_PRODUCTION_API_URL!
} else if (process.env.NODE_ENV === 'development') {
  BASE_URL = process.env.REACT_APP_DEVLOPMENT_API_URL!
}
