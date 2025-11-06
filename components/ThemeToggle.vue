<script setup lang="ts">
import { ref, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
  // Check localStorage or system preference
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};
</script>

<template>
  <button
    @click="toggleTheme"
    class="fixed top-6 right-6 z-50 size-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-lg"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun icon (light mode) -->
    <Icon
      v-if="!isDark"
      name="mdi:white-balance-sunny"
      class="w-6 h-6 text-yellow-500"
    />
    <!-- Moon icon (dark mode) -->
    <Icon
      v-else
      name="mdi:moon-waning-crescent"
      class="w-6 h-6 text-blue-300 -rotate-45"
    />
  </button>
</template>
