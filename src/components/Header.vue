<template>
  <nav
    class="w-full py-2 dark:bg-gray-900 z-20 mb-8 border-b dark:border-slate-800 fixed"
  >
    <div class="flex items-center justify-between container-custom">
      <div>
        <ul class="flex gap-6">
          <li>
            <router-link :to="{ name: 'home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'project.index' }" class="nav-link"
              >All Project</router-link
            >
          </li>
          <li>
            <a href="/#skills" class="nav-link">Skills</a>
          </li>
          <li>
            <a href="/#experience" class="nav-link">Experience</a>
          </li>
          <li>
            <a href="/#education" class="nav-link">Education</a>
          </li>
          <li>
            <a href="/#contact" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <span
          class="h-10 w-10 rounded-full transition hover:bg-gray-100 dark:hover:bg-gray-900 p-3 inline-flex justify-center items-center cursor-pointer"
          @click="toggleTheme"
        >
          <i class="fe" :class="dark ? 'fe-sun' : 'fe-moon'"></i>
        </span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Dark Mode
const dark = ref(true);

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
