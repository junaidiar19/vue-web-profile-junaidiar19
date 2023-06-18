<template>
  <content>
    <h6 class="font-semibold mb-6">Skills</h6>

    <div class="grid gap-2 sm:gap-x-4 sm:gap-y-6 grid-cols-2 sm:grid-cols-5">
      <div class="card" v-for="item in skills" :key="item" data-aos="fade-up">
        <div class="card-body text-center">
          <div class="skill-image" v-html="item.image"></div>
          <p class="font-medium sm:text-sm text-xs">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </content>
</template>

<script setup>
import { ref } from "vue";
import Content from "./Content.vue";

const data = ref([
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />',
    name: "HTML",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />',
    name: "CSS",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />',
    name: "JavaSript",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />',
    name: "jQuery",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />',
    name: "PHP",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />',
    name: "Laravel",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" />',
    name: "Codeignier",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />',
    name: "MySQL",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />',
    name: "React.js",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />',
    name: "Vue.js",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" />',
    name: "Nuxt.js",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />',
    name: "Bootstrap",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />',
    name: "Tailwind CSS",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />',
    name: "Git",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />',
    name: "VS Code",
  },
  {
    image: '<img src="/img/logo/laravel-livewire.png" />',
    name: "Livewire",
  },
  {
    image: '<img src="/img/logo/inertia.png" class="rounded-md" />',
    name: "Inertia.js",
  },
  {
    image: '<img src="/img/logo/materialize-logo.png" />',
    name: "Materialize",
  },
  {
    image: '<img src="/img/logo/alpine.webp" class="rounded-md" />',
    name: "Alpine.js",
  },
  {
    image: '<img src="/img/logo/vite.svg" />',
    name: "Vite.js",
  },
]);

const skills = data.value;
</script>
