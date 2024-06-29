<script setup lang="ts">
const props = defineProps<{
  index?: number
  active?: boolean
  disabled?: boolean
}>()

const classes = computed(() => {
  return {
    'pagination-item--active': props.active,
    'pagination-item--disabled': !props.active && props.disabled,
  }
})
</script>

<template>
  <button
    class="pagination-item"
    :class="classes"
  >
    <slot>
      {{ index }}
    </slot>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.pagination-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: none;
  background-color: $text-tertiary;
  color: $text-primary;
  cursor: pointer;

  transition:
    background-color,
    color 0.2s ease;

  &:hover {
    background-color: $color-black;
    color: $text-white;
  }

  &--disabled {
    background-color: $text-tertiary-2;

    cursor: not-allowed;
  }

  &--active {
    background-color: $color-black;
    color: $text-white;
  }
}
</style>
