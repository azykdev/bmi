<template>
  <header
    id="home-header"
    class="bg-[#e8f7f5] pt-[144px] relative"
  >
    <!-- gradient shape -->
    <div id="home-header-gradient"></div>

    <div
      id="home-header-wrapper"
      class="lg:max-w-screen-lg md:max-w-screen-md mx-auto p-5 z-20 relative"
    >
      <div
        id="home-header-content"
        class=""
      >
        <!-- 👉 Header text -->
        <div class="text-center px-6">
          <!-- 👉 Title -->
          <h1 class="text-5xl font-bold text-violet-600">
            All in one sass application <br />
            for your business
          </h1>

          <!-- 👉 Description -->
          <p class="text-md font-semibold my-7">
            No coding required to make customization <br />

            The live customer has everything your marketing needs
          </p>

          <!-- 👉 CTA -->
          <VBtn color="primary md:mb-7"> Get Started </VBtn>
        </div>

        <!-- 👉 Illustration -->
        <div class="flex justify-center mt-10">
          <img
            src="https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="home header"
            class="w-[1000px] md:h-[500px] h-[300px] rounded-xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style scoped>
#home-header-gradient {
  position: absolute;
  bottom: 10%;
  left: calc(50% - 300px);
  height: 600px;
  width: 600px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f59bff 0%, #ff69beeb 100%);
  z-index: 0;
  filter: blur(3100px);
}
</style>
