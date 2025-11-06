<script setup lang="ts">
import LayoutX from "../../components/layout/x.vue";

definePageMeta({
  layout: "default",
});

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

useSeoMeta({
  title: home.value?.name,
  description: home.value?.summary,
});

// Map layout names to component imports
const layoutComponents = {
  x: LayoutX,
  // linkedin: LayoutLinkedin,
  // instagram: LayoutInstagram,
};

// Get the layout component based on frontmatter
const layoutComponent = computed(() => {
  const layoutName = home.value?.layout || "x";
  return layoutComponents[layoutName as keyof typeof layoutComponents];
});
</script>

<template>
  <component
    v-if="home"
    :is="layoutComponent"
    :avatar="home.avatar"
    :name="home.name"
    :role="home.role"
    :summary="home.summary"
    :social-links="home.socialLinks"
    :body="home.body"
  />
  <div v-else class="text-white text-center">Home not found</div>
</template>
