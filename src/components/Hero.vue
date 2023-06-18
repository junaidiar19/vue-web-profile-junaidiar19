<template>
  <content>
    <div class="flex items-center gap-4 sm:gap-6 mb-6">
      <div>
        <img
          src="/img/profile-1.jpg"
          class="h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-lg sm:rounded-full shadow-md"
          alt=""
        />
      </div>
      <div>
        <div class="font-semibold sm:text-2xl text-lg">
          Junaidi Abdul Rahman
        </div>
        <p class="text-sm sm:text-base">Full Stack Web Developer</p>
        <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          <i class="fe fe-map-pin mr-1"></i> Banjarmasin, Kalimantan Selatan,
          Indonesia
        </p>
      </div>
    </div>

    <div class="leading-relaxed text-sm sm:text-base">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla suscipit
      consequuntur eligendi magni accusantium molestiae deserunt vel
      perspiciatis ad possimus aperiam dolor quidem mollitia sunt, maxime
      cumque, quos, nam voluptatem.
    </div>
  </content>
</template>

<script setup>
import Content from "./Content.vue";
</script>
