<template>
  <div class="text-center pa-4 absolute">
    <v-dialog
      v-model="dialog"
      width="auto"
      persistent
    >
      <v-card
        prepend-icon="mdi mdi-account"
        title="Yangi tender yaratish"
        class="w-[380px] sm:w-[600px] md:w-[1000px]"
      >
        <v-card-text class="max-h-[90vh] overflow-auto">
          <!-- New Tender Form -->
          <VForm @submit.prevent="submit">
            <VRow>
              <!-- Name -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.name"
                  label="Tender nomi"
                />
              </VCol>

              <!-- Adress -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.adress"
                  label="Manzil"
                />
              </VCol>

              <!-- Area -->
              <VCol
                cols="12"
                md="4"
              >
                <VTextField
                  v-model="formData.area"
                  label="Maydoni (m²)"
                />
              </VCol>

              <!-- Funds Type -->
              <VCol
                cols="12"
                md="4"
              >
                <VSelect
                  v-model="formData.fundsType"
                  label="Mablag' turi"
                  :items="['Davlat budjeti', 'Mahalliy budjet', 'Homiylik']"
                >
                </VSelect>
              </VCol>

              <!-- Construction Type -->
              <VCol
                cols="12"
                md="4"
              >
                <VSelect
                  v-model="formData.constructionType"
                  label="Qurilish turi"
                  :items="['Turar', 'No turar']"
                >
                </VSelect>
              </VCol>

              <!-- Customer -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.customer"
                  label="Buyurtmachi"
                />
              </VCol>

              <!-- Lifetime -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="Muddati"
                  variant="outlined"
                  density="comfortable"
                  placeholder="Tug'ilgan sana"
                  type="date"
                  v-model="formData.lifetime"
                />
              </VCol>

              <!-- Construction Conditions -->
              <VCol cols="12">
                <VTextarea
                  v-model="formData.constructionConditions"
                  label="Qurilish shartlari"
                  no-resize
                  counter
                ></VTextarea>
              </VCol>
            </VRow>

            <VBtn
              type="submit"
              class="mt-5 px-7"
            >
              Submit
            </VBtn>
          </VForm>
        </v-card-text>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Back"
            @click="setDialog"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AuthorityNewTenderDialog',
  data() {
    return {
      formData: {
        name: '',
        adress: '',
        area: '',
        fundsType: '',
        constructionType: '',
        constructionConditions: '',
        customer: '',
        lifetime: '',
        createdAt: new Date().toISOString().slice(0, 10),
      },
    }
  },
  computed: {
    dialog() {
      return this.$store.state.authority.newTenderDialog
    },
  },
  methods: {
    setDialog() {
      this.$store.commit('authority/setNewTenderDialog', false)
    },

    submit() {
      let validate = true

      for (const val in this.formData) {
        if (!this.formData[val]) {
          validate = false
          break
        }
      }

      if (validate) {
        this.formData.constructionConditions = this.formData.constructionConditions.split('\n')

        console.log(this.formData)

        this.$store.dispatch('authority/createTender', this.formData).then(() => {
          this.$store.dispatch('authority/getTenders')
        })
        this.$store.commit('authority/setNewTenderDialog', false)

        this.formData = {
          name: '',
          adress: '',
          area: '',
          fundsType: '',
          constructionType: '',
          constructionConditions: '',
          customer: '',
          lifetime: '',
          createdAt: new Date().toISOString().slice(0, 10),
        }
      } else {
        alert("Malumotlarni to'ldiring")
      }
    },
  },
}
</script>

<style scoped></style>
