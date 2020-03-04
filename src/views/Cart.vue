<template>
    <div>
        <div class='goods' v-for="(item, index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
        </div>
        <cube-button style="margin: 10px 0;">下单</cube-button>
        <cube-button @click="clearCart()">清空购物车</cube-button>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default{
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                cartarr: state => state.cartArray
            })
        },
        methods: {
            //减少商品, vuex 中数据在刷新页面后会消失, 需要用 localStorage 将数据持久化
            removeCart(index) {
                this.$store.commit('cartRemove', index)
            },
            //增加商品
            addCart(index) {
                this.$store.commit('cartAdd', index)
            },
            // 清空购物车 
            clearCart() {
                this.$store.commit('clearCart')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left
        .goodsright
            float :right
        i 
            font-sizw 18px
</style>