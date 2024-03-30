<template>
  <section
    id="new-tender"
    class="rounded-sm"
  >
    <div
      id="new-tender-wrapper"
      class="p-5"
    >
      <VBtn @click="$store.commit('authority/setNewTenderDialog', true)"> YANGI TENDER </VBtn>

      <AuthorityNewTenderDialog />
    </div>
  </section>
</template>

<script>
import AuthorityNewTenderDialog from '@/components/dialogs/AuthorityNewTenderDialog.vue'

export default {
  name: 'NewTender',
  components: {
    AuthorityNewTenderDialog,
  },
}
</script>

<style scoped></style>
