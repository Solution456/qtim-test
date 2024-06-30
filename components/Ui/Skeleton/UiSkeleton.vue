<script setup lang="ts">
interface SkeletonProps {
  rows?: number
  isLoading: boolean
  count?: number
  bg?: boolean
}

withDefaults(defineProps<SkeletonProps>(), {
  count: 1,
  rows: 3,
  bg: false,
})
</script>

<template>
  <template v-if="isLoading">
    <template
      v-for="i in count"
      :key="i"
    >
      <div
        :class="[bg ? 'skeleton' : '']"
        v-bind="$attrs"
      >
        <slot
          v-if="isLoading"
          :key="i"
          name="template"
        />
      </div>
    </template>
  </template>

  <template v-else>
    <slot v-bind="$attrs" />
  </template>
</template>

<style scoped lang="scss">
@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    rgba(190, 190, 190, 0.2) 25%,
    rgba(129, 129, 129, 0.24) 37%,
    rgba(190, 190, 190, 0.2) 63%
  );
  background-size: 400% 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  animation: skeleton-loading 1.4s ease infinite;
}
</style>
