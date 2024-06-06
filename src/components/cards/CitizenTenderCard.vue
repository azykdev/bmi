<template>
  <VCard class="mb-4">
    <VCardTitle class="border-b mb-2 text-violet-600">{{ tender.name }}</VCardTitle>

    <VCardText>
      <VRow>
        <VCol
          cols="12"
          md="6"
          lg="4"
        >
          <h6>Manzil:</h6>
          <p class="text-blue-400">{{ tender.adress }}</p>
        </VCol>
        <VCol
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <h6>Maydoni:</h6>
          <p class="text-blue-400">{{ tender.area }} m<sup>2</sup></p>
        </VCol>
        <VCol
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <h6>Mablag' turi:</h6>
          <p class="text-blue-400">{{ tender.fundsType }}</p>
        </VCol>
        <VCol
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <h6>Buyurtmachi:</h6>
          <p class="text-blue-400">{{ tender.customer }}</p>
        </VCol>
        <VCol
          cols="6"
          sm="4"
          md="3"
          lg="2"
        >
          <h6>Qurilish turi:</h6>
          <p class="text-blue-400">{{ tender.constructionType }}</p>
        </VCol>
        <VCol
          cols="12"
          sm="8"
          md="6"
          lg="4"
        >
          <h6>
            E'lon qilingan sanasi: <span class="text-blue-400">{{ tender.createdAt }}</span>
          </h6>
          <h6>
            Muddati: <span class="text-blue-400">{{ tender.lifetime }}</span>
          </h6>
        </VCol>
        <VCol
          cols="12"
          lg="8"
        >
          <h6>Qurilish shartlari:</h6>
          <ul class="text-blue-400">
            <li
              v-for="item in tender.constructionConditions"
              :key="item"
            >
              — {{ item }}
            </li>
          </ul>
        </VCol>
        
      </VRow>
    </VCardText>

    <VCardActions>
      <VSpacer />
      <VBtn
        color="primary"
        variant="tonal"
        prepend-icon="mdi mdi-eye-arrow-right"
        @click="getEditData(tender.id)"
      >
      Batafsil
      </VBtn>
      
    </VCardActions>
  </VCard>
</template>

<script>
export default {
  name: 'CitizenTenderCard',

  props: {
    tender: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
