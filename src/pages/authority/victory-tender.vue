<template>
  <section
    id="victory-tenders"
    class="rounded-sm"
  >
    <div
      id="tenders-wrapper"
      class="p-5"
    >

      <div v-if="!vicTenders" class="w-full h-full flex justify-center items-center py-5">
        <v-progress-circular color="primary" indeterminate :size="43"></v-progress-circular>
      </div>

      <!-- Victory Tenders -->
      <VRow
        class="my-5"
        v-if="vicTenders"
      >
        <AuthorityVicTenderCard
          v-for="tender in vicTenders"
          :key="tender.id"
          :tender="tender"
        />
      </VRow>
    </div>
  </section>
</template>

<script>
  import AuthorityVicTenderCard from '@/components/cards/AuthorityVicTenderCard.vue'
  export default {
    name: 'VictoryTender',
    components: {
      AuthorityVicTenderCard
    },
    mounted() {
      this.$store.dispatch('authority/getVicTenders')
    },
    computed: {
      vicTenders() {
        return this.$store.state.authority.vicTenders
      }
    }
  }
</script>

<style scoped>

</style>
