<template>
  <div>
    <nav-bar class="cate-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <child-cate 
      :title="title" 
      class="child-cate"
      @itemClick="itemClick"
      ref="childCate"
      :cateItems="showPopular"/>
  </div>
 
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList'
  import childCate from './childComps/childCate.vue'
  import NavBar from 'components/common/navbar/NavBar'

  import { getCateGory,getPopular } from 'network/category'
  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
 export default {
    name: "Category",
    components: { 
      GoodsList,
      childCate,
      NavBar
    },
    data() {
      return {
        recommends: [],
        title: [],
        cateItems: {
          '3627': {list: []},
          '582': {list: []},
          '596': {list: []},
          '595': {list: []},
          '3627': {list: []},
          '582': {list: []},
          '596': {list: []},
          '595': {list: []},
          '598': {list: []},
          '597': {list: []},
          '599': {list: []},
          '600': {list: []},
          '5253': {list: []},
          '609': {list: []},
          '594': {list: []},
          '830': {list: []},
          '602': {list: []},
          '606': {list: []},
          '603': {list: []},
          '605': {list: []}
        },
        currentType: '3627'
      }
    },
    computed: {
      showPopular() {
        return this.cateItems[this.currentType].list
      }
    },
    created() {
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
      this.getCateGorydata()
      this.getPopular('3627')
      this.getPopular('582')
      this.getPopular('596')
      this.getPopular('595')
      this.getPopular('598')
      this.getPopular('597')
      this.getPopular('599')
      this.getPopular('600')
      this.getPopular('5253')
      this.getPopular('609')
      this.getPopular('594')
      this.getPopular('830')
      this.getPopular('602')
      this.getPopular('606')
      this.getPopular('603')
      this.getPopular('605')

    },
    methods: {
      // 获取分类项
      getCateGorydata() {
        getCateGory().then(res => {
          this.title = res.data.category.list
          // this.$nextTick(() => {
          //   this.getPopular(this.title[0].maitKey)
          // })
        })
      },
      getPopular(maitKey) {
        getPopular(maitKey).then(res => {
          this.cateItems[maitKey].list.push(...res.data.list)
        })
      },
      itemClick(index) {
        switch(index) {
          case 0: this.currentType = '3627'
          break
          case 1: this.currentType = '582'
          break
          case 2: this.currentType = '596'
          break
          case 3: this.currentType = '595'
          break
          case 4: this.currentType = '598'
          break
          case 5: this.currentType = '597'
          break
          case 6: this.currentType = '599'
          break
          case 7: this.currentType = '600'
          break
          case 8: this.currentType = '5253'
          break
          case 9: this.currentType = '609'
          break
          case 10: this.currentType = '594'
          break
          case 11: this.currentType = '830'
          break
          case 12: this.currentType = '602'
          break
          case 13: this.currentType = '606'
          break
          case 14: this.currentType = '603'
          break
          case 15: this.currentType = '605'
          break
        }
        console.log(this.currentType)
        this.$refs.childCate.currentType = index
      }
    }
  }
</script>

<style scoped>
  .cate-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .child-cate {
    margin-top: 45px;
  }
</style>



