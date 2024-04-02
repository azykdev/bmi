<template>
  <nav id="home-navbar">
    <div
      id="home-navbar-wrapper"
      class="lg:max-w-screen-lg md:max-w-screen-md mx-auto px-5"
    >
      <div
        id="home-navbar-content"
        class="h-[68px] px-5 flex items-center justify-between bg-[#fff] rounded-b-[15px]"
        :class="{ scrolled: scroll }"
      >
        <!-- left -->
        <div class="flex items-center">
          <img
            src="@/assets/images/logo.png"
            width="40"
            alt=""
          />
          <span class="ml-2 font-bold text-xl">Selling House</span>
        </div>

        <!-- right -->
        <div>
          <VBtn
            color="primary"
            @click="setHomeDialog"
          >
            Kirish
          </VBtn>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HomeNavbar',
  setup() {
    const store = useStore()
    const scroll = ref(false)

    // Scroll
    window.onscroll = () => {
      if (window.scrollY > 0) {
        scroll.value = true
      } else {
        scroll.value = false
      }
    }

    // Set Home Dialog
    const setHomeDialog = () => {
      store.commit('home/setDialog', true)
    }

    return { scroll, setHomeDialog }
  },
}
</script>

<style scoped>
#home-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

#home-navbar-content {
  background-color: #fff;
  transition: box-shadow 0.3s ease-in-out;
}

#home-navbar-content.scrolled {
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
}
</style>
