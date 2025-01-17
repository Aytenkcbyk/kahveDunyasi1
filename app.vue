<script setup lang="ts">
import { createPinia } from 'pinia';


const pinia = createPinia();
const nuxtApp = useNuxtApp();

nuxtApp.vueApp.use(pinia);
</script>

<template>
  <NuxtPage />
</template>