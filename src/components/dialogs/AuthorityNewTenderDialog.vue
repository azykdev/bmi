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
          <AuthorityNewTenderForm />
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
import AuthorityNewTenderForm from '@/components/forms/AuthorityNewTenderForm.vue'
export default {
  name: 'AuthorityNewTenderDialog',
  components: {
    AuthorityNewTenderForm,
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

    
  },
  
}
</script>

<style scoped></style>
