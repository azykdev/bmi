<script setup>
import { setItem } from '@/helpers/persistaneStorage';
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

// COMPOSABLES
const router = useRouter()
const store = useStore()

// DATA
const form = ref({
  email: '',
  password: '',
})
const isPasswordVisible = ref(false)

// COMPUTED
const accountType = computed(() => {
  return store.state.auth.accountType
})
const constructionCompanies = computed(() => {
  return store.state.construction.constructionCompanies
})

// METHODS
const submitForm = () => {
  if (accountType.value.id == 'authority') {
    if (form.value.email === 'admin' && form.value.password === 'admin') {
      router.push({ name: 'authority-dashboard' })
    } else {
      alert('Wrong email or password')
    }
  } else if (accountType.value.id == 'construction-company') {
    let hasItem = false

    constructionCompanies.value.forEach((item) => {
      if (item.email === form.value.email && item.password === form.value.password) {
        hasItem = true
        setItem('id', item.id)
        router.push({ name: 'construction-dashboard', params: { name: item.name } })
      }
    })

    if (hasItem === false) {
      alert('Wrong email or password')
    }
  } else {
    alert('nimadir xato')
  }
}

onMounted(() => {
  // console.log('accountType', accountType.value);
  if (accountType.value.id === 'construction-company') {
    store.dispatch('construction/getConstructionCompanies').then((res) => {
      // console.log('res', res);
    })
  }
})
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->

  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          <img
            src="@/assets/images/logo.png"
            width="50px"
            alt=""
          />
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">Welcome to Selling House! 👋🏻</h5>
        <p class="mb-0">Please sign-in to your account and start the adventure</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="submitForm">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
                placeholder="Email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- Login button -->
              <VBtn
                block
                type="submit"
                class="mt-5"
              >
                Login
              </VBtn>
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use '@core/scss/pages/page-auth.scss';
</style>
