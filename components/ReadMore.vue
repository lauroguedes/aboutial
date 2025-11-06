<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Props {
  body: any;
  collapsedHeight?: string;
  maxHeight?: string;
}

const props = withDefaults(defineProps<Props>(), {
  collapsedHeight: "100px",
  maxHeight: "400px",
});

const isExpanded = ref(false);
const shouldTruncate = ref(false);
const contentRef = ref<HTMLElement | null>(null);

onMounted(() => {
  // Check if content height exceeds collapsed height
  if (contentRef.value) {
    const collapsedHeightValue = parseInt(props.collapsedHeight);
    const actualHeight = contentRef.value.scrollHeight;
    shouldTruncate.value = actualHeight > collapsedHeightValue;
  }
});

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="relative">
    <!-- Content container with conditional max-height -->
    <div
      ref="contentRef"
      :class="[
        'transition-all duration-300',
        isExpanded && shouldTruncate
          ? 'overflow-auto'
          : shouldTruncate && !isExpanded
            ? 'overflow-hidden'
            : '',
      ]"
      :style="
        isExpanded && shouldTruncate
          ? { maxHeight: maxHeight }
          : shouldTruncate && !isExpanded
            ? { maxHeight: collapsedHeight }
            : {}
      "
    >
      <ContentRenderer
        v-if="body"
        :value="{ body }"
        class="leading-relaxed prose dark:prose-invert max-w-none"
      />
    </div>

    <!-- Gradient fade effect when collapsed -->
    <div
      v-if="shouldTruncate && !isExpanded"
      class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"
    />

    <!-- Read more/less button (in front of gradient) -->
    <div v-if="shouldTruncate" class="relative text-right z-10 mt-2">
      <button
        @click="toggleExpanded"
        class="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors inline-flex items-center gap-1"
      >
        {{ isExpanded ? "Read less" : "Read more" }}
        <svg
          :class="[
            'w-4 h-4 transition-transform',
            isExpanded ? 'rotate-180' : '',
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
