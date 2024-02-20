<template>
  <content id="contact" class="mb-6">
    <h6 class="font-semibold mb-6">Contact</h6>

    <div class="grid gap-2 sm:gap-x-4 sm:gap-y-6 grid-cols-2 sm:grid-cols-4">
      <a
        :href="item.url"
        target="_blank"
        class="card dark:hover:border-slate-400"
        v-for="item in contacts"
        :key="item"
        data-aos="fade-up"
      >
        <div class="card-body text-center">
          <i :class="item.icon"></i>
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
    icon: "text-2xl fab fa-linkedin text-blue-600",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/junaidi-abdul-rahman-207b27151/",
  },
  {
    icon: "text-2xl fab fa-instagram text-rose-500",
    name: "Instagram",
    url: "https://www.instagram.com/junaidiar19/",
  },
  {
    icon: "text-2xl fab fa-github text-black-600",
    name: "Github",
    url: "https://github.com/junaidiar19",
  },
  {
    icon: "text-2xl fab fa-google text-rose-500",
    name: "Gmail",
    url: "mailto:junaidiar.fcb@gmail.com",
  },
]);

const contacts = data.value;
</script>
