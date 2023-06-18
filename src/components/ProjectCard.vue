<template>
  <div
    class="flex self-stretch card dark:bg-gray-900"
    v-for="item in props.data"
    :key="item.slug"
  >
    <div class="card-body dark:p-0 flex flex-col h-full">
      <img
        :src="item.thumbnail"
        class="img-fluid img-fit mb-4 rounded-lg"
        alt=""
      />
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
const props = defineProps(["data"]);
</script>
