<template>
<div id="app">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">MuStore</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="d-flex justify-content-end">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/MainPage">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/CartPage">Cart</a>
              <a class="nav-item nav-link" v-on:click.prevent="logout()">Logout</a>
            </div>
          </div>
        </div>
      </nav>
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
      this.$store.commit('set_login', false)
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$store.commit('set_login', true)
    }
  }
}
</script>
