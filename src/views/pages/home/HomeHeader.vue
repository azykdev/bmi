<template>
  <header
    id="home-header"
    class="bg-[#e8f7f5] pt-[144px] relative"
  >

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
            Eng qulay <br> uy-joy sotish platformasi
          </h1>

          <!-- 👉 Description -->
          <p class="text-md font-semibold my-7">
            Bizning joy sotish saytimiz sizga dunyoning eng so'nggi va eng qulay joylarini topishda yordam beradi. <br> Sifatli va qulay foydalanuvchilar interfeysi bilan, <br> biznesingiz uchun mos keladigan joylarni aniqlash va xarid qilish osonlashadi.
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

</style>
