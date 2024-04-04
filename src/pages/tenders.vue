<template>
  <section
    id="tenders"
    class="rounded-sm"
  >
    <div
      id="tenders-wrapper"
      class="p-5"
    >
      <VBtn @click="$store.commit('authority/setNewTenderDialog', true)"> YANGI TENDER </VBtn>
      <AuthorityNewTenderDialog />

      <!-- Tenders -->
      <VRow
        class="my-5"
        v-if="tenders"
        id="tenders"
      >
        <TenderCard
          v-for="tender in tenders"
          :key="tender.id"
          :tender="tender"
        />
      </VRow>
    </div>
  </section>
</template>

<script>
import TenderCard from '@/components/cards/TenderCard.vue'
import AuthorityNewTenderDialog from '@/components/dialogs/AuthorityNewTenderDialog.vue'

export default {
  name: 'Tenders',
  components: {
    AuthorityNewTenderDialog,
  },
  mounted() {
    this.$store.dispatch('authority/getTenders', false)
  },
  computed: {
    tenders() {
      return this.$store.state.authority.tenders
    },
  },
}
</script>

<style scoped></style>
