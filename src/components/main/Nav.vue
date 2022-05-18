<script setup lang="ts">
  import BurgerIcon from '@/icons/burger.vue'
  import FacebookIcon from '@/icons/facebook.vue'
  import InstagramIcon from '@/icons/instagram.vue'
</script>
<template>
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
</template>

<style>
  .nav-menu {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.35),
      rgba(255, 255, 255, 0)
    );
  }
</style>
