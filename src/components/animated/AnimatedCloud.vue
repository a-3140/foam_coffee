<script setup lang="ts">
  interface CloudArray {
    size: number
    transitionDelay: number
  }

  interface Props {
    cursorX: number
    cursorY: number
    cloudScale: number
    cloudOpacity: number
    cloudArray: CloudArray[]
    showCloudCursor: boolean
  }

  const props = defineProps<Props>()
</script>

<template>
  <div v-for="item in props.cloudArray">
    <div
      class="bubble absolute top-0 left-0 z-30 cursor-pointer blur-2xl"
      :hidden="!showCloudCursor"
      :style="{
        width: `${item.size}px`,
        height: `${item.size}px`,
        opacity: `${cloudOpacity}`,
        transform: `translate(${cursorX}px, ${cursorY}px) scale(${cloudScale})`,
        transition: `transform ${item.transitionDelay}s ease, opacity 0.5s ease-in-out`,
      }"
    ></div>
  </div>
</template>

<style scoped>
  .bubble {
    margin-top: -150px;
    margin-left: -150px;
    background: radial-gradient(circle closest-side, #ffffff, transparent);
  }
</style>
