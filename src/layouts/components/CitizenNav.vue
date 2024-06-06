<template>
  <nav class="citizen-nav p-3">
    <div id="wrapper" class="max-w-screen-lg mx-auto flex justify-between items-center">
      <!-- logo -->
      <div class="logo flex items-center">
        <img
          src="@/assets/images/logo.png"
          alt=""
          width="50px"
        />
        <span class="logo-text ml-2 text-2xl font-semibold text-slate-800">Selling House</span>
      </div>

      <!-- user -->
      <div v-if="currentUser">
        <span class="font-semibold text-slate-800">{{ currentUser?.username }}</span>
        <a @click="logout" class="ml-4 text-slate-800 cursor-pointer">Logout <span class="mdi mdi-logout"></span></a>
      </div>

      <!-- menu -->
      <div v-else>
        <RouterLink :to="{ name: 'user-login'}" >Login</RouterLink>
        <span class="mx-4 ">|</span>
        <RouterLink to="/register">Register</RouterLink>
      </div>

    </div>
  </nav>
  <slot />
</template>

<script>
  export default {
    name: 'CitizenNav',

    methods: {
      logout() {
        this.$store.commit('users/logout')
        this.$router.push({ name: 'user-login' })
      },
    },

    mounted() {},

    computed: {
      currentUser() {
        return this.$store.state.users.user
      }
    },
  }
</script>

<style scoped>

</style>
