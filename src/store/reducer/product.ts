import { FILTER_PRODUCT, FILTER_PRODUCT_SUCCESS, GET_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCT_BY_ID_SUCCESS, GET_PRODUCT_SUCCESS, ProductUnionAction, SEARCH_PRODUCT_SUCCESS } from "../actions/product.actions";
import { Product } from "../models/product";

/*
 * @Author: web_XL
 * @Date: 2021-07-14 11:01:12
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-16 10:11:18
 * @Description: 
 */
export interface ProductState {
  createdAt: { // 最新上架
    loaded: boolean
    success: boolean
    products: Product[]
  }
  sold: { // 销量
    loaded: boolean
    success: boolean
    products: Product[]
  },
  search: Product[],
  filter: {
    success: boolean
    loaded: boolean,
    result: {
      size: number,// 此次分页请求数量
      data: Product[]
    }
  },
  detail: {
    loaded: boolean,
    success: boolean,
    product: Product
  }
}

const initialState: ProductState = {
  createdAt: { // 最新上架
    loaded: false,
    success: false,
    products: []
  },
  sold: { // 销量
    loaded: false,
    success: false,
    products: []
  },
  search: [],
  filter: {
    success: false,
    loaded: false,
    result: {
      size: 0,
      data: []
    }
  },

  detail: {
    loaded: false,
    success: false,
    product: {
      _id: "",
      name: "",
      price: 0,
      description: "",
      category: {
        _id: "",
        name: ""
      },
      quantity: 0,
      photo: null!,
      shipping: false,
      createdAt: ""
    }
  }
}
export default function productReducer(state = initialState, actions: ProductUnionAction
) {
  switch (actions.type) {
    case GET_PRODUCT://复位
      return {
        ...state,
        [actions.sortBy]: {
          ...state[actions.sortBy === "sold" ? "sold" : "createdAt"],//这个的不低是不清除老数据
          loaded: false,
          success: false
          // products: []
        }
      }

    case GET_PRODUCT_SUCCESS:// set field
      return {
        ...state,
        [actions.sortBy]: {
          loaded: true,
          success: true,
          products: actions.payload
        }
      }

    case SEARCH_PRODUCT_SUCCESS:// 搜索产品
      return {
        ...state,
        search: actions.payload
      }

    case FILTER_PRODUCT:// 筛选产品
      console.log("FILTER_PRODUCT--reducer");

      return {
        ...state,
        filter: {
          success: false,
          loaded: false,
          result: {
            size: 0,
            data: state.filter.result.data
          }
        }
      }

    case FILTER_PRODUCT_SUCCESS:// 筛选产品
      console.log("FILTER_PRODUCT_SUCCESS--reducer");
      let data = actions.skip === 0 ? actions.payload.data : [...state.filter.result.data, ...actions.payload.data]
      return {
        ...state,
        filter: {
          success: true,
          loaded: true,
          result: {
            size: actions.payload.size,
            data
          }
        }
      }

    case GET_PRODUCT_BY_ID:// 通过id获取商品详情
      console.log("GET_PRODUCT_BY_ID--reducer");

      return {
        ...state,
        detail: {
          loaded: false,
          success: false,
          product: {
            _id: "",
            name: "",
            price: 0,
            description: "",
            category: {
              _id: "",
              name: ""
            },
            quantity: 0,
            photo: null!,
            shipping: false,
            createdAt: ""
          }
        }
      }

    case GET_PRODUCT_BY_ID_SUCCESS:// 储存商品详情
      console.log("GET_PRODUCT_BY_ID_SUCCESS--reducer");
      return {
        ...state,
        detail: {
          loaded: true,
          success: true,
          product: actions.payload
        }
      }
    default:
      return state
  }
}