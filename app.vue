<script setup lang="ts">
import { pageBg } from "~/styled-system/recipes"
</script>

<template>
  <div :class="pageBg()">
    <NuxtPage />
  </div>
</template>