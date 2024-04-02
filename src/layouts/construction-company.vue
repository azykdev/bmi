<script setup>
import ConstructionLayoutWithVerticalNav from './components/ConstructionLayoutWithVerticalNav.vue'
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
