<script setup lang="ts">
import UiButton from '@/components/Ui/UiButton.vue'
import MyHeader from '@/components/Layout/MyHeader.vue'
import MyFooter from '@/components/Layout/Footer/MyFooter.vue'
</script>

<template>
  <div>
    <MyHeader />
    <main
      class="container"
      style="  min-height: calc(100vh - var(--header-height));"
    >
      <slot />
    </main>

    <MyFooter />

    <NuxtErrorBoundary>
      <template #error="{ error, clearError }">
        You can display the error locally here: {{ error }}
        <UiButton @click="clearError">
          This will clear the error.
        </UiButton>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
