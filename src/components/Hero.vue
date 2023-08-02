<template>
  <content class="pt-0 sm:pt-6">
    <div class="flex items-top gap-4 sm:gap-6 mb-0 sm:mb-4">
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

    <div class="leading-relaxed text-sm sm:text-base mb-6" data-aos="fade-up">
      Saya seorang full stack web developer dengan pengalaman lebih dari
      {{ experienceYears }} tahun. Sebagai developer saya memiliki keterampilan
      dalam mengembangkan platform menggunakan Laravel, Vue.js, MySQL & Tailwind
      CSS. Saya sering bekerja dengan tim dan pernah dipercaya untuk membangun &
      memimpin tim IT pada salah satu Start Up Edutech Indonesia di Yogyakarta.
    </div>
    <div data-aos="fade-up" data-aos-delay="50">
      <a
        href="/files/cv-junaidi-abdul-rahman.pdf"
        target="_blank"
        class="btn-primary"
        >Download CV</a
      >
    </div>
  </content>
</template>

<script setup>
import { computed } from "vue";
import Content from "./Content.vue";

const experienceYears = computed(() => {
  const start = 2019;
  const current = new Date().getFullYear();
  return current - start;
});
</script>
