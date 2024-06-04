<template>
  <div
    v-if="!vicTenders"
    class="w-full h-full flex justify-center items-center py-5"
  >
    <v-progress-circular
      color="primary"
      indeterminate
      :size="43"
    ></v-progress-circular>
  </div>
  <VRow v-if="vicTenders">
    <ConstructionMyTendersCard
      v-for="item in vicTenders"
      :key="item.id"
      :tender="item"
      :constructionCompany="constructionCompany"
    />
  </VRow>
</template>

<script>
import ConstructionMyTendersCard from '@/components/cards/ConstructionMyTendersCard.vue'
export default {
  name: 'ConstructionMyTenders',
  components: {
    ConstructionMyTendersCard,
  },
  mounted() {
    this.$store.dispatch('authority/getVicTenders')
  },
  computed: {
    constructionCompany() {
      return this.$store.state.construction.constructionCompany
    },
    vicTenders() {
      return this.$store.state.authority.vicTenders
    },
  },

  methods: {},
}
</script>

<style scoped></style>
