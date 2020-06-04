<template>
  <v-app>
    <Navbar v-if="isLogin"/>
    <v-content class="mx-4">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
  }),
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>
