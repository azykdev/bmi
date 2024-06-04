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

      <div v-if="!tenders" class="w-full h-full flex justify-center items-center py-5">
        <v-progress-circular color="primary" indeterminate :size="43"></v-progress-circular>
      </div>

      <!-- Tenders -->
      <VRow
        class="my-5"
        v-if="tenders"
      >
        <AuthorityTenderCard
          v-for="tender in tenders"
          :key="tender.id"
          :tender="tender"
        />
      </VRow>
    </div>
  </section>
</template>

<script>
import AuthorityTenderCard from '@/components/cards/AuthorityTenderCard.vue'
import AuthorityNewTenderDialog from '@/components/dialogs/AuthorityNewTenderDialog.vue'

export default {
  name: 'Tenders',
  components: {
    AuthorityNewTenderDialog,
    AuthorityTenderCard,
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
