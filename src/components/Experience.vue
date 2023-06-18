<template>
  <content>
    <h6 class="title">Experience</h6>

    <ol class="relative border-l border-gray-200 dark:border-gray-700 mb-12">
      <li class="mb-10 ml-6" v-for="item in experiences" :key="item">
        <span
          class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 bg-white ring-white dark:ring-gray-700 dark:bg-gray-700"
        >
          <img class="rounded-full" :src="item.logo" alt="Bonnie image" />
        </span>
        <div>
          <time
            class="flex items-center gap-1 text-sm font-normal lead-none text-gray-500 dark:text-gray-500 mb-1"
          >
            <span>{{ item.from }}</span>
            <span>&bullet;</span>
            <span>{{ item.until }}</span>
          </time>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
            {{ item.name }}
          </h3>
          <p class="mb-1 text-sm text-gray-700 dark:text-gray-300">
            Activities & Achivement:
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
    name: "Content Creator & Founder at bariskoding.com",
    from: "Feb 2023",
    until: "Present",
    logo: "/img/logo/bariskoding.jpg",
    activity: [
      "Create Tutorial Article",
      "Create E-Book Laravel Fundamental",
      "Create E-Book Vue.js",
      "Create E-Book Bootstrap",
      "Create Content of Coding",
    ],
  },
  {
    name: "Head of Programmer at Digitaliz Yayasan Hasnur Centre",
    from: "Okt 2019",
    until: "Present",
    logo: "/img/logo/digitaliz.png",
    activity: [
      "Lead the Development Team",
      "Research & Development",
      "Create SOP for Developers Team",
      "Create Coding Lessons Program for Developers Team",
    ],
  },
  {
    name: "CTO (Chief of Technology) at veldeva.id",
    from: "Jan 2023",
    until: "Present",
    logo: "/img/logo/veldeva.svg",
    activity: [
      "Lead the Development Team",
      "Create Online Course: Membangun Website Donasi Online Menggunakan Laravel",
    ],
  },
  {
    name: "Technical Leader at guruinovatif.id",
    from: "Apr 2020",
    until: "Present",
    logo: "/img/logo/icon.ico",
    activity: [
      "Lead the Development Team",
      "Developing Platform Guruinovatif.id 3.0",
      "Design Software Architecture",
      "Technical Consultant",
    ],
  },
  {
    name: "Freelance Web Developer TNYI (The New You Institute)",
    from: "Jan 2021",
    until: "April 2022",
    logo: "/img/logo/tnyi.png",
    activity: [
      "Developing platform Learning Management System",
      "Collaboration With Developer Team",
    ],
  },
  {
    name: "Web Developer Digitaliz",
    from: "Okt 2019",
    until: "Okt 2021",
    logo: "/img/logo/digitaliz.png",
    activity: [
      "Developing platform web based for All Unit Yayasan Hasnur Centre",
      "Developing platform guruinovatif.id",
      "Best Employee of The Year 2021",
    ],
  },
]);

const experiences = data.value;
</script>
