<script setup lang="ts">
interface Props {
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youTube?: string;
  };
  size?: "xs" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

// Map size to icon classes
const sizeClasses = {
  xs: "1rem",
  md: "1.5rem",
  lg: "2rem",
};

const iconSize = sizeClasses[props.size];
</script>

<template>
  <div class="flex gap-4" v-if="socialLinks">
    <a
      v-if="socialLinks.github"
      :href="socialLinks.github"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label="GitHub"
    >
      <Icon name="mdi:github" :size="iconSize" />
    </a>
    <a
      v-if="socialLinks.linkedin"
      :href="socialLinks.linkedin"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label="LinkedIn"
    >
      <Icon name="mdi:linkedin" :size="iconSize" />
    </a>
    <a
      v-if="socialLinks.twitter"
      :href="socialLinks.twitter"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label="Twitter"
    >
      <Icon name="mdi:twitter" :size="iconSize" />
    </a>
    <a
      v-if="socialLinks.instagram"
      :href="socialLinks.instagram"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label="Instagram"
    >
      <Icon name="mdi:instagram" :size="iconSize" />
    </a>
    <a
      v-if="socialLinks.youTube"
      :href="socialLinks.youTube"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label="YouTube"
    >
      <Icon name="mdi:youtube" :size="iconSize" />
    </a>
  </div>
</template>
