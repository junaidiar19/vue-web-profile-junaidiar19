<template>
  <content>
    <h6 class="title">Project</h6>

    <div class="grid sm:grid-cols-2 gap-6 mb-12">
      <div
        class="card cursor-pointer dark:bg-gray-900"
        v-for="item in projects"
        :key="item.slug"
      >
        <div class="card-body dark:p-0">
          <img
            :src="item.thumbnail"
            class="img-fluid img-fit mb-4 rounded-lg"
            alt=""
          />
          <p class="font-semibold mb-3">{{ item.name }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <a
        href=""
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >More Projects
      </a>
    </div>
  </content>
</template>

<script setup>
import { computed } from "vue";
import Content from "./Content.vue";
import { getProjects } from "./../composables/getProjects.js";

const projects = computed(() => {
  return getProjects.splice(0, 6);
});
</script>

<style></style>
