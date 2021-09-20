<template>
    <div class="items" >
      <a :href="cateItem.link">
      <img :src="cateItem.image" alt="" class="popular" >
      <span>{{cateItem.title}}</span>
      </a>
    </div>
</template>

<script>
export default {
  name: 'childCateList',
  props: {
    popular: {
      type: Array,
      default() {
        return []
      }
    },
    cateItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .items {
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .items img{
    display: block;
    width: 75px;
    height: 75px;
    margin-top: 2vw;
  }
  .items span {
    margin-top: 4.6vw;
  }
</style>