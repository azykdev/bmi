<template>
  
  <VCol
    v-if="tender.victor.id == constructionCompany.id"
    cols="12"
  >
    <VCard>
      <VCardTitle class="border-b mb-2 text-violet-600 d-flex justify-between"
        ><span>{{ tender.name }} </span>
      </VCardTitle>

      <VCardText>
        <h3 class="text-slate-800  mb-3 bg-slate-200 rounded px-3 pb-1 inline-block">qurilish kompanyasi: <span class="text-slate-700 font-bold text-xl">{{ tender.victor.name }}</span></h3>

        <p class="text-slate-500 text-xl mb-3">Bajarilgan ishlarni kiriting:</p>
        <VForm>
          <VRow>
            <VCol
              cols="12"
              md="8"
            >
              <v-textarea
                label="Label"
                v-model="comment"
              ></v-textarea>
            </VCol>
            <VCol
              cols="12"
              md="4"
            >
              <!-- Image -->
              <v-file-input
                label="Fayl yuklash"
                prepend-icon
                prepend-inner-icon="mdi mdi-image"
                required
                accept="*/*"
                ref="file"
                @change="changeFile"
              ></v-file-input>

              <div class="flex items-end justify-between">
                <img
                  :src="file"
                  alt=""
                  class="w-[100px] mt-3 rounded"
                />

                <VBtn
                  color="success"
                  class="mt-3 ms-3"
                  @click="submitTenderWork"
                  >Yuborish</VBtn
                >
              </div>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>

      <VCardText v-if="tender.works.length > 0">
        <div
          v-for="item in tender.works"
          class=" border-b bg-slate-100 mb-3 p-3 rounded"
        >
          <div class="flex justify-between mb-3 gap-5">
            <p>{{ item.comment }}</p>
            <img
              :src="item.file"
              alt=""
              class="w-[100px] rounded"
            />
          </div>
          <div class="text-end">
            <VBtn color="error" size="small" @click="deleteWork(item.id)">O'chirish</VBtn>
          </div>
        </div>
      </VCardText>
    </VCard>
  </VCol>
</template>

<script>
import { VBtn, VForm } from 'vuetify/lib/components/index.mjs'

export default {
  name: 'ConstructionMyTendersCard',
  data() {
    return {
      comment: '',
      file: null,
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

  methods: {
    changeFile(file) {
      const fileReader = new FileReader()
      const { files } = file.target
      if (files && files.length) {
        fileReader.readAsDataURL(files[0])
        fileReader.onload = () => {
          if (typeof fileReader.result === 'string') this.file = fileReader.result
        }
      }
    },

    submitTenderWork() {
      if (this.comment && this.file) {
        const newData = {
        ...this.tender,
        works: [
          ...this.tender.works,
          {
            id: new Date(),
            comment: this.comment,
            file: this.file,
            sendDate: new Date().toISOString().slice(0, 10),
          },
        ],
      }

      this.$store.dispatch('authority/updateVicTender', newData).then(() => {
        this.comment = ''
        this.file = null

        this.$store.dispatch('authority/getVicTenders')
      })
      }
    },

    deleteWork(id) {
      const newData = {
        ...this.tender,
        works: this.tender.works.filter(item => item.id != id),
      }

      this.$store.dispatch('authority/updateVicTender', newData).then(() => {
        this.$store.dispatch('authority/getVicTenders')
      })
    },
  },
}
</script>
