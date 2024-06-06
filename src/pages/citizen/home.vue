<template>
  <section
    id="citizen-home"
    class="p-3"
  >
    <div
      id="citizen-home-wrapper"
      class="lg:max-w-screen-lg md:max-w-screen-md mx-auto"
      v-if="vicTenders"
    >
      <CitizenTenderCard v-for="tender in vicTenders" :key="tender.id" :tender="tender" />
    </div>
  </section>
</template>

<script>
import CitizenTenderCard from '@/components/cards/CitizenTenderCard.vue'
export default {
  name: 'Citizen',
  components: {
    CitizenTenderCard,
  },
  mounted() {
    this.$store.dispatch('authority/getVicTenders')
  },
  computed: {
    vicTenders() {
      return this.$store.state.authority.vicTenders
    },
  },
  methods: {},
}
</script>

<style scoped></style>
