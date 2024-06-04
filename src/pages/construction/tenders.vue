<template>
  <div
    v-if="!tenders"
    class="w-full h-full flex justify-center items-center py-5"
  >
    <v-progress-circular
      color="primary"
      indeterminate
      :size="43"
    ></v-progress-circular>
  </div>
  <div>
    <!-- Tenders -->
    <VRow
      id="tenders"
      v-if="tenders"
    >
      <ConstructionTenderCard
        v-if="tenders && constructionCompany"
        v-for="tender in tenders"
        :key="tender.id"
        :tender="tender"
        :constructionCompany="constructionCompany"
      />
    </VRow>
  </div>
</template>

<script>
import ConstructionTenderCard from '@/components/cards/ConstructionTenderCard.vue'

export default {
  computed: {
    tenders() {
      return this.$store.state.authority.tenders
    },
    constructionCompany() {
      return this.$store.state.construction.constructionCompany
    },
  },
  mounted() {
    this.$store.dispatch('authority/getTenders')
    // this.$store.dispatch('construction/getConstructionCompany')
  },
  components: {
    ConstructionTenderCard,
  },
}
</script>

<style scoped></style>
