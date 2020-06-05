<template>
  <div>
    <div class="d-flex justify-content-center">
        <p>{{errorMsg}}</p>
    </div>
    <br>
    <div class="row justify-content-between">
        <div class="column lg-2" v-for="item in cart" :key="item.id">
            <div class="card" style="width: 20rem;">
                <img :src="item.Product.img_url" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{item.Product.name}}</h5>
                    <p>Quantity: {{item.quantity}} </p>
                    <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#ModalAddToCart" data-dismiss="modal" aria-label="close" v-on:click.prevent="getItemDetail(item)">Update Cart</button> |
                    <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#ModalAddToCart" data-dismiss="modal" aria-label="close" v-on:click.prevent="">Delete Cart</button>
                </div>
            </div>
        </div>
    </div>
  <!--  -->
  </div>
</template>

<script>
import axios from 'axios'
const baseUrl = 'http://localhost:3000'

export default {
  name: 'Cart',
  data () {
    return {
      errorMsg: '',
      cart: [],
      cartId: null,
      productId: null,
      Product: []
    }
  },
  methods: {
    fetchCart () {
      axios({
        method: 'get',
        url: baseUrl + '/cart',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          console.log(response.data.Cart)
          this.cart = response.data.Cart
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getItemDetail (data) {
      this.cartId = data.id
      this.productId = data.productId
      this.Product = data.Product
    },
    deleteCart () {
      axios({
        method: 'delete',
        url: baseUrl + '/cart' + this.cartId,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          this.fetchCart()
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  computed: {
    setCurrentUser () {
      return this.$store.state.currentUser
    }
  },
  created () {
    this.fetchCart()
    this.$store.commit('set_login', true)
  }
}
</script>

<style>

</style>
