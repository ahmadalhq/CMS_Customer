<template>
  <v-app-bar color="blue-grey lighten-1" flat dense dark>
      <v-toolbar-title>MuStore</v-toolbar-title>
      <v-btn icon @click.prevent="">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click.prevent="">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon @click.prevent="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('set_login', false)
      this.$router.push('/')
    },
    getMainPage () {
      this.$router.push('/MainPage')
    }
  }
}
</script>

<style>

</style>
