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
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="max-w-md shadow-md bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors"
  >
    <!-- Header with avatar, name, role, and menu -->
    <div class="p-6 flex items-start justify-between">
      <div class="flex items-center gap-4">
        <!-- Avatar with Instagram gradient border -->
        <div class="relative">
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]"
          >
            <div
              class="w-full h-full rounded-full bg-white dark:bg-[#2c2c2e]"
            ></div>
          </div>
          <img
            v-if="avatar"
            :src="avatar"
            :alt="name"
            class="relative w-20 h-20 rounded-full object-cover p-[3px]"
          />
        </div>

        <!-- Name and role -->
        <div class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ name }}
            </h1>
            <Icon
              name="material-symbols:verified"
              class="text-blue-500"
              size="1.25rem"
            />
          </div>
          <p class="text-gray-600 dark:text-gray-300 text-base">{{ role }}</p>
        </div>
      </div>

      <!-- Menu icon -->
      <button
        class="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        aria-label="Menu"
      >
        <Icon name="mdi:dots-horizontal" size="1.5rem" />
      </button>
    </div>

    <!-- Bio/Summary section -->
    <div class="px-6 mb-3">
      <p class="text-gray-900 dark:text-white text-base leading-relaxed">
        {{ summary }}
      </p>
    </div>

    <!-- Building section with markdown content -->
    <div v-if="body" class="px-6 pb-4">
      <ReadMore :body="body" collapsed-height="100px" max-height="300px" />
    </div>

    <!-- Social Links section -->
    <div
      v-if="socialLinks"
      class="px-6 py-4 border-t border-gray-200 dark:border-gray-700"
    >
      <SocialLinks :social-links="socialLinks" size="lg" />
    </div>
  </div>
</template>
