<template>
  <Header />
  <div class="container-custom pt-20">
    <main class="min-h-screen">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
  <scroll-top />
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import ScrollTop from "./components/ScrollTop.vue";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.05s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
