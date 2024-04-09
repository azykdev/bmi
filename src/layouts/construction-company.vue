<script setup>
import { onMounted } from 'vue';
import ConstructionLayoutWithVerticalNav from './components/ConstructionLayoutWithVerticalNav.vue';
import { useStore } from 'vuex';
import { getItem } from '@/helpers/persistaneStorage';

const store = useStore()

// MOUNTED
onMounted(() => {
  store.dispatch('construction/getConstructionCompany', getItem('id'))
})
</script>

<template>
  <ConstructionLayoutWithVerticalNav>
    <RouterView />
  </ConstructionLayoutWithVerticalNav>
</template>

<style lang="scss">
// As we are using `layouts` plugin we need its styles to be imported
@use "@layouts/styles/default-layout";
</style>
