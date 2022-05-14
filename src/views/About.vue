<script setup lang="ts">
  import { ref } from 'vue'

  const xMovement = ref('0')
  const yMovement = ref('0')

  function handleMouseMove(evt: any) {
    const e = evt || window.event
    const x = e.pageX - 100
    const y = e.pageY - 100
    xMovement.value = x as unknown as string
    yMovement.value = y as unknown as string
    console.log('x', xMovement.value)
    console.log('y', yMovement.value)
  }
</script>

<template>
  <div class="relative h-screen" @mousemove="handleMouseMove">
    <div
      id="wrapper"
      class="z-10 h-screen w-screen"
      :style="{ transform: `translate(${xMovement}px, ${yMovement}px)` }"
    ></div>
    <div class="drop">
      <span class="absolute top-52">Content is here</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  #wrapper {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle closest-side, #ffffff, transparent);
    filter: blur(30px);
    transition: transform 0.15s ease;
  }
</style>
