<template>
  <VCol cols="12">
    <VCard>
      <VCardTitle class="border-b mb-2 text-violet-50 bg-violet-500">{{ tender.name }}</VCardTitle>

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
          <VCol cols="12">
            <h6>Ishtirokchilar:</h6>
            <ul
              v-if="tender.participants.length > 0"
              class="text-blue-400"
            >
              <li
                v-for="item in tender.participants"
                :key="item"
              >
                — {{ item.name }}
              </li>
            </ul>
            <p v-else>---</p>
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="primary"
          variant="tonal"
          append-icon="mdi mdi-arrow-right"
          :to="`/tenders/${tender.id}`"
        >
          Batafsil
        </VBtn>
        <VBtn
          v-if="hasItem === false"
          color="success"
          variant="tonal"
          @click="attendTenderParticipants(tender.id)"
        >
          Qatnashish
        </VBtn>
        <VBtn
          v-else
          color="error"
          variant="tonal"
          @click="cancelTenderParticipants(tender.id)"
        >
          Bekor qilish
        </VBtn>
      </VCardActions>
    </VCard>
  </VCol>
</template>

<script>
export default {
  name: 'ConstructionTenderCard',
  data() {
    return {
      hasItem: false,
    }
  },
  props: {
    tender: {
      type: Object,
      required: true,
    },
    constructionCompany: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    if (this.constructionCompany) {
      this.tender.participants.forEach(item => {
        if (item.id === this.constructionCompany.id) {
          this.hasItem = true
        }
      })
    }
  },
  methods: {
    attendTenderParticipants(id) {
      const newData = {
        ...this.tender,
        participants: [...this.tender.participants, this.constructionCompany],
      }
      this.$store.dispatch('authority/attendTenderParticipants', newData).then(() => {
        this.$store.dispatch('authority/getTenders')
      })
    },
    cancelTenderParticipants(data) {
      const newData = {
        ...this.tender,
        participants: this.tender.participants.filter(item => item.id !== this.constructionCompany.id),
      }
      this.$store.dispatch('authority/cancelTenderParticipants', newData).then(() => {
        this.$store.dispatch('authority/getTenders')
      })
    },
  },
}
</script>

<style scoped></style>
