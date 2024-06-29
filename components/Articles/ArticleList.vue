<script setup lang="ts">
import ArticleCard from './ArticleCard.vue'
import type { Article } from '@/types'

defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div class="article-list">
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
      class="mb-10"
      no-title
    />
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
