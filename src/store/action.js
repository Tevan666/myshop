export default {
  addCart(context, payload) {
    // let oldProduct = null
    // for(let item of state.cartList) {
    //   if(item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // 查找之前数组中是否有该商品
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(function(item) {
        return item.iid ===payload.iid
      })
      if(oldProduct) {
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量+1')
      }else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart', payload)
        resolve('已添加至购物车')
      }
    })
  }
}