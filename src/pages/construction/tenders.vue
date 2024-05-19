<template>
  <div>
    <!-- Tenders -->
    <VRow
      id="tenders"
      v-if="tenders"
    >
     <ConstructionTenderCard v-if="tenders && constructionCompany" v-for="tender in tenders" :key="tender.id" :tender="tender" :constructionCompany="constructionCompany" />
    </VRow>
  </div>
</template>

<script>
import ConstructionTenderCard from '@/components/cards/ConstructionTenderCard.vue';

export default {
  computed: {
    tenders() {
      return this.$store.state.authority.tenders
    },
    constructionCompany() {
      return this.$store.state.construction.constructionCompany
    }
  },
  mounted() {
    this.$store.dispatch('authority/getTenders')
    // this.$store.dispatch('construction/getConstructionCompany')
  },
  components: {
    ConstructionTenderCard
  }
}
</script>

<style scoped></style>
