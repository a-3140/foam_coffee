<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useCursorCoordinates } from '../../common/Mouse'

  interface Cloud {
    size: number
    transitionDelay: number
  }
  interface CloudStyle {
    scale: number
    opacity: number
  }
  type CloudArray = Cloud[]

  const cloudArray: CloudArray = new Array(7).fill({}).map((e, i) => {
    const initialSize = 400
    const initialDelay = 0.4
    const sizeDiff = i * 40
    const additionalDelay = i * 0.1
    return {
      size: initialSize - sizeDiff,
      transitionDelay: initialDelay + additionalDelay,
    }
  })

  function fadeoutCloud(): void {
    cloudStyle.value = { opacity: 0, scale: 1 }
  }
  function fadeinExpand(): void {
    cloudStyle.value = { scale: 1, opacity: 1 }
  }
  function animateClouds(): void {
    fadeinExpand()
    clearTimeout(delayBeforeFadeout)
    delayBeforeFadeout = setTimeout(fadeoutCloud, 450)
  }

  let delayBeforeFadeout = 0
  const showCloudCursor = ref(false)
  const cloudCoordinates = useCursorCoordinates()
  const cloudStyle = ref<CloudStyle>({ scale: 0, opacity: 0 })

  watch(cloudCoordinates, () => {
    if (!showCloudCursor.value) {
      showCloudCursor.value = true
    }
    animateClouds()
  })
</script>

<template>
  <div
    v-for="cloud in cloudArray"
    class="cloud absolute top-0 left-0 z-30 cursor-pointer blur-3xl"
    :key="cloud.size"
    :hidden="!showCloudCursor"
    :style="{
      width: `${cloud.size}px`,
      height: `${cloud.size}px`,
      opacity: `${cloudStyle.opacity}`,
      transform: `translate(${cloudCoordinates.x - cloud.size / 2}px, ${
        cloudCoordinates.y - cloud.size / 2
      }px) scale(${cloudStyle.scale})`,
      transition: `transform ${cloud.transitionDelay}s ease, opacity 0.5s ease-in-out`,
    }"
  />
</template>

<style scoped>
  .cloud {
    background: radial-gradient(circle closest-side, #ffffff, transparent);
  }
</style>
