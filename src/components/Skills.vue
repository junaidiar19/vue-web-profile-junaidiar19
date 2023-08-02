<template>
  <content>
    <h6 class="font-semibold mb-6">Skills</h6>

    <div class="grid gap-2 sm:gap-x-4 sm:gap-y-6 grid-cols-2 sm:grid-cols-5">
      <a
        :href="item.url"
        target="_blank"
        class="card dark:hover:border-slate-400"
        v-for="item in skills"
        :key="item"
        data-aos="fade-up"
      >
        <div class="card-body text-center">
          <div class="skill-image" v-html="item.image"></div>
          <p class="font-medium sm:text-sm text-xs">{{ item.name }}</p>
        </div>
      </a>
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
    url: "https://www.w3schools.com/html/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />',
    name: "CSS",
    url: "https://www.w3schools.com/css/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />',
    name: "JavaSript",
    url: "https://www.w3schools.com/js/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />',
    name: "jQuery",
    url: "https://jquery.com/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" />',
    name: "PHP",
    url: "https://www.php.net/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" />',
    name: "Laravel",
    url: "https://laravel.com/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" />',
    name: "Codeignier",
    url: "https://codeigniter.com/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />',
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />',
    name: "React.js",
    url: "https://reactjs.org/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />',
    name: "Vue.js",
    url: "https://vuejs.org/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" />',
    name: "Nuxt.js",
    url: "https://nuxtjs.org/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />',
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />',
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />',
    name: "Git",
    url: "https://git-scm.com/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />',
    name: "VS Code",
    url: "https://code.visualstudio.com/",
  },
  {
    image: '<img src="/img/logo/laravel-livewire.png" />',
    name: "Livewire",
    url: "https://laravel-livewire.com/",
  },
  {
    image: '<img src="/img/logo/inertia.png" class="rounded-md" />',
    name: "Inertia.js",
    url: "https://inertiajs.com/",
  },
  {
    image: '<img src="/img/logo/alpine.webp" class="rounded-md" />',
    name: "Alpine.js",
    url: "https://alpinejs.dev/",
  },
  {
    image: '<img src="/img/logo/vite.svg" />',
    name: "Vite.js",
    url: "https://vitejs.dev/",
  },
  {
    image:
      '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />',
    name: "Docker",
    url: "https://www.docker.com/",
  },
]);

const skills = data.value;
</script>
