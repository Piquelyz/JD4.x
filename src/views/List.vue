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
                    <p>{{tag.label}}</p>
                </li>
            </ul>
      </cube-scroll>
    </div>
</template>

<script>
    export default{
        data() {
            return {
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

<style lang="stylus" scoped>
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


</style>