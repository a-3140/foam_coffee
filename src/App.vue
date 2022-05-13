<script setup lang="ts">
  import bg from '../src/assets/bg.jpg'
  const image: string = `url(${bg})`
</script>

<template>
  <main>
    <div
      v-bind:style="{ 'background-image': image }"
      id="wrapper"
      class="fullscreen overflow-hidden"
    >
      <router-view />
    </div>
  </main>
</template>

<style scoped>
  #wrapper {
    /* min-height: calc(100vh - 68px); */
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }
</style>
