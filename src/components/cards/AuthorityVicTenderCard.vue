<template>
  <VCol
    cols="12"
    id="tender-card-wrapper"
  >
    <VCard>
      <VCardTitle class="border-b mb-2 text-violet-600">{{ tender.name }} </VCardTitle>
      <VCardSubtitle>
        <p class="text-blue-400">
          🏆 Tender g'olibi: <span class="text-xl font-bold text-slate-800">{{ tender.victor.name }}</span>
        </p>
      </VCardSubtitle>

      <VCardText>
        <p class="text-slate-500 text-xl mb-3">Bajarilgan ishlar:</p>
        <div
          v-for="item in tender.works"
          class="border-b bg-slate-100 mb-3 p-3 rounded"
        >
          <div class="flex justify-between mb-3 gap-5">
            <img
              :src="item.file"
              alt=""
              class="w-[140px] rounded object-cover cursor-pointer"
              @click="setDialog(item.file)"
            />
            <div>
              <p class="text-primary font-semibold">{{ item.sendDate }}</p>
              <p>{{ item.comment }}</p>
            </div>
          </div>
          <!-- <div class="text-end">
            <VBtn color="error" size="small" @click="deleteWork(item.id)">O'chirish</VBtn>
          </div> -->
        </div>
      </VCardText>
      
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
            <img
              :src="dialogImage"
              alt=""
              class="w-full"
            />
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
import { VCardSubtitle, VCardText } from 'vuetify/lib/components/index.mjs'

export default {
  name: 'AuthorityVicTenderCard',
  data() {
    return {
      dialog: false,
      dialogImage: null,
    }
  },
  methods: {
    setDialog(image) {
      this.dialog = !this.dialog
      this.dialogImage = image
    },
  },
  props: {
    tender: {
      type: Object,
      required: true,
    },
  },
}
</script>
