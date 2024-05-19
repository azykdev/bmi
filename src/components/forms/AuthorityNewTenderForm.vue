<template>
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
</template>

<script>
export default {
  name: 'AuthorityNewTenderForm',
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
        participants: [],
        re_tender: false,
        re_tender_count: 0,
      },
    }
  },
  methods: {
    submit() {
      let validate = true

      for (const val in this.formData) {
        if (val === 'participants') break

        if (!this.formData[val]) {
          validate = false
        }
      }

      if (validate) {
        this.formData.constructionConditions = this.formData.constructionConditions.split('//')

        console.log(this.formData)

        if (this.tender) {
          this.$store.dispatch('authority/updateTender', this.formData).then(() => {
            this.$store.dispatch('authority/getTenders')
            this.$store.commit('authority/setNewTenderDialog', false)
          })
          return
        }

        this.$store.dispatch('authority/createTender', this.formData).then(() => {
          this.$store.dispatch('authority/getTenders')
          this.$store.commit('authority/setNewTenderDialog', false)
        })

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
          participants: [],
          re_tender: false,
          re_tender_count: 0,
        }
      } else {
        alert("Malumotlarni to'ldiring")
        console.log(this.formData);
      }
    },
  },
  computed: {
    tender() {
      return this.$store.state.authority.tender
    },
  },
  mounted() {
    if (this.tender) {
      this.tender.constructionConditions = this.tender.constructionConditions.join('//')
      this.formData = this.tender
    }
  },
}
</script>

<style scoped></style>
