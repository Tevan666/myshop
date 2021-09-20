<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>

    <cart-list/>

    <cart-bottom-bar/>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import NavBar from 'components/common/navbar/NavBar'
  
  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'


  import { mapGetters } from 'vuex'
 export default {
      name: "Cart",
      components: {
        NavBar,
        CartList,
        Scroll,
        CartBottomBar
      },
      computed: {
        ...mapGetters({
          length: 'cartLength'
        })
      }
    }
</script>

<style scoped>
  .cart {
    height: 100vh;
    /* position: relative; */
    z-index: 9;
    background-color: #fff;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
</style>
