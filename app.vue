<script setup lang="ts">
import { pageBg } from "~/styled-system/recipes"
</script>

<template>
  <div :class="pageBg()">
    <NuxtPage />
  </div>
</template>

<style>
.right-enter-active,
.right-leave-active {
  transition: all 0.4s;
}
.right-enter-from,
.right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>