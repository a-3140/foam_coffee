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
    const sizeDiff = i * 40
    const additionalDelay = i * 0.05
    return {
      size: 400 - sizeDiff,
      transitionDelay: 0.2 + additionalDelay,
    }
  })

  const cloudStyle = ref<CloudStyle>({ scale: 0, opacity: 0 })

  const fadeoutCloud = (): void => {
    cloudStyle.value = { opacity: 0, scale: 1 }
  }

  const fadeinExpand = (): void => {
    cloudStyle.value = { scale: 1, opacity: 1 }
  }

  let delayBeforeFadeout = 0
  const animateClouds = () => {
    fadeinExpand()
    clearTimeout(delayBeforeFadeout)
    delayBeforeFadeout = setTimeout(fadeoutCloud, 200)
  }

  const cloudCoordinates = useCursorCoordinates()
  const showCloudCursor = ref(false)

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
    class="bubble absolute top-0 left-0 z-30 cursor-pointer blur-3xl"
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
  .bubble {
    background: radial-gradient(circle closest-side, #ffffff, transparent);
  }
</style>
