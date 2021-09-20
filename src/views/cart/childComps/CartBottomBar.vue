<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button 
              :is-checked="isSelectAll" 
              class="check-button"
              @click.native="checkClick"/>
      <span>全选</span>
      <div class="totalPrice">
      合计：{{totalPrice}}
      </div>
    </div>
    <div class="calculate" @click="calClick">
      去结算:({{checkLength}})件商品
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
 export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        if(this.$store.state.cartList.length === 0) return false
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick() {
        if(this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked =false)
        } else {
          this.$store.state.cartList.forEach(item => item.checked =true)
        }
      },
      calClick() {
        if(!this.$store.state.cartList.find(item => item.checked)) {
          this.$toast.show('请选择购买的商品', 2000)
          console.log('0');
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background-color: #eee;
    position: relative;
    display: flex;
    position: relative;
  }
  .check-button {
    width: 20px;
    height: 20px;
    margin: 10px 10px 5px 10px;
    line-height: 20px;
  }
  .check-content {
    display: flex;
    line-height: 40px;
  }
  .totalPrice {
    margin-left: 30px;
  }
  .calculate {
    position: absolute;
    right: 0;
    line-height: 40px;
    background-color: #ff8198;
    color: white;
    padding: 0 10px;
    }
</style>