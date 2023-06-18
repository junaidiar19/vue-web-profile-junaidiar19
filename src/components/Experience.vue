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
            class="flex items-center gap-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500 mb-1"
          >
            <span>{{ item.from }}</span>
            <span>&bullet;</span>
            <span>{{ item.until }}</span>
          </time>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
            {{ item.name }}
          </h3>
          <p
            class="mb-4 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"
          >
            {{ item.description }}
          </p>
        </div>
      </li>
    </ol>

    <!-- <ol class="relative border-l border-gray-300 dark:border-gray-700">
      <li class="mb-10 ml-4" v-for="item in experiences" :key="item">
        <div
          class="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border-4 border-blue-600 dark:border-gray-900 dark:bg-gray-700"
        ></div>
        <time
          class="flex items-center gap-1 mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500 mb-1"
        >
          <span>{{ item.from }}</span>
          <span>&bullet;</span>
          <span>{{ item.until }}</span>
        </time>
        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
          {{ item.name }}
        </h3>
        <p
          class="mb-4 text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400"
        >
          {{ item.description }}
        </p>
      </li>
    </ol> -->
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
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    name: "Head of Programmer at Digitaliz Yayasan Hasnur Centre",
    from: "Okt 2019",
    until: "Present",
    logo: "/img/logo/digitaliz.png",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    name: "CTO (Chief of Technology) at veldeva.id",
    from: "Jan 2023",
    until: "Present",
    logo: "/img/logo/veldeva.svg",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    name: "Technical Leader at guruinovatif.id",
    from: "Apr 2020",
    until: "Present",
    logo: "/img/logo/icon.ico",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    name: "Web Developer Digitaliz",
    from: "Okt 2019",
    until: "Okt 2021",
    logo: "/img/logo/digitaliz.png",
    description:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
]);

const experiences = data.value;
</script>

<style></style>
