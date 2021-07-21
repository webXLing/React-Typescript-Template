/*
 * @Author: web_XL
 * @Date: 2021-06-14 15:46:51
 * @LastEditors: web_XL
 * @LastEditTime: 2021-07-21 16:38:41
 * @Description: 
 */
import request from '../request'



export function getTopBanners () {
  return request({
    url: "/banner"
  })
}
export function getTestApi () {
  return request({
    method: 'post',
    url: '/banner',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
}

// 热门推荐
export function getHotRecommends (limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 首页下的新碟上架
export function getNewAlbums (limit) {
  return request({
    url: '/album/newest',
    params: {
      limit
    }
  })
}

// 入驻歌手
export function getSettleSinger (limit) {
  return request({
    url: '/artist/list',
    params: {
      limit
    }
  })
}

// 榜单
export function getToplistDetail (id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}