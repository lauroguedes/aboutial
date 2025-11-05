<script setup lang="ts">
const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

useSeoMeta({
  title: home.value?.name,
  description: home.value?.summary,
});
</script>

<template>
  <img :src="home?.avatar" :alt="home?.name" />
  <div>{{ home?.name }}</div>
  <div>{{ home?.role }}</div>
  <div>{{ home?.summary }}</div>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
