<script setup lang="ts">
import type { Contact } from '@/types'

type Props = Contact

defineProps<Props>()
</script>

<template>
  <div
    class="contact-item"
  >
    <h4
      v-if="title"
      class="contact-item__title mb-1"
    >
      {{ title }}
    </h4>

    <p
      v-if="address"
      class="contact-item__address"
    >
      {{ address }}
    </p>

    <p
      v-if="phone"
      class="contact-item__phone"
    >
      {{ phone }}
    </p>

    <p
      v-if="contact"
      class="contact-item__contact"
    >
      {{ contact }}
    </p>

    <div
      v-if="$slots.links"
      class="contact-item__links"
    >
      <slot name="links" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-size: 16px;
  }

  &__title {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
