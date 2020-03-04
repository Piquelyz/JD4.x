import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    cartArray:[], // 存储购物车商品的数组
  },
  mutations: {
    // 设置 vuex 的 token
    settoken(state, token) {
      state.token = token
    },

    // 添加商品到购物车
    toCart(state, tag) {
      let goods= state.cartArray.find(v=> v.title == tag.label) 
        if(goods) {
          goods.cartCount += 1
        } else {
          state.cartArray.push({title: tag.label, cartCount: 1})
        }
      
    }
  },
  actions: {
  },
  modules: {
  },

  // 相当于 vue 中的计算属性
  getters: {
    countSum: state=>{
      let num = 0
      state.cartArray.forEach(v=>{
        num += v.cartCount
      })
      return num
    }
  }
})
