<script setup lang="ts">
import ReadMore from "../ReadMore.vue";
import SocialLinks from "../SocialLinks.vue";

interface Props {
  avatar?: string;
  name?: string;
  role?: string;
  summary?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youTube?: string;
  };
  body?: any;
  background?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="max-w-md shadow-lg bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors"
  >
    <!-- Cover Image Section -->
    <div class="relative">
      <!-- Cover Image -->
      <div
        class="h-32 bg-linear-to-r from-blue-600 to-blue-800 overflow-hidden"
      >
        <img
          v-if="background"
          :src="background"
          alt="Cover"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Avatar positioned to overlap cover -->
      <div class="absolute -bottom-16 left-6">
        <div class="relative">
          <div
            class="w-28 h-28 rounded-full ring-4 ring-white dark:ring-gray-900 bg-white dark:bg-gray-900 overflow-hidden"
          >
            <img
              v-if="avatar"
              :src="avatar"
              :alt="name"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="pt-20 px-6 pb-4">
      <!-- Name and verification -->
      <div class="flex items-center gap-2 mb-1">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
          {{ name }}
        </h1>
        <Icon
          name="material-symbols:verified"
          class="text-blue-600"
          size="1.25rem"
        />
      </div>

      <!-- Role/Title -->
      <p class="text-gray-700 dark:text-gray-300 text-base mb-2">{{ role }}</p>

      <!-- Summary/Bio -->
      <p v-if="summary" class="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {{ summary }}
      </p>
    </div>

    <!-- Social Links Section (replacing action buttons) -->
    <div
      v-if="socialLinks"
      class="px-6 py-4 border-t border-gray-200 dark:border-gray-700"
    >
      <SocialLinks :social-links="socialLinks" size="lg" />
    </div>

    <!-- Content/About Section with ReadMore -->
    <div
      v-if="body"
      class="px-6 py-4 border-t border-gray-200 dark:border-gray-700"
    >
      <ReadMore
        :body="body"
        collapsed-height="150px"
        max-height="400px"
        gradient-from="from-white dark:from-gray-900"
      />
    </div>
  </div>
</template>
