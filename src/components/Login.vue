<template>
<div>
    <v-container fluid>
        <p align="center" justify="center"> {{errorMessage}} </p>
        <v-container class="d-flex justify-center md-3">
            <h1>MuStore Login Page</h1>
        </v-container>
        <v-row align="center" justify="center" style="height: 300px;">
            <v-form @keyup.native.enter.prevent="login()">
                <v-text-field v-model="email" label="email" outlined clearable required></v-text-field>
                <v-text-field v-model="password" label="password" outlined required :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"></v-text-field>
                <v-btn color="success" @click.prevent="login()">Login</v-btn>
            </v-form>
        </v-row>
    </v-container>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      show: false,
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:3000/user/login', {
        email: this.email.toLowerCase(),
        password: this.password.toLowerCase()
      })
        .then(res => {
          if (res) {
            localStorage.setItem('token', res.token)
            this.$store.commit('set_login', true)
            this.$router.push('/MainPage')
          }
        })
        .catch(err => {
          this.errorMessage = err.response.data.message
        })
    }
  }
}
</script>

<style>

</style>
