<template>
 <div id="index">
    <cube-slide ref="slide" :data="items" @change="changePage">
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img class="banner" :src="item.image">
          </a>
        </cube-slide-item>
      </cube-slide>
 </div>

</template>

<script>
    export default {
        data() {
            return {
                items: [

            ]
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },

  async created() {
    try {
        //获取轮播图数据
        const items = await this.$http.get('/api/banner')
        this.items = items.data

    } catch(err) {
        console.log(err)
    }
  }
}

</script>

<sytle lang= "stylus" scoped>
    #index
        a 
            .banner
                display block
                heigth 175px
                weight 80%

</sytle> 