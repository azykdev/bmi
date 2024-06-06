<template>
  <CitizenNav>
    <RouterView />
  </CitizenNav>
</template>

<script setup>
import CitizenNav from '@/layouts/components/CitizenNav.vue'
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { getItem } from '@/helpers/persistaneStorage';

const store = useStore();

const getCurrentUser = () => {
  let user_id = getItem('user_id')

  if (user_id) {
    store.dispatch('users/getUser', user_id)
  }
}

onMounted(() => {
  // store.dispatch('users/getUsers')
  getCurrentUser()
})
</script>

