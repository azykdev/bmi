<template>
  <div>
    <!-- Tenders -->
    <VRow
      id="tenders"
      v-if="tenders"
    >
      <VCol
        cols="12"
        v-for="item in tenders"
        :key="item"
      >
        <VCard>
          <VCardTitle class="border-b mb-2 text-violet-600">Construction Tender</VCardTitle>

          <VCardText>
            <VRow>
              <VCol
                cols="12"
                md="6"
                lg="4"
              >
                <h6>Manzil:</h6>
                <p class="text-blue-400">{{ item.adress }}</p>
              </VCol>
              <VCol
                cols="6"
                sm="4"
                md="3"
                lg="2"
              >
                <h6>Maydoni:</h6>
                <p class="text-blue-400">{{ item.area }} m<sup>2</sup></p>
              </VCol>
              <VCol
                cols="6"
                sm="4"
                md="3"
                lg="2"
              >
                <h6>Mablag' turi:</h6>
                <p class="text-blue-400">{{ item.fundsType }}</p>
              </VCol>
              <VCol
                cols="6"
                sm="4"
                md="3"
                lg="2"
              >
                <h6>Buyurtmachi:</h6>
                <p class="text-blue-400">{{ item.customer }}</p>
              </VCol>
              <VCol
                cols="6"
                sm="4"
                md="3"
                lg="2"
              >
                <h6>Qurilish turi:</h6>
                <p class="text-blue-400">{{ item.constructionType }}</p>
              </VCol>
              <VCol
                cols="12"
                sm="8"
                md="6"
                lg="4"
              >
                <h6>E'lon qilingan sanasi: <span class="text-blue-400">{{ item.createdAt }}</span></h6>
                <h6>Muddati: <span class="text-blue-400">{{ item.lifetime }}</span></h6>
              </VCol>
              <VCol
                cols="12"
                lg="8"
              >
                <h6>Qurilish shartlari: </h6>
                <ul class="text-blue-400">
                  <li v-for="item in item.constructionConditions" :key="item">— {{ item }}</li>
                </ul>
              </VCol>
            </VRow>
          </VCardText>

          <VCardActions>
            <VSpacer />
            <VBtn
              color="primary"
              variant="tonal"
              append-icon="mdi mdi-arrow-right"
            >
              Batasil
            </VBtn>
            <VBtn
              color="success"
              variant="tonal"
              append-icon="mdi mdi-plus"
              :to="`/tenders/${item.id}`"
            >
              Qatnashish
            </VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script>
export default {
  computed: {
    tenders() {
      return this.$store.state.authority.tenders
    },
  },
  mounted() {
    this.$store.dispatch('authority/getTenders')
  },
}
</script>

<style scoped></style>
