<template>
  <content>
    <h6 class="title">Project</h6>

    <div class="grid-project">
      <project-card :data="projects" />
    </div>

    <div class="text-center">
      <router-link :to="{ name: 'project.index' }" class="btn-primary"
        >More Projects
      </router-link>
    </div>
  </content>
</template>

<script setup>
import { ref } from "vue";
import Content from "./Content.vue";
import ProjectCard from "./ProjectCard.vue";

const data = ref([
  {
    slug: "online-learning-guruinovatif",
    name: "Online Learning Guruinovatif.id",
    description: "Laravel 9, Tailwind CSS, Alpine.js, MySQL, Livewire",
    thumbnail: "/img/project/gi.PNG",
  },
  {
    slug: "website-donasi-online-ychi",
    name: "Website Donasi Online YCHI",
    description: "Laravel 10, Bootstrap 5, MySQL, Livewire",
    thumbnail: "/img/project/ychi.PNG",
  },
  {
    slug: "ebook-platform-bariskoding",
    name: "E-Book Platform bariskoding.com",
    description: "Laravel 10, Inertia.js, Vue.js, Tailwind CSS, MySQL",
    thumbnail: "/img/project/bariskoding.PNG",
  },
  {
    slug: "mitra-management-system-slimsure",
    name: "Mitra Point Management System Slimsure",
    description: "Laravel 9, Bootstrap 5, MySQL, Admin LTE",
    thumbnail: "/img/project/slimsure.PNG",
  },
]);

const projects = data.value;
</script>

<style></style>
