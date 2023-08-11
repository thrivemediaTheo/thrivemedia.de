<template>
  <div class="relative w-full h-full">
    <iframe :src="src" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
      style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%" :title="title"></iframe>
  </div>
</template>

<script setup>
defineProps(["src", "title"])
</script>