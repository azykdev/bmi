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
            <h6 class="mb-2">Ishtirokchilar:</h6>
            <ol
              type="1"
              v-if="tender.participants.length > 0"
            >
              <li
                v-for="(item, index) in tender.participants"
                :key="item"
                class="bg-blue-100 px-3 py-1 rounded-md mb-2"
              >
                <span class="font-bold">{{ index + 1 }}.</span> <span>{{ item.name }}</span>
              </li>
            </ol>
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
          @click="setDialog(true)"
        >
          Qatnashish
        </VBtn>
        <VBtn
          v-else
          color="error"
          variant="tonal"
          @click="cancelTenderParticipants"
        >
          Bekor qilish
        </VBtn>
      </VCardActions>
    </VCard>
  </VCol>

  <template>
    <div class="text-center pa-4 absolute">
      <v-dialog
        v-model="dialog"
        width="auto"
        persistent
      >
        <v-card
          prepend-icon="ri-auction-line"
          :title="tender.name + ' ga qatnashish'"
          class="w-[380px] sm:w-[600px] md:w-[1000px]"
        >
          <v-card-text class="max-h-[90vh] overflow-auto">
            <v-form>
              <!-- comment -->
              <v-textarea
                label="Izoh"
                v-model="comment"
                prepend-inner-icon="mdi mdi-comment"
                required
              ></v-textarea>

              <!-- file -->
              <v-file-input
                label="Fayl yuklash"
                v-model="file"
                class="mt-5"
                prepend-icon
                prepend-inner-icon="mdi mdi-file"
                required
                accept="*/*"
              ></v-file-input>

              <v-btn
                color="primary"
                class="mt-3"
                @click="attendTenderParticipants"
                >Yuborish</v-btn
              >
            </v-form>
          </v-card-text>

          <template v-slot:actions>
            <v-btn
              class="ms-auto"
              text="Back"
              @click="setDialog(false)"
            ></v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>
</template>

<script>
export default {
  name: 'ConstructionTenderCard',
  data() {
    return {
      hasItem: false,
      comment: '',
      file: null,
      dialog: false,
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
    setDialog(value) {
      this.dialog = value
    },
    attendTenderParticipants() {
      if (this.comment && this.file) {
        this.constructionCompany.comment = this.comment
        this.constructionCompany.file = this.file

        const data = {
          ...this.tender,
          participants: [...this.tender.participants, this.constructionCompany],
        }
        this.$store.dispatch('authority/attendTenderParticipants', data).then(() => {
          this.comment = ''
          this.file = null
          this.dialog = false
          this.$store.dispatch('authority/getTenders')
        })
      }
    },
    
    cancelTenderParticipants() {
      if (confirm('Bekor qilmoqchimisiz?')) {
        const newData = {
          ...this.tender,
          participants: this.tender.participants.filter(item => item.id !== this.constructionCompany.id),
        }
        this.$store.dispatch('authority/cancelTenderParticipants', newData).then(() => {
          this.$store.dispatch('authority/getTenders')
        })
      }
    },
  },
}
</script>

<style scoped></style>
