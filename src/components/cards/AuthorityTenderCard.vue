<template>
  <!-- 👉 Lifetime Membership -->
  <VCol
    cols="12"
    id="tender-card-wrapper"
  >
    <VCard>
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
                <span class="font-bold text-blue-400">{{ item.name }}</span>
                <p>{{ item.comment }}</p>
                <img
                  @click="setDialog(true, item.file)"
                  :src="item.file"
                  alt=""
                  class="w-[100px] mt-3"
                />
              </li>
            </ol>
            <p v-else>---</p>
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="info"
          variant="tonal"
          icon="mdi mdi-pencil"
          @click="getEditData(tender.id)"
        >
        </VBtn>
        <VBtn
          color="error"
          variant="tonal"
          icon="mdi mdi-delete"
          @click="deleteTender(tender.id)"
        >
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
        <v-card class="w-[380px] sm:w-[600px] md:w-[800px] py-5">
          <v-card-text class="">
            <img :src="dialogImage" alt="" class="w-full">
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
  name: 'TenderCard',
  data() {
    return {
      dialog: false,
      dialogImage: '',
    }
  },
  props: {
    tender: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setDialog(value, data) {
      this.dialog = value
      this.dialogImage = data
    },
    getEditData(id) {
      console.log(id)
      this.$store.dispatch('authority/getTender', id).then(res => {
        this.$store.commit('authority/setNewTenderDialog', true)
      })
    },
    deleteTender(id) {
      if (confirm("E'lonni o'chirmoqchimisiz?")) {
        this.$store.dispatch('authority/deleteTender', id).then(() => {
          this.$store.dispatch('authority/getTenders')
        })
      }
    },
  },
}
</script>

<style scoped></style>
