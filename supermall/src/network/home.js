/**
 * home数据的网络请求封装
 */

import { request } from "./request";

/**
 * 网络请求数据一
 */
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

/**
 * 网络请求 商品详情 数据
 */
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}