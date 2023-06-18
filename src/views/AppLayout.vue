<template>
  <div class="container-custom pt-6">
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./../components/Header.vue";
import Footer from "./../components/Footer.vue";
</script>
