<template>
  <div class="Category">
    <div class="left-nav">
      <p v-for="(item, index) in title"
        :class="{active: index === currentIndex}" 
        @click="itemClick(index)">
        {{item.title}}
      </p>
    </div>
    <div class="right-nav">
      <child-cate-list v-for="item in cateItems" :cate-item="item">
        {{item}}
      </child-cate-list>
    </div>
  </div>
</template>

<script>
  import childCateList from './childCateList.vue'
  export default {
    name: "childCate",
    components: {
      childCateList
    },
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      },
      cateItems: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('itemClick',index)
      }
    }
  }
</script>

<style scoped>
  .Category {
    display: flex;
  }
  .left-nav{
    flex-basis: 25%;
    background-color: #f6f6f6;
    flex-wrap: wrap;
  }
  .left-nav p{
    display: block;
    height: 12vw;
    line-height: 12vw;
    text-align: center;
  }
  .right-nav {
    display: flex;
    flex-basis: 75%;
    flex-wrap: wrap;
  }

  .active {
    color: var(--color-high-text);
    border-left: 3px solid var(--color-tint);
    font-weight: 700;
  }
  
</style>
