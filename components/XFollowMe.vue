<script setup lang="ts">
interface Props {
  url: string;
}

defineProps<Props>();

onMounted(() => {
  if (!document.getElementById("twitter-widgets")) {
    const script = document.createElement("script");
    script.id = "twitter-widgets";
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  } else {
    if ((window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load();
    }
  }
});
</script>

<template>
  <a
    class="twitter-follow-button"
    :href="url"
    data-size="large"
    data-show-screen-name="false"
    data-show-count="true"
  >
    Follow</a
  >
</template>
