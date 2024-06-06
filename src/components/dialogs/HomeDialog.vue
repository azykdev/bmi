<template>
  <div class="text-center pa-4 absolute">
    <v-dialog
      v-model="dialog"
      width="auto"
      persistent
    >
      <v-card
        prepend-icon="mdi mdi-account"
        title="Hisob turini tanlang"
        class="w-[350px] sm:w-[600px] md:w-[800px]"
      >
        <v-card-text>
          <div
            id="choose-account"
            class=""
          >
            <v-list
              class="md:flex items-center"
              color="orange-lighten-3"
            >
              <v-list-item
                v-for="(item, i) in accountTypes"
                :key="item.id"
                :value="item"
                color="primary"
                variant="plain"
                class="border mb-3 md:w-1/3 text-center"
                @click="chooseAccountType(item)"
              >
              

                <v-list-item-title class="flex items-center justify-center"> <span :class="item.icon" class="text-xl me-2"></span> {{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>
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
  name: 'HomeDialog',
  data() {
    return {
      accountTypes: [
        {
          id: 'authority',
          name: 'Hokimiyat',
          icon: 'mdi mdi-account-tie',
        },
        {
          id: 'construction-company',
          name: 'Qurilish firmasi',
          icon: 'mdi mdi-bank',
        },
        {
          id: 'citizen',
          name: 'Fuqaro',
          icon: 'mdi mdi-account',
        },
      ],
    }
  },
  computed: {
    dialog() {
      return this.$store.state.home.dialog
    },
  },
  methods: {
    setDialog() {
      this.$store.commit('home/setDialog', false)
    },
    chooseAccountType(accountType) {
      this.$store.commit('home/setDialog', false)
      this.$store.commit('auth/setAccountType', accountType)

      if (accountType.id === 'authority' || accountType.id === 'construction-company') {
        this.$router.push({ name: 'login' })
        return
      }

      if (accountType.id === 'citizen') {
        this.$router.push({ name: 'citizen-home' })
        return
      }
    },
  },
}
</script>

<style scoped></style>
