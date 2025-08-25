<script setup lang="ts">
import { pageBg } from "~/styled-system/recipes"
</script>

<template>
  <div :class="pageBg()">
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>