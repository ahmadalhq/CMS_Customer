<template>
  <div>
    <div class="d-flex justify-content-center">
        <p>{{errorMsg}}</p>
    </div>
    <br>
    <div class="row justify-content-between">
        <div class="column lg-2" v-for="item in products" :key="item.id">
            <div class="card" style="width: 20rem;">
                <img :src="`${item.img_url}`" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">{{item.name}}</h5>
                    <label for="">Price : Rp {{item.price}} </label><br>
                    <label for="">Stock : {{item.stock}} </label><br>
                    <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#ModalAddToCart" data-dismiss="modal" aria-label="close" v-on:click.prevent="getItemDetail(item)">Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Add To Cart -->
    <div class="modal fade" id="ModalAddToCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
          <div class="modal-header">
              <h1 class="modal-title" id="exampleModalLabel">Add To Cart</h1>
              <p> {{errorMsg}} </p>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <form v-on:submit.prevent="addToCart()">
                <label>{{productName}}</label><br>
                <label for="">Rp {{productPrice}}</label><br>
                <label for="">Stock: {{productStock}}</label><br>
                <label for="Quantity">Quantity: </label><br>
                <input type="text" v-model="quantity">
              </form>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click.prevent="addToCart()">Add To Cart</button>
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
  name: 'Dashboard',
  data () {
    return {
      errorMsg: '',
      products: [],
      category: [],
      CategoryId: null,
      productId: null,
      productName: '',
      productImg: '',
      productPrice: null,
      productStock: null,
      ProductId: null,
      quantity: null
    }
  },
  methods: {
    fetchCategory () {
      axios({
        method: 'get',
        url: baseUrl + '/category',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          // console.log(response.data.Category)
          this.category = response.data.Category
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchData () {
      // console.log('masuk')
      axios({
        method: 'get',
        url: baseUrl + '/product',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(response => {
          // console.log(response.data.Products)
          this.products = response.data.Products
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addToCart () {
      axios({
        method: 'post',
        url: baseUrl + '/cart',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          ProductId: this.ProductId,
          quantity: this.quantity
        }
      })
        .then(response => {
          console.log(response)
          this.fetchData()
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    getItemDetail (data) {
      this.productId = data.id
      this.productName = data.name
      this.productImg = data.img_url
      this.productPrice = data.price
      this.productStock = data.stock
      this.CategoryId = data.CategoryId
      this.ProductId = data.id
    }
  },
  computed: {
    setCurrentUser () {
      return this.$store.state.currentUser
    }
  },
  created () {
    this.fetchData()
    this.fetchCategory()
    this.$store.commit('set_login', true)
  }
}
</script>

<style scoped>

</style>>
