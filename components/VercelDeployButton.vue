<script setup lang="ts">
interface Props {
  repositoryUrl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  repositoryUrl: "https://github.com/lauroguedes/aboutial",
});

const deployUrl = computed(
  () => `https://vercel.com/new/clone?repository-url=${encodeURIComponent(props.repositoryUrl)}`
);
</script>

<template>
  <div class="flex justify-center mt-6">
    <a
      :href="deployUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 dark:bg-white/80 text-white dark:text-black font-medium text-xs hover:bg-black/90 dark:hover:bg-white/90 transition-all shadow-sm hover:shadow-md transform hover:scale-105 backdrop-blur-md duration-200"
    >
      <Icon name="simple-icons:vercel" size="0.875rem" />
      <span>Deploy to Vercel</span>
    </a>
  </div>
</template>
