<script setup lang="ts">
const props = withDefaults(defineProps<{
  is?: 'button' | 'a'
  width?: number | string
  variant?: 'primary' | 'outline'
}>(), {
  is: 'button',
})

const styles = computed(() => {
  return {
    width: parseNumber(props.width) ? `${props.width}px` : props.width,
    height: parseNumber(props.width) ? `${props.width}px` : props.width,
  }
})

const classes = computed(() => {
  return {
    'ui-icon-button--primary': props.variant === 'primary',
    'ui-icon-button--outline': props.variant === 'outline',
  }
})
</script>

<template>
  <component
    :is="is"
    class="ui-icon-button"
    :class="classes"
    :style="styles"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.ui-icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
}

.ui-icon-button--primary {
  background-color: $color-black;
  color: #fff;
}

.ui-icon-button--outline {
  color: $color-black;
  border: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
