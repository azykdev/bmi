<template>
  <!-- 👉 Lifetime Membership -->
  <VCol
    cols="12"
    md="6"
  >
    <VCard>
      <VCardItem class="bg-primary">
        <VCardTitle class="text-white">{{ tender.name }}</VCardTitle>

        <!-- {{ tender.constructionConditions }} -->
        <ul class="list-disc ps-5 mt-5">
          <li
            v-for="item in tender.constructionConditions"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </VCardItem>

      <VCardText class="d-flex justify-center mt-5">
        <VRow no-gutters>
          <VCol
            cols="12"
            sm="6"
            md="12"
          >
            <p class="d-flex align-center mb-4">
              <VIcon
                color="primary"
                icon="mdi mdi-account-tie "
              />
              <span class="font-bold ms-2">Buyurtmachi:</span>
              <span class="ms-3"> {{ tender.customer }}</span>
            </p>
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="12"
          >
            <p class="d-flex align-center mb-4">
              <VIcon
                color="primary"
                icon="mdi mdi-cash-multiple"
              />
              <span class="font-bold ms-2">Mablag' turi:</span>
              <span class="ms-3"> {{ tender.fundsType }}</span>
            </p>
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="12"
          >
            <p class="d-flex align-center mb-4">
              <VIcon
                color="primary"
                icon="mdi mdi-office-building-cog-outline"
              />
              <span class="font-bold ms-2">Qurilish turi:</span>
              <span class="ms-3"> {{ tender.constructionType }}</span>
            </p>
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="12"
          >
            <p class="d-flex align-center mb-4">
              <VIcon
                color="primary"
                icon="mdi mdi-arrow-expand-horizontal"
              />
              <span class="font-bold ms-2">Maydon:</span>
              <span class="ms-3">{{ tender.area }} m<sup>2</sup></span>
            </p>
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="12"
          >
            <p class="d-flex align-center mb-4">
              <VIcon
                color="primary"
                icon="ri-map-pin-line"
              />
              <span class="font-bold ms-2">Manzil:</span>
              <span class="ms-3">{{ tender.constructionType }}</span>
            </p>
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="12"
          >
            <p class="d-flex align-center mb-4">
              <VIcon
                color="primary"
                icon="ri-calendar-2-line"
              />
              <span class="font-bold ms-2">Yaratilgan sana:</span>
              <span class="ms-3">{{ tender.createdAt }}</span>
            </p>
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="12"
          >
            <p class="d-flex align-center mb-4">
              <VIcon
                color="primary"
                icon="ri-calendar-schedule-fill"
              />
              <span class="font-bold ms-2">Muddati:</span>
              <span class="ms-3">{{ tender.lifetime }}</span>
            </p>
          </VCol>

          <VCol
            cols="12"
            sm="6"
            md="12"
            class="text-right"
          >
            <VBtn
              color="info"
              @click="$emit('open-tender', tender)"
              icon="mdi mdi-pencil"
            >
            </VBtn>
            <VBtn
              color="error"
              @click="$emit('open-tender', tender)"
              class="ms-2"
              icon="mdi mdi-delete"
            >
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VCol>
</template>

<script>
import { VSpacer } from 'vuetify/lib/components/index.mjs'

export default {
  name: 'TenderCard',
  props: {
    tender: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped></style>
