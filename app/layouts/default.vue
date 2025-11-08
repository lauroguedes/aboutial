<script setup lang="ts">
import PageBackground from "../../components/PageBackground.vue";
import AvailableBadge from "../../components/AvailableBadge.vue";
import VercelDeployButton from "../../components/VercelDeployButton.vue";

const route = useRoute();

// Fetch current page content to get background
const { data: pageData } = await useAsyncData(
  "page-content",
  () => queryCollection("content").path(route.path).first(),
  { watch: [() => route.path] }
);

const background = computed(() => pageData.value?.background);
const showAvailableBadge = computed(() => pageData.value?.availableBadge);
</script>

<template>
  <div
    class="relative min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors"
  >
    <PageBackground v-if="background" :background="background" />
    <div class="relative z-10">
      <AvailableBadge v-if="showAvailableBadge" />
      <slot />
      <VercelDeployButton />
    </div>
  </div>
</template>
