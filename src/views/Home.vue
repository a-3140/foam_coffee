<script setup lang="ts">
  import { ref, StyleValue } from 'vue'

  const cursorX = ref(0)
  const cursorY = ref(0)
  const rotate = ref(0)

  const cloudOpacity = ref(0)
  const cloudWidth = ref(0)
  const cloudHeight = ref(0)
  const cloudScale = ref(1)

  const isReverse = ref(true)
  const showFoamCursor = ref(false)
  const transformUpDistance = ref(0)

  const xAxisMoveDistance = ref(0)

  let cloudDownsizeTimeout = 0
  let cloudFadeoutTimeout = 0
  let animatePeekTimeout = 0

  const transformPeek = (xAxis: number, angle: number): StyleValue => {
    return { transform: `translateX(${xAxis}px) rotate(${angle}deg)` }
  }

  const transformMoveUp = (px: number): StyleValue => {
    return { transform: `translateY(${px}px)` }
  }

  const downsize = (): void => {
    cloudScale.value = 0
    cloudWidth.value = 0
  }

  const fadeToExpand = (): void => {
    showFoamCursor.value = true
    cloudScale.value = 1
    cloudOpacity.value = 1
    cloudWidth.value = 400
    cloudHeight.value = 300
  }

  const moveCenterCoffeeUp = (): void => {
    transformUpDistance.value = -30
  }

  const animatePeekingCoffee = (): void => {
    rotate.value = 30
    xAxisMoveDistance.value = 200
  }

  const resetPeekingCoffee = (): void => {
    rotate.value = 0
    xAxisMoveDistance.value = 0
    transformUpDistance.value = 0
  }

  const fadeoutCloud = (): void => {
    cloudOpacity.value = 0
  }

  const followCursorCoordinates = (evt: any): void => {
    const x = evt.pageX
    const y = evt.pageY

    cursorX.value = x
    cursorY.value = y
  }

  function handleMouseMove(evt: any) {
    const e = evt || window.event
    isReverse.value = !isReverse.value

    fadeToExpand()
    moveCenterCoffeeUp()
    animatePeekingCoffee()
    followCursorCoordinates(e)

    clearTimeout(cloudDownsizeTimeout),
      clearTimeout(cloudFadeoutTimeout),
      clearTimeout(animatePeekTimeout)

    cloudDownsizeTimeout = setTimeout(downsize, 600)
    cloudFadeoutTimeout = setTimeout(fadeoutCloud, 200)
    animatePeekTimeout = setTimeout(resetPeekingCoffee, 800)
  }
</script>

<template>
  <div
    @mousemove="handleMouseMove"
    class="relative mx-auto flex h-screen cursor-pointer items-center justify-center py-5 md:py-0"
  >
    <div
      id="wrapper"
      class="bubble z-30"
      :hidden="!showFoamCursor"
      :style="{
        transform: `translate(${cursorX}px, ${cursorY}px) scale(${cloudScale})`,
        opacity: `${cloudOpacity}`,
      }"
    />

    <div
      id="wrapper2"
      :hidden="!showFoamCursor"
      class="bubble z-30"
      :style="{
        transform: `translate(${cursorX}px, ${cursorY}px) scale(${cloudScale})`,
        opacity: `${cloudOpacity}`,
      }"
    />

    <div
      id="wrapper3"
      :hidden="!showFoamCursor"
      class="bubble z-30"
      :style="{
        transform: `translate(${cursorX}px, ${cursorY}px) scale(${cloudScale})`,
        opacity: `${cloudOpacity}`,
      }"
    />

    <div
      id="wrapper4"
      :hidden="!showFoamCursor"
      class="bubble z-30"
      :style="{
        transform: `translate(${cursorX}px, ${cursorY}px) scale(${cloudScale})`,
        opacity: `${cloudOpacity}`,
      }"
    />

    <div
      id="wrapper5"
      :hidden="!showFoamCursor"
      class="bubble z-30"
      :style="{
        transform: `translate(${cursorX}px, ${cursorY}px) scale(${cloudScale})`,
        opacity: `${cloudOpacity}`,
      }"
    />

    <div
      id="wrapper6"
      :hidden="!showFoamCursor"
      class="bubble z-30"
      :style="{
        transform: `translate(${cursorX}px, ${cursorY}px) scale(${cloudScale})`,
        opacity: `${cloudOpacity}`,
      }"
    />

    <div
      id="wrapper7"
      :hidden="!showFoamCursor"
      class="bubble z-30"
      :style="{
        transform: `translate(${cursorX}px, ${cursorY}px) scale(${cloudScale})`,
        opacity: `${cloudOpacity}`,
      }"
    />

    <nav
      class="absolute top-0 left-0 z-40 flex w-screen justify-between py-4 px-10"
    >
      <div class="flex">
        <svg
          class="mr-2 -ml-1 mt-5 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="mr-2 ml-3 mt-5 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          role="img"
        >
          <path
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          />
        </svg>
      </div>

      <img
        alt="foam logo"
        src="../assets/logo.png"
        class="aspect-square item-center w-15 h-24"
      />
      <svg
        class="mt-5 h-6 w-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </nav>
    <div
      class="pointer-events-none z-30 select-none pb-96 text-6xl font-extralight tracking-wide text-stone-700 antialiased sm:text-9xl"
    >
      foam coffee
    </div>
    <div class="pointer-events-none absolute bottom-0 z-30">
      <img
        class="animated-coffee"
        alt="foam logo"
        src="@/assets/coffee.png"
        :style="transformMoveUp(transformUpDistance)"
      />
    </div>
    <div class="pointer-events-none absolute bottom-0">
      <img
        class="animated-coffee"
        alt="foam-coffee-2"
        src="@/assets/coffee.png"
        :style="
          isReverse
            ? transformPeek(-xAxisMoveDistance, -rotate)
            : transformPeek(xAxisMoveDistance, rotate)
        "
      />
    </div>
    <div class="pointer-events-none absolute bottom-0">
      <img
        class="animated-coffee"
        alt="foam-coffee-2"
        src="@/assets/coffee.png"
        :style="
          isReverse
            ? transformPeek(xAxisMoveDistance, rotate)
            : transformPeek(-xAxisMoveDistance, -rotate)
        "
      />
    </div>
  </div>
</template>

<style scoped>
  .bubble {
    top: 0;
    left: 0;
    cursor: pointer;
    filter: blur(30px);
    position: absolute;
    margin-top: -150px;
    margin-left: -200px;
    background: radial-gradient(circle closest-side, #ffffff, transparent);
  }
  #wrapper {
    width: 400px;
    height: 400px;
    transition: transform 0.2s ease, opacity 0.5s ease-in-out;
  }
  #wrapper2 {
    transition: transform 0.25s ease, opacity 0.5s ease-in-out;
    width: 370px;
    height: 370px;
  }

  #wrapper3 {
    transition: transform 0.3s ease, opacity 0.5s ease-in-out;
    width: 340px;
    height: 340px;
  }

  #wrapper4 {
    transition: transform 0.35s ease, opacity 0.5s ease-in-out;
    width: 310px;
    height: 310px;
  }

  #wrapper5 {
    transition: transform 0.4s ease, opacity 0.5s ease-in-out;
    width: 280px;
    height: 280px;
  }

  #wrapper6 {
    transition: transform 0.45s ease, opacity 0.5s ease-in-out;
    width: 250px;
    height: 250px;
  }

  #wrapper7 {
    width: 250px;
    height: 250px;
    transition: transform 0.6s ease, opacity 0.5s ease-in-out;
    background: radial-gradient(circle closest-side, #e5e3e3, transparent);
  }

  .animated-coffee {
    transition: transform 0.6s ease-in-out;
  }
</style>
