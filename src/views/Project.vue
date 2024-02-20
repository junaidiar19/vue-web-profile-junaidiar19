<template>
  <div>
    <div class="relative mb-8">
      <input
        type="text"
        v-model="search"
        @input="searching"
        placeholder="Search for project.."
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div class="grid-project">
      <project-card :data="projects" v-if="!search" />
    </div>
    <div v-if="search">
      <div class="grid-project">
        <project-card :data="results" />
      </div>
      <div v-if="!results.length" class="text-center">-not found-</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "./../components/ProjectCard.vue";
import { getProjects } from "../composables/getProjects";

const search = ref(null);

const data = ref(getProjects);

const projects = data.value;

const results = ref([]);

const searching = () => {
  const findItem = projects.filter(obj =>
    obj.name.toLowerCase().includes(search.value.toLowerCase())
  );

  results.value = findItem;
};
</script>
