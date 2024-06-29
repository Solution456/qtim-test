<script setup lang="ts">
import MyHeader from '@/components/Layout/MyHeader.vue'
import MyFooter from '@/components/Layout/MyFooter.vue'
</script>

<template>
  <div>
    <MyHeader />
    <main
      class="container"
      style="  min-height: calc(100vh - var(--header-height));
"
    >
      <slot />
    </main>

    <MyFooter />
  </div>
</template>
