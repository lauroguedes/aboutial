<script setup lang="ts">
import ThemeToggle from "../components/ThemeToggle.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <ThemeToggle />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>
