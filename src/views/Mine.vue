<template>
    <div>
        <img class="headerimg" src="
        https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/element.png" alt="">
        <ul>
            <li class="mineitem" v-for="item in mineArray" @click="itemClick(item)" :key="item.label">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                mineArray: [
                    {
                        label: '商品收藏'
                    },
                    {
                        label: '我的足迹'
                    },
                    {
                        label: '店铺收藏'
                    },
                    {
                        label: '我的订单'
                    },
                    {
                        label: '退出',
                        type: 'exit'
                    },
                ]
            }
        },
        methods: {
            itemClick(item) {
                if(item.type == 'exit') {
                    //清除 vuex 中的 token 跳转至登陆页面
                    this.$store.commit('settoken', '')
                    localStorage.removeItem('token')
                    this.$router.push({path:'/login'})
                    
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .mineitem
        font-size 14px
        text-align :left
        height 50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eeeeee
        .minetitle
            display inline-block
            width 90%
    .headerimg
        height 150px
        width 100%
</style>