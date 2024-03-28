<template>
  <nav
    class="w-full py-2 bg-white dark:bg-gray-900 z-20 mb-8 border-b dark:border-slate-800 fixed"
  >
    <div class="flex items-center justify-between container-custom">
      <div class="hidden sm:block">
        <ul class="flex gap-6">
          <ListMenu />
        </ul>
      </div>
      <div class="sm:hidden">
        <span
          class="fe icon-toggle -ms-3"
          :class="menu ? 'fe-x' : 'fe-menu'"
          @click="toggleMenu"
        ></span>
      </div>
      <div class="sm:hidden">
        <router-link :to="{ name: 'home' }">Junaidi Abdul Rahman</router-link>
      </div>
      <div>
        <span class="icon-toggle -me-3" @click="toggleTheme">
          <i class="fe" :class="dark ? 'fe-sun' : 'fe-moon'"></i>
        </span>
      </div>
    </div>
    <div class="relative sm:hidden" :class="menu ? 'block' : 'hidden'">
      <ul class="grid px-4 gap-y-2" @click="menu = !menu">
        <ListMenu />
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ListMenu from "./ListMenu.vue";

// Dark Mode
const dark = ref(true);

// Toggle Menu
const menu = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};

const toggleTheme = () => {
  dark.value = !dark.value;
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }
};

// onMounted(() => {
//   if (
//     localStorage.theme === "dark" ||
//     (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     dark.value = true;
//     document.documentElement.classList.add("dark");
//   } else {
//     dark.value = false;
//     document.documentElement.classList.remove("dark");
//   }
// });
</script>

<style></style>
