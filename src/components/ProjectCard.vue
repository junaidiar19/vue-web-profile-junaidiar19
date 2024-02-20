<template>
  <div
    data-aos="fade-up"
    class="flex self-stretch card dark:bg-gray-900"
    v-for="(item, index) in props.data"
    :key="index"
  >
    <div class="card-body dark:p-0 flex flex-col h-full">
      <a :href="item.thumbnail" data-fancybox :data-caption="item.name">
        <img
          :src="item.thumbnail"
          class="img-fluid img-fit mb-4 rounded-lg"
          alt=""
        />
      </a>
      <p class="font-semibold mb-3">{{ item.name }}</p>
      <div class="mt-auto">
        <p class="text-sm text-gray-600 dark:text-gray-300">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {
    dragToClose: false,
  });
});

onUpdated(() => {
  Fancybox.destroy();
  Fancybox.bind("[data-fancybox]", {
    dragToClose: false,
  });
});

onUnmounted(() => {
  Fancybox.destroy();
});

const props = defineProps(["data"]);

const lightboxIndex = ref(null);
</script>
