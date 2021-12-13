import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 获取推荐模块数据
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

// 创建一个 GoodsInfo 类
// export class GoodsInfo{
//   // 创建一个构造函数
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
// }

// // new 一个 p 实例
// const p = new personalbar('why',18)

/**
 * 数据整合  面向对象编程
 */
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.columns = columns
    this.discount = itemInfo.discountDesc
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 当创建 g 对象时
// const g = new Goods()
//   // 可以得到以下数据
// g.title
// g.desc
// g.newPrice

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class itemParam {
  constructor(info, rule) {
    // 注：images可能没有值，某些商品有值，某些没有值
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}