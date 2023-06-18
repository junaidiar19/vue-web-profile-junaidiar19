<template>
  <Header />
  <main class="min-h-screen">
    <div class="container-custom pt-20">
      <Hero />
      <Skills />
      <Experience />
      <Project />
      <Footer />
    </div>
  </main>
</template>

<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Project from "./components/Project.vue";
import Footer from "./components/Footer.vue";
</script>
