<template>
  <content>
    <h6 class="title">Project</h6>

    <div class="grid-project">
      <project-card :data="projects" />
    </div>

    <div class="text-center" data-aos="fade-up">
      <router-link :to="{ name: 'project.index' }" class="btn-primary"
        >More Projects
      </router-link>
    </div>
  </content>
</template>

<script setup>
import { ref } from "vue";
import Content from "./Content.vue";
import { getProjects } from "../composables/getProjects";
import ProjectCard from "./ProjectCard.vue";

// limit the number of projects to display
const limit = 4;

const data = ref(getProjects.slice(0, limit));
const projects = data.value;
</script>
