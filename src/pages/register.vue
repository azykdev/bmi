<script setup>
import { useStore } from 'vuex';
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const form = ref({
  name: '',
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

  let hasItem = false

  users.value.forEach(user => {
    if (user.username === form.value.username) {
      hasItem = true
    }
  })

  if (hasItem) {
    alert('Bu foydalanuvchi avval ro\'yxatdan o\'tgan')
    return
  }

  if (form.value.name && form.value.username && form.value.password) {
    store.dispatch('users/createUser', form.value).then((res) => {
      form.value = {}
      router.push({name: 'citizen-home'})
    })
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
            <!-- name -->
            <VCol cols="12">
              <VTextField
                v-model="form.name"
                label="Ismingiz"
                placeholder="Johndoe"
                type="text"
              />
            </VCol>

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
                Ro'yxatdan o'tish
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
