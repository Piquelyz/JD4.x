<template>
    <div class="panelsbox">
        <cube-scroll class="leftpanels">
            <ul>
                <li v-for="(list, index) in tabslabel" @click='selectlist(index)' :class="list.active? 'active': ''" :key="index">
                    {{list.label}}
                </li>
            </ul>
      </cube-scroll>

      <cube-scroll class="rightpanels">
            <ul>
                <li v-for="(tag,index) in tags" :key="index">
                    <img :src="tag.image" alt="">
                    <p>{{tag.label}} <i class="cubeic-add" @click="addToCart($event, tag)"></i></p>
                </li>
            </ul>
      </cube-scroll>
      <div class="ball-wrap">
          <transition
            @before-enter="beforeEnter" 
            @enter="enter" 
            @afterEnter="afterEnter" 
          >
            <div class="ball" v-if="ball.show">
                <div class="inner">
                    <i class="cubeic-add"></i>
                </div>

            </div>
          </transition>
      </div>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                ball: {
                    show: false,
                    el: ''
                },
                tags:[],
                tabslabel: [
                    {
                        label: ' 推荐分类',
                        active: true
                    },
                    {
                        label: ' 京东超市',
                        active:  false
                    },
                    {
                        label: ' 国际名牌',
                        active: false
                    },
                    {
                        label: ' 奢侈品',
                        active: false
                    },
                    {
                        label: ' 京东国际',
                        active: false
                    },
                    {
                        label: ' 唯品会',
                        active:  false
                    },
                    {
                        label: ' 男装',
                        active: false
                    },
                    {
                        label: ' 女装',
                        active: false
                    },
                    {
                        label: ' 京东超市',
                        active:  false
                    },
                    {
                        label: ' 国际名牌',
                        active: false
                    },
                    {
                        label: ' 奢侈品',
                        active: false
                    },
                    {
                        label: ' 京东国际',
                        active: false
                    },
                    {
                        label: ' 唯品会',
                        active:  false
                    },
                    {
                        label: ' 男装',
                        active: false
                    },
                    {
                        label: ' 女装',
                        active: false
                    },
                    {
                        label: ' 男鞋',
                        active: false
                    }
                ]
            }
        },
        methods: {
            //点击左侧分类
            selectlist(index) {
                this.tabslabel.forEach((val, ind) => {
                    if(index == ind) {
                        val.active = true
                    } else {
                        val.active = false
                    }
                })
                this.getclassify(index)
            },
            //获取分类
            async getclassify(index) {
                const result = await this.$http.get('/api/classify', {params:{type:index}})
                this.tags = result.data
            },
            //添加商品到购物车,存储到 vuex
            addToCart(e,tag) {
                this.$store.commit('toCart', tag)
                //让我们小球显示出来
                this.ball.show = true
                //获取点击元素
                this.ball.el = e.target
            },
            beforeEnter(el) {
                //让小球移动到点击的位置
                //获取点击位置
                const dom = this.ball.el
                console.log(dom)
                const rect = dom.getBoundingClientRect() //获取点击 dom 的位置
                console.log(rect)
                const x = rect.left - window.innerWidth * 0.7
                const y = -(window.innerHeight - rect.top)
                console.log(x, y)
                el.style.display='block'
                el.style.transform= `translate3d(0, ${y}px, 0)` //因为要用到变量 所以用模板字符串
                const inner= el.querySelector('.inner')
                inner.style.transform= `translate3d(${x}px, 0, 0)`
            },
            enter(el, done) {
                //触发重绘
                document.body.offsetHeight
                //小球移动回到原点,就是购物车的位置
                el.style.transform= 'translate3d(0,0,0)'
                const inner= el.querySelector('.inner')
                inner.style.transform= 'translate3d(0,0,0)'
                //过度完成后执行的事件
                el.addEventListener('transitionend', done)

            },
            afterEnter(el) {
                //结束后隐藏小球
                this.ball.show= false
                el.style.display='none'
            }
        },
        created(){
            //获取默认的分类数据
            this.getclassify(0)
        },
        mounted() {
            //设置滚动盒子的高度
            const leftpanels = document.querySelector('.leftpanels')
            const rightpanels = document.querySelector('.rightpanels')
            //获取可视高度
            const bodyheight = document.documentElement.clientHeight
            leftpanels.style.height = bodyheight - 57 + 'px'
            rightpanels.style.height = bodyheight - 57 + 'px'
        },
    }
</script>

<style lang="stylus">
    .ball-wrap
        .ball
            position fixed
            left 70%
            bottom 10px
            z-index 1003
            color red 
            transition all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41)
            .inner 
                width 16px
                height 16px
                transition all 1s linear 
    .panelsbox
        display flex
        .leftpanels
            width 30%
            li 
                height 50px
                line-height 50px
                border-bottom 1px solid #ffffff
                color #333333
                background #f8f8f8
                font-size 14px
            .active
                background #ffffff
                color #e93b3d
        .rightpanels
            width 70%
            ul  
                display flex 
                flex-wrap wrap 
                li 
                    width 50%
                    justify-content center 
                    align-items center 
                    font-size 15px
                    img
                        width 80px
                        height 80px
                    .cubeic-add 
                        font-size 18px

</style>