<template>
  <div id="home">
    <div id="home-wrapper">
      <HomeDialog />
      <HomeNavbar />
      <HomeHeader />
      <HomeMain />
    </div>
  </div>
</template>

<script setup>
import HomeNavbar from '@/views/pages/home/HomeNavbar.vue';
import HomeHeader from '@/views/pages/home/HomeHeader.vue';
import HomeMain from '@/views/pages/home/HomeMain.vue';
import HomeDialog from '@/components/dialogs/HomeDialog.vue';


</script>

<style scoped>
  
</style>

