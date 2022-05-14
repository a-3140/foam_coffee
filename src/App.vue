<script setup lang="ts">
  import bg from '@/assets/bg.jpg'

  const image: string = `url(${bg})`
</script>

<template>
  <div
    v-bind:style="{ 'background-image': image }"
    class="fullscreen overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat"
  >
    <router-view />
  </div>
</template>

<style scoped></style>
