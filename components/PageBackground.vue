<script setup lang="ts">
import { computed } from "vue";

interface Props {
  background?: string;
}

const props = defineProps<Props>();

// Detect if background is a video based on file extension
const isVideo = computed(() => {
  if (!props.background) return false;
  const videoExtensions = [".mp4", ".webm", ".ogg"];
  return videoExtensions.some((ext) =>
    props.background?.toLowerCase().endsWith(ext)
  );
});

// Detect if background is an SVG
const isSvg = computed(() => {
  if (!props.background) return false;
  return props.background.toLowerCase().endsWith(".svg");
});
</script>

<template>
  <div v-if="background" class="fixed inset-0 z-0">
    <!-- Video Background -->
    <video
      v-if="isVideo"
      :src="background"
      autoplay
      loop
      muted
      playsinline
      class="w-full h-full object-cover"
    />

    <!-- SVG Background (using Tailwind background utilities) -->
    <div
      v-else-if="isSvg"
      :style="{ backgroundImage: `url(${background})` }"
      class="w-full h-full bg-center bg-repeat"
    />

    <!-- Image Background (other formats) -->
    <img
      v-else
      :src="background"
      alt="Background"
      class="w-full h-full object-cover"
    />

    <!-- Dark Overlay for readability -->
    <div
      class="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors"
    />
  </div>
</template>
