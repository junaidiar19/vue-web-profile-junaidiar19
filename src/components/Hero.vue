<template>
  <content>
    <div class="flex items-top gap-4 sm:gap-6 mb-6">
      <div>
        <img
          src="/img/profile-1.jpg"
          class="h-20 w-20 sm:h-28 sm:w-28 object-cover rounded-lg sm:rounded-lg shadow-md mb-3"
          alt=""
        />
      </div>
      <div>
        <div class="font-semibold sm:text-4xl text-lg">
          Junaidi Abdul Rahman
        </div>
        <p class="text-sm sm:text-xl mb-1">Full Stack Web Developer</p>
        <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
          <i class="fe fe-map-pin mr-1"></i> Banjarmasin, Kalimantan Selatan,
          Indonesia
        </p>
      </div>
    </div>

    <div class="leading-relaxed text-sm sm:text-base mb-6">
      Saya seorang web developer dengan pengalaman lebih dari 3 tahun. Sebagai
      developer saya memiliki keterampilan dalam mengembangkan platform
      menggunakan Laravel, Vue.js, MySQL & Tailwind CSS. Saya sering bekerja
      sama dengan tim dan pernah dipercaya untuk membangun tim IT pada salah
      satu Start Up Edutech Indonesia.
    </div>
    <a
      href="/files/cv-junaidi-abdul-rahman.pdf"
      target="_blank"
      class="btn-primary"
      >Download CV</a
    >
  </content>
</template>

<script setup>
import Content from "./Content.vue";
</script>
