<script setup lang="ts">
  import { ref, StyleValue } from 'vue'
  import Nav from '@/components/main/Nav.vue'
  import AnimatedCloud from '@/components/animated/AnimatedCloud.vue'

  const rotate = ref(0)
  const xAxisMoveDistance = ref(0)
  const transformUpDistance = ref(0)

  const transformMoveUp = (px: number): StyleValue => {
    return { transform: `translateY(${px}px)` }
  }

  const moveCenterCoffeeUp = (): void => {
    transformUpDistance.value = -30
  }

  const animatePeekingCoffee = (): void => {
    rotate.value = 30
    xAxisMoveDistance.value = 200
  }

  const animateCoffees = () => {
    moveCenterCoffeeUp()
    animatePeekingCoffee()
  }
</script>

<template>
  <div class="relative mx-auto flex h-screen justify-center py-5 text-center">
    <animated-cloud />

    <transition name="fade" appear>
      <Nav />
    </transition>

    <transition name="slide-fade" appear>
      <div
        class="relative flex h-4/6 w-screen items-center justify-center align-middle sm:h-3/5"
      >
        <div
          class="z-40 select-none text-6xl tracking-wide text-stone-900 antialiased outline-1 sm:text-8xl"
        >
          foam coffee
        </div>
      </div>
    </transition>

    <transition name="fade" appear>
      <div
        class="h-px-900 absolute bottom-4 z-30 sm:bottom-0"
        @mouseenter="animateCoffees"
      >
        <img
          class="animated-coffee h-full max-h-[28rem] w-64 sm:h-fit sm:w-full"
          alt="foam-coffee-1"
          src="@/assets/coffee.png"
          :style="transformMoveUp(transformUpDistance)"
        />
      </div>
    </transition>
    <transition name="fade" appear>
      <div class="absolute bottom-4 sm:bottom-0">
        <img
          class="animated-coffee h-full max-h-[28rem] w-64 sm:h-fit sm:w-full"
          alt="foam-coffee-2"
          src="@/assets/coffee2.png"
          :style="{
            transform: `translateX(${-xAxisMoveDistance}px) rotate(${-rotate}deg)`,
          }"
        />
      </div>
    </transition>

    <transition name="fade" appear>
      <div class="absolute bottom-4 sm:bottom-0">
        <img
          class="animated-coffee h-full max-h-[28rem] w-64 sm:h-fit sm:w-full"
          alt="foam-coffee-3"
          src="@/assets/coffee3.png"
          :style="{
            transform: `translateX(${xAxisMoveDistance}px) rotate(${rotate}deg)`,
          }"
        />
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .animated-coffee {
    transition: transform 0.9s ease-in-out;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all 2.5s ease-in-out;
  }

  .slide-fade-leave-active {
    transition: all 2.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
