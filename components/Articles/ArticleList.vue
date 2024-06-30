<script setup lang="ts">
import ArticleCard from './ArticleCard.vue'
import ArticleCardSkeleton from './ArticleCardSkeleton.vue'
import type { Article } from '@/types'

defineProps<{
  articles: Article[]
  isLoading?: boolean
}>()
</script>

<template>
  <div class="article-list">
    <template v-if="!isLoading">
      <ArticleCard

        v-for="article in articles"
        :key="article.id"
        :article="article"
        class="mb-10"
        no-title
      />
    </template>

    <template v-else>
      <ArticleCardSkeleton
        v-for="i in 8"
        :key="i"
        class="mb-10"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.article-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}
</style>
