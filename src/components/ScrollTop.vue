<template>
  <button
    id="scrollToTopBtn"
    class="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-md shadow-md hidden"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Get the scroll-to-top button element
  const scrollToTopButton = document.getElementById("scrollToTopBtn");

  // Show/hide the button based on the user's scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      scrollToTopButton.classList.remove("hidden");
    } else {
      scrollToTopButton.classList.add("hidden");
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
</script>

<style></style>
