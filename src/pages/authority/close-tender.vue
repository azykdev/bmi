<template>
  <section
    id="closed-tenders"
    class="rounded-sm"
  >
    <div
      id="tenders-wrapper"
      class="p-5"
    >

      <div v-if="!closedTenders" class="w-full h-full flex justify-center items-center py-5">
        <v-progress-circular color="primary" indeterminate :size="43"></v-progress-circular>
      </div>

      <!-- Closed Tenders -->
      <VRow
        class="my-5"
        v-if="closedTenders"
      >
        <AuthorityClosedTenderCard
          v-for="tender in closedTenders"
          :key="tender.id"
          :tender="tender"
        />
      </VRow>
    </div>
  </section>
</template>

<script>
  import AuthorityClosedTenderCard from '@/components/cards/AuthorityClosedTenderCard.vue'
  export default {
    name: 'CloseTender',
    components: {
      AuthorityClosedTenderCard
    },
    mounted() {
      this.$store.dispatch('authority/getTenders')
    },
    computed: {
      closedTenders() {
        return this.$store.getters['authority/getClosedTenders']
      }
    }
  }
</script>

<style scoped>

</style>
