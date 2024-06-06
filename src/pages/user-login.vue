<script setup>
import { setItem } from '@/helpers/persistaneStorage'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const form = ref({
  username: '',
  password: '',
})

const isPasswordVisible = ref(false)

// Computed
const users = computed(() => {
  return store.state.users.users
})

// Methods
const submit = () => {
  // if (form.value.password  && form.value.username) {
  //   users.value.forEach(user => {
  //     if (user.username == form.value.username && user.password == form.value.password) {
  //       setItem('user_id', user.id)
  //       router.push({name: 'citizen-home'})
  //     } else {
  //       alert('Login yoki parol xato')
  //     }
  //   })
  // } else {
  //   alert('Login va parolni to\'ldiring')
  // }

  if (form.value.password && form.value.username) {
    const user = users.value.find(user => user.username == form.value.username && user.password == form.value.password)

    if (user) {
      setItem('user_id', user.id)
      router.push({ name: 'citizen-home' })
    } else {
      alert('Login yoki parol xato')
    }
  } else {
    alert("Login va parolni to'ldiring")
  }
}

// Mounted
onMounted(() => {
  store.dispatch('users/getUsers')
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
        <template #prepend>
          <div class="d-flex">
            <img
              src="@/assets/images/logo.png"
              alt=""
              width="50px"
            />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase"> Selling House </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">Welcome to Selling House! 👋🏻</h5>
        <p class="mb-0">Please sign-in to your account and start the adventure</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="submit">
          <VRow>
            <!-- Username -->
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                label="Username"
                placeholder="Johndoe"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Parol"
                placeholder="············"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <VBtn
                block
                type="submit"
                class="mt-4"
                @click="submit"
              >
                Kirish
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
