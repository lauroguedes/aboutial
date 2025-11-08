<script setup lang="ts">
import ReadMore from "../ReadMore.vue";
import SocialLinks from "../SocialLinks.vue";
import XFollowMe from "../XFollowMe.vue";

interface Props {
  avatar: string;
  name: string;
  role: string;
  summary?: string;
  body?: any;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youTube?: string;
  };
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="max-w-md shadow-md bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors animate-fade-in-up"
  >
    <!-- Header with avatar and name -->
    <div class="p-6 pb-4">
      <div class="flex flex-col gap-2">
        <div class="flex items-start justify-between gap-4">
          <img
            :src="avatar"
            :alt="name"
            class="w-20 h-20 rounded-full object-cover"
          />
          <XFollowMe v-if="socialLinks?.twitter" :url="socialLinks.twitter" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ name }}
            </h1>
            <svg
              viewBox="0 0 22 22"
              aria-label="Verified account"
              role="img"
              class="w-5 h-5 fill-blue-500"
            >
              <g>
                <path
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                ></path>
              </g>
            </svg>
          </div>
          <p class="text-gray-500 dark:text-gray-400 text-sm">{{ role }}</p>
        </div>
      </div>
    </div>

    <!-- Bio section -->
    <div class="px-6 pb-4">
      <p
        class="text-gray-900 dark:text-white text-base leading-relaxed mb-3"
        v-if="summary"
      >
        {{ summary }}
      </p>
      <ReadMore
        v-if="body"
        :body="body"
        collapsed-height="100px"
        max-height="250px"
      />
    </div>

    <!-- Stats -->
    <div class="px-6 pb-4 flex gap-5">
      <div class="flex gap-1">
        <span class="text-gray-900 dark:text-white font-bold">391</span>
        <span class="text-gray-500 dark:text-gray-400">Following</span>
      </div>
      <div class="flex gap-1">
        <span class="text-gray-900 dark:text-white font-bold">78</span>
        <span class="text-gray-500 dark:text-gray-400">Followers</span>
      </div>
    </div>

    <!-- Social Links -->
    <div class="px-6 pb-6">
      <SocialLinks :social-links="socialLinks" size="md" />
    </div>
  </div>
</template>
