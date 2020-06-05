<template>
<div>
  <Cart/>
</div>
</template>

<script>
import Cart from '../components/Cart.vue'

export default {
  name: 'CartPage',
  components: {
    Cart
  },
  created () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
