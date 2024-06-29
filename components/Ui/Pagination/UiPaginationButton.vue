<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean
}>()

const classes = computed(() => {
  return {
    'pagination-button--disabled': props.disabled,
  }
})
</script>

<template>
  <button
    class="pagination-button"
    :class="classes"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.pagination-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background-color: transparent;
  border: 1px solid $color-tertiary-2;
  color: $text-primary;
  cursor: pointer;
  transition:
    background-color,
    color 0.2s ease;

  &:hover {
    background-color: $color-tertiary;
    color: $text-white;
  }

  &--disabled {
    background-color: $color-tertiary-2;

    pointer-events: none;
  }
}
</style>
