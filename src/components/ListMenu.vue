<template>
  <li>
    <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
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
</template>
