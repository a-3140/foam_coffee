<script setup lang="ts">
  import { ref, StyleValue } from 'vue'
  import FacebookIcon from '../icons/facebook.vue'
  import InstagramIcon from '../icons/instagram.vue'
  import BurgerIcon from '../icons/burger.vue'

  const cursorX = ref(0)
  const cursorY = ref(0)
  const rotate = ref(0)

  // TODO: Tech - use object instead of singular values and use types
  // TODO: Tech - use descriptive and move imperative code outside

  const cloudOpacity = ref(0)
  const cloudWidth = ref(0)
  const cloudHeight = ref(0)
  const cloudScale = ref(1)

  const isReverse = ref(true)
  const showCloudCursor = ref(false)
  const transformUpDistance = ref(0)

  const xAxisMoveDistance = ref(0)

  let cloudDownsizeTimeout = 0
  let cloudFadeoutTimeout = 0
  let animatePeekTimeout = 0

  const cloudArray = [
    { size: 400, transitionDelay: 0.2 },
    { size: 370, transitionDelay: 0.25 },
    { size: 340, transitionDelay: 0.3 },
    { size: 310, transitionDelay: 0.35 },
    { size: 280, transitionDelay: 0.4 },
    { size: 250, transitionDelay: 0.45 },
    { size: 220, transitionDelay: 0.5 },
    { size: 200, transitionDelay: 0.55 },
  ]

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
    showCloudCursor.value = true
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
    animatePeekTimeout = setTimeout(resetPeekingCoffee, 900)
  }
</script>

<template>
  <div
    @mousemove="handleMouseMove"
    class="relative mx-auto flex h-screen cursor-pointer justify-center py-5 text-center"
  >
    <template v-for="item in cloudArray">
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
    </template>

    <transition name="fade" appear>
      <nav
        class="nav-menu fixed top-0 left-0 z-40 flex w-screen flex-row py-4 px-10 transition delay-150 ease-in-out"
      >
        <div class="flex basis-1/3">
          <a href="https://www.facebook.com/foamcoffeeph/" target="_blank">
            <facebook-icon />
          </a>
          <a href="https://www.instagram.com/foamcoffeeph/" target="_blank">
            <instagram-icon />
          </a>
        </div>

        <div class="flex basis-1/3 justify-center">
          <img
            alt="foam logo"
            src="@/assets/logo.png"
            class="aspect-square w-15 h-24 items-end grayscale"
          />
        </div>
        <div class="flex basis-1/3 justify-end">
          <burger-icon />
        </div>
      </nav>
    </transition>

    <transition name="slide-fade" appear>
      <div
        class="relative flex h-4/6 w-screen items-center justify-center align-middle sm:h-3/5"
      >
        <div
          class="pointer-events-none z-30 select-none text-6xl tracking-wide text-stone-900 antialiased outline-1 sm:text-8xl"
        >
          foam coffee
        </div>
      </div>
    </transition>

    <transition name="fade" appear>
      <div
        class="h-px-900 pointer-events-none absolute bottom-4 z-30 sm:bottom-0"
      >
        <img
          class="animated-coffee h-full w-64 sm:h-fit sm:w-full"
          alt="foam-coffee-1"
          src="@/assets/coffee.png"
          :style="transformMoveUp(transformUpDistance)"
        />
      </div>
    </transition>
    <transition name="fade" appear>
      <div class="pointer-events-none absolute bottom-4 sm:bottom-0">
        <img
          class="animated-coffee h-full w-64 sm:h-fit sm:w-full"
          alt="foam-coffee-2"
          src="@/assets/coffee2.png"
          :style="
            isReverse
              ? transformPeek(-xAxisMoveDistance, -rotate)
              : transformPeek(xAxisMoveDistance, rotate)
          "
        />
      </div>
    </transition>

    <transition name="fade" appear>
      <div class="absolute bottom-4 sm:bottom-0">
        <img
          class="animated-coffee h-full w-64 sm:h-fit sm:w-full"
          alt="foam-coffee-3"
          src="@/assets/coffee3.png"
          :style="
            isReverse
              ? transformPeek(xAxisMoveDistance, rotate)
              : transformPeek(-xAxisMoveDistance, -rotate)
          "
        />
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .bubble {
    margin-top: -150px;
    margin-left: -150px;
    background: radial-gradient(circle closest-side, #ffffff, transparent);
  }
  .animated-coffee {
    transition: transform 0.9s ease-in-out;
  }
  .nav-menu {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0)
    );
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 4s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all 2.5s ease-in-out;
  }

  .slide-fade-leave-active {
    transition: all 3.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
