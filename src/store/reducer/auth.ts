/*
 * @Author: web_XL
 * @Date: 2021-07-09 13:13:20
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-14 11:22:23
 * @Description:
 */
import {
  AuthUnionType,
  SIGNIN,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_RESET,
  SIGNUP_SUCCESS
} from "../actions/auth.actions";

export type AuthState = {
  signup: {
    loaded: boolean,
    success: boolean,
    message: string
  },
  signin: {
    loaded: boolean,
    success: boolean,
    message: string
  }
}

const initialState: AuthState = {
  signup: { // 注册
    loaded: false, // 是否已经请求了
    success: false, // 请求成功
    message: ""  // 失败内容
  },
  signin: {
    loaded: false,
    success: false,
    message: ""
  }
}



function AuthReducer(state = initialState, action: AuthUnionType) {
  // console.log("AuthReducer", action);
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
          message: ""
        }
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loaded: true,
          success: true,
          message: ""
        }
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup: {
          loaded: true,
          success: false,
          message: action.message
        }
      }

    case SIGNUP_RESET:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false,
          message: ""
        }
      }


    // ====登录====
    case SIGNIN:
      return {
        ...state,
        signin: {
          loaded: false,
          success: false,
          message: ""
        }
      }
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signin: {
          loaded: true,
          success: true,
          message: ""
        }
      }
    case SIGNIN_FAIL:
      return {
        ...state,
        signin: {
          loaded: true,
          success: false,
          message: action.message
        }
      }
    default:
      return state
  }
}

export default AuthReducer