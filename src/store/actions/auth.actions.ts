/*
 * @Author: web_XL
 * @Date: 2021-07-09 10:34:40
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-21 16:42:11
 * @Description:用户注册相关的 actions
 */

export const SIGNUP = "SIGNUP" // 注册(发起注册请求)
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS" // 注册成功
export const SIGNUP_FAILURE = "SIGNUP_FAILURE" // 注册失败
export const SIGNUP_RESET = "SIGNUP_RESET" // 重置


export interface SignupPayload {
  name: string
  password: string
  email: string
}

// ===action type===
export interface signUpActionType {
  type: typeof SIGNUP
  payload: SignupPayload
}

export interface signUpSuccessActionType {
  type: typeof SIGNUP_SUCCESS
}

export interface signUpFailActionType {
  type: typeof SIGNUP_FAILURE
  message: string
}

export interface signUpResetActionType {
  type: typeof SIGNUP_RESET
}
/**
 * 注册的action
 * @param payload 
 * @returns 
 */
export const signUpAction = (payload: SignupPayload): signUpActionType => ({
  type: SIGNUP,
  payload: payload
})

export const signUpSuccessAction = (): signUpSuccessActionType => ({
  type: SIGNUP_SUCCESS
})

export const signUpFailAction = (msg: string): signUpFailActionType => ({
  type: SIGNUP_FAILURE,
  message: msg
})


export const signUpResetAction = (): signUpResetActionType => ({
  type: SIGNUP_RESET
})


/**
 * 登录
 */
export const SIGNIN = "SIGNIN"// 登录
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"// 
export const SIGNIN_FAIL = "SIGNIN_FAIL"// 登录

export interface SigninPayload {
  email: string
  password: string
}

export interface signInActionType {
  type: typeof SIGNIN
  payload: SigninPayload
}

export interface signInSuccessActionType {
  type: typeof SIGNIN_SUCCESS
}

export interface signInFailActionType {
  type: typeof SIGNIN_FAIL
  message: string
}

export const signInAction = (payload: SigninPayload): signInActionType => ({
  type: SIGNIN,
  payload: payload
})

export const signInSuccessAction = (): signInSuccessActionType => ({
  type: SIGNIN_SUCCESS
})

export const signInFailAction = (message: string): signInFailActionType => ({
  type: SIGNIN_FAIL,
  message: message
})


// 申明一个联合类型
export type AuthUnionType =
  signUpActionType |
  signUpSuccessActionType |
  signUpFailActionType |
  signUpResetActionType |
  signInActionType |
  signInSuccessActionType |
  signInFailActionType