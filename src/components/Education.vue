<template>
  <content>
    <h6 class="title">Education</h6>

    <ol class="relative border-l border-gray-300 dark:border-gray-700">
      <li class="mb-10 ml-4" v-for="item in educations" :key="item">
        <div
          class="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border-4 border-blue-600 dark:border-gray-500 dark:bg-gray-900"
        ></div>
        <div data-aos="fade-up">
          <time
            class="flex items-center gap-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500 mb-1"
          >
            <span>{{ item.from }}</span>
            <span>&bullet;</span>
            <span>{{ item.until }}</span>
          </time>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
            {{ item.name }}
          </h3>
          <p class="mb-2">{{ item.major }}</p>
          <p
            class="mb-1 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200"
          >
            Activities:
          </p>
          <ul class="grid gap-y-1 pl-2">
            <li
              v-for="i in item.activity"
              :key="i"
              class="dark:text-gray-400 text-sm"
            >
              - {{ i }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </content>
</template>

<script setup>
import { ref } from "vue";
import Content from "./Content.vue";

const data = ref([
  {
    name: "Politeknik Hasnur",
    major: "D3 Teknik Informatika",
    from: "2016",
    until: "2019",
    activity: [
      "Presiden Mahasiswa 2017/2018",
      "Himpunan Mahasiswa IT Se-Kalimantan",
      "Organisasi Kepemudaan & Sosial (Pemuda Bakti Banua)",
      "Freelance Programmer",
    ],
  },
  {
    name: "SMKN 1 Batumandi",
    major: "Teknik Komputer & Jaringan",
    from: "2013",
    until: "2016",
    activity: [
      "Pasukan 7 PASKIBRAKA Kab. Balangan",
      "Peraih Perunggu POPDA Bola Voli Se-Kalsel",
    ],
  },
]);

const educations = data.value;
</script>
