<script setup lang="ts">
import type { Article } from '@/types'
import { isNumber } from '@/utils'

const props = withDefaults(defineProps<{
  article: Article
  width?: number | string
  noTitle?: boolean
}>(), {
  width: 280,
})

const styles = computed(() => {
  return {
    width: isNumber(props.width) ? `${props.width}px` : props.width,
  }
})
</script>

<template>
  <div
    class="article-card"
    :style="{ ...styles }"
  >
    <div class="article-card__header">
      <NuxtImg
        :src="article.image"
        :placeholder="[280, 280]"
        placeholder-class="image-placeholder"
        width="280"
        fit="cover"
        loading="lazy"
      />
    </div>

    <div class="article-card__body">
      <div class="article-card__caption">
        <h4
          v-if="!noTitle"
          class="article-card__title"
        >
          <slot name="title">
            {{ article.title }}
          </slot>
        </h4>
      </div>

      <p class="article-card__preview my-6">
        <slot name="preview">
          {{ article.preview }}
        </slot>
      </p>

      <div class="article-card__footer">
        <slot name="footer">
          <NuxtLink
            class="more-btn"
            :to=" {

              name: 'articles-id',
              params: {
                id: article.id,
              },
            }"
          >
            Read more
          </NuxtLink>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.article-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__preview {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2;
  }

  .more-btn {
    font-size: 20px;
    cursor: pointer;
    color: $color-secondary;

    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    .more-btn {
      opacity: 1;
    }
  }
}

.image-placeholder {
  background-color: $color-tertiary;
  border: none;
}
</style>
